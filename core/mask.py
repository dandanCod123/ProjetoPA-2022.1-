import tensorflow.lite as tf
import cv2
import numpy as np


class classifier():
    def __init__(self, model_path, labels_path):
        self.model_path = model_path
        self.labels_path = labels_path

        self.results = None

        self.classified = False

        self.labels = None

        # Load TFLite model and allocate tensors.
        self.cnn = tf.Interpreter(self.model_path)
        self.cnn.allocate_tensors()

        # get input and output tensors
        self.input_details = self.cnn.get_input_details()
        self.output_details = self.cnn.get_output_details()

        self.input_shape = self.input_details[0]['shape']

    def classify(self, img, threshold=0.6):

        # Read the image and decode to a tensor
        img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        img_rgb = cv2.resize(
            img_rgb, (self.input_shape[1], self.input_shape[2]), cv2.INTER_AREA)
        img_rgb = img_rgb.reshape(self.input_shape)
        input_dtype = self.input_details[0]['dtype']
        img_rgb = img_rgb.astype(input_dtype)

        input_tensor = np.array(img_rgb, dtype=input_dtype)
        input_index = self.input_details[0]["index"]

        self.cnn.set_tensor(input_index, input_tensor)

        # Run the inference
        self.cnn.invoke()

        boxes = self.cnn.get_tensor(self.output_details[0]['index'])[0]
        labels = self.cnn.get_tensor(self.output_details[1]['index'])[0]
        scores = self.cnn.get_tensor(self.output_details[2]['index'])[0]
        num = self.cnn.get_tensor(self.output_details[3]['index'])[0]

        self.results = {"bbox": boxes,
                        "labels": labels,
                        "scores": scores,
                        "num": num}
        self.classified = True
        self.get_labels()
        return self.mark_bbox(img, threshold)

    def get_labels(self):
        if not self.classified:
            print("ERROR - Not yet classified. Run classify")
            return

        file = open(self.labels_path)
        category_index = {}
        for i, label in enumerate(file):
            if i == 0:
                label = label[:-1]
                blank = label
            else:
                label = label[:-1]
                if label != blank:
                    category_index.update({(i-1): label})
        file.close()
        self.labels = category_index
        return category_index

    def mark_bbox(self, img, threshold, labels=True):
        if not self.classified:
            print("ERROR - Not yet classified. Run classify")
            return
        res = self.results
        bbox = res['bbox']
        img_height, img_width, _ = img.shape
        for i, box in enumerate(bbox):
            if res['scores'][i] >= threshold:
                x = np.empty([2, 1])
                y = np.empty([2, 1])
                y[0], x[0], y[1], x[1] = box
                x, y = self.reescale_bbox(x, y, img_height, img_width)
                color = (0, 255, 0)
                cv2.rectangle(img, (int(x[0]), int(y[0])),
                              (int(x[1]), int(y[1])), color, 2)
                if labels:
                    if self.labels:
                        font = cv2.FONT_HERSHEY_SIMPLEX
                        font_scale = 1
                        thickness = 2
                        label = f"{self.labels[res['labels'][i]]} {100*res['scores'][i]:.0f}%"
                        cv2.putText(img, label, (int(x[0]), int(y[1])),
                                    font, font_scale, color, thickness)
                    else:
                        print('ERROR - labels not loaded. Run get_labels() first')
        return img

    def reescale_bbox(self, x, y, height, width):
        x[0] = x[0] * width
        x[1] = x[1] * width
        y[0] = y[0] * height
        y[1] = y[1] * height
        return x, y
