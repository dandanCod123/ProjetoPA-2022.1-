import base64
from hashlib import sha1
from logging import captureWarnings
# from pydantic import BaseModel
# from fastapi import FastAPI
# import uvicorn

from core import mask as msk
import base64
import numpy as np
import cv2
from PIL import Image
from io import BytesIO

# =============================================================================
model_path = 'models/coco/model.tflite'
labels_path = 'models/coco/labelmap.txt'


mask = msk.classifier(model_path, labels_path)

img = cv2.imread('221340M_1920x1080.webp')

def img_to_b64(img):
    _, im_arr = cv2.imencode('.png', img)  
    im_bytes = im_arr.tobytes()
    im_b64 = base64.b64encode(im_bytes)
    return im_b64
    
def b64_to_img(im_b64):
    im_bytes = base64.b64decode(im_b64)
    im_arr = np.frombuffer(im_bytes, dtype=np.uint8)  # im_arr is one-dim Numpy array
    img = cv2.imdecode(im_arr, flags=cv2.IMREAD_COLOR)
    return img

with open('64img.txt', 'r') as f:
    string = f.read()

res_img = mask.classify(b64_to_img(string))

cv2.imwrite('result2.png', res_img)

with open('exit.txt', 'w') as f2:
    f2.write(str(img_to_b64(res_img).decode('utf-8')))


# # class image(BaseModel):
    
# # img = None
# # img = cv2.imread('221340M_1920x1080.webp')
# with open("221340M_1920x1080.webp", "rb") as img:
#     # encoded = base64.b64encode(img.read())
#     # result_img = mask.classify(img.read())
#     im = img.read()

# # encoded = base64.b64encode(img)#.decode('utf-8')
# # with open('64img.txt', 'w') as f:
# #     f.write(encoded.decode('utf-8'))
# print(np.shape(im))
# # cv2.imshow('name',img)
# # encoded = base64.b64encode(result_img)
# decoded = base64.b64decode(encoded)
# # print(np.shape(decoded))

# im = Image.open(BytesIO(base64.b64decode(encoded)))
# im.save('image1.png', 'PNG')

# # _, dec = cv2.imencode('.PNG', decoded)
# # result_img = mask.classify(dec)
# # cv2.imwrite('result.png', result_img)
# # cv2.imwrite()
# # =============================================================================

# # img = base64.b64decode(photo)



# # result_img = mask.classify(img)
# # # _, coded_img = cv2.imencode('.PNG', result_img)
# # result_str = base64.b64encode(result_img)


# # =============================================================================


# # uvicorn main:app --reload
# # if __name__ == "__main__":
# #     uvicorn.run("main:app", host="1.1.1.1", port=8000, log_level="info")
