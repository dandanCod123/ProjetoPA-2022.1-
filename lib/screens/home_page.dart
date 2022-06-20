// ignore_for_file: avoid_unnecessary_containers

import 'package:flutter/material.dart';
// import 'package:yolodetec/home/help_page.dart';
import 'package:yolodetec/screens/upload_page.dart';

import '../utils/components/button.dart';
import '../utils/components/texts.dart';

class HomePage extends StatelessWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
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
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: [
                  const Texts(),
                  const Image(
                    image: AssetImage('assets/web-camera.png'),
                  ),
                  Buttom(
                    texto: 'Start',
                    buttom: (BuildContext context) {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (context) => const UploadPage()),
                      );
                    },
                  )
                ]),
          ),
        ));
  }
}
