// ignore_for_file: avoid_print

import 'dart:convert';
import 'dart:io';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:yolodetec/screens/result_page.dart';
import 'package:yolodetec/services/api.dart';

class CircleButtom1 extends StatelessWidget {
  const CircleButtom1({super.key});

  @override
  Widget build(BuildContext context) {
    processImage(XFile? image) async {
      File img = File(image!.path);
      List<int> imageBytes = await img.readAsBytes();
      String base64Image = base64Encode(imageBytes);
      await sendImage(base64Image);
      var seila = await receiveImage();
      print(seila['b64img']);
      Navigator.push(
        context,
        MaterialPageRoute(
            builder: (context) => ResultPage(seila: seila['b64img'])),
      );
    }

    selectFromImagePicker() async {
      var image = await ImagePicker().pickImage(source: ImageSource.gallery);
      if (image == null) return;

      processImage(image);
    }

    return GestureDetector(
      onTap: () {
        print('ADICIONADO');
        selectFromImagePicker();
        // Navigator.push(context,
        //     MaterialPageRoute(builder: (context) => const UploadPage()));
      },
      child: Container(
        height: 180.0,
        width: 180.0,
        padding: const EdgeInsets.all(8.0),
        margin: const EdgeInsets.symmetric(horizontal: 8.0),
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          border: Border.all(
            color: Colors.white,
            width: 3,
          ),
          // color: Colors.lightGreen[500],
        ),
        child: const Center(
          child: Text(
            '+',
            style: TextStyle(color: Colors.white, fontSize: 100),
          ),
        ),
      ),
    );
  }
}

class CircleButtom2 extends StatelessWidget {
  final Function(BuildContext ctx) buttom;
  const CircleButtom2({super.key, required this.buttom});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        buttom(context);
      },
      child: Container(
        height: 60.0,
        width: 60.0,
        padding: const EdgeInsets.all(8.0),
        margin: const EdgeInsets.symmetric(horizontal: 8.0),
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          border: Border.all(
            color: Colors.white,
            width: 3,
          ),
          // color: Colors.lightGreen[500],
        ),
        child: const Center(
          child: Text(
            '?',
            style: TextStyle(
                color: Colors.white, fontSize: 30, fontWeight: FontWeight.bold),
          ),
        ),
      ),
    );
  }
}
