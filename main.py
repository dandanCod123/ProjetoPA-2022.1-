import base64
from hashlib import sha1
from logging import captureWarnings
from pydantic import BaseModel
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

import numpy as np
import cv2

from core import mask as msk
import base64

description = """
API for applying COCO/Yolo object recognition on a photo

"""

app = FastAPI(title="YOLO API",
              description=description,
              version="1.0.0")

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# =============================================================================
model_path = 'models/coco/model.tflite'
labels_path = 'models/coco/labelmap.txt'


mask = msk.classifier(model_path, labels_path)

img = None    
img_b64 = None

# =============================================================================
class b64hell(BaseModel):
    b64img : str = None


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

# =============================================================================

@app.post("/upload")
def upload_photo(photo: b64hell):
    global img
    img = b64_to_img(photo.b64img)


@app.get("/mask")
def download_result():
    global img
    global img_b64
    res_img = mask.classify(img)
    
    newphoto = b64hell()
    result_str = str(img_to_b64(res_img).decode('utf-8'))
    newphoto.b64img = result_str
    
    with open('exit.txt', 'w') as f2:
        f2.write(result_str)
    
    return newphoto

# =============================================================================


# uvicorn main:app --reload
# if __name__ == "__main__":
#     uvicorn.run("main:app", host="1.1.1.1", port=8000, log_level="info")
