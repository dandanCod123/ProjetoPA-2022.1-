import 'package:flutter/material.dart';

class Texts extends StatelessWidget {
  const Texts({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: const <Widget>[
        Text(
          'Mobile',
          textAlign: TextAlign.center,
          style: TextStyle(
              fontSize: 28, fontWeight: FontWeight.bold, color: Colors.white),
        ),
        Text('YOLO',
            textAlign: TextAlign.center,
            style: TextStyle(
                fontSize: 64,
                fontWeight: FontWeight.bold,
                color: Colors.white)),
        Text('Object detection and recognition',
            textAlign: TextAlign.center,
            style: TextStyle(
                fontSize: 30,
                fontWeight: FontWeight.bold,
                color: Colors.white)),
      ],
    );
  }
}
