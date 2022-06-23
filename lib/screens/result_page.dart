import 'dart:convert';
import 'dart:ui';
import 'package:flutter/material.dart';
import 'package:yolodetec/utils/resize.dart';

class ResultPage extends StatelessWidget {
  String seila;
  ResultPage({Key? key, required this.seila}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    Image img = Image.memory(base64.decode(seila));
    return MaterialApp(
        debugShowCheckedModeBanner: false,
        home: Scaffold(
          body: Container(
            decoration: const BoxDecoration(
              gradient: LinearGradient(
                colors: [Color(0xff08203e), Color(0xff557c93)],
                begin: Alignment.bottomCenter,
                end: Alignment.topCenter,
              ),
            ),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Center(
                  child: Container(
                    width: 256,
                    height: 420,
                    decoration: BoxDecoration(
                        color: Colors.white,
                        image: DecorationImage(
                            image: img.image, fit: BoxFit.fitHeight),
                        border: Border.all(
                          color: Colors.white,
                          width: 4,
                        )),
                  ),
                ),
              ],
            ),
          ),
        ));
  }
}
