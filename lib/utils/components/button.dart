// ignore_for_file: avoid_print

import 'package:flutter/material.dart';

class Buttom extends StatelessWidget {
  final String texto;
  final Function(BuildContext ctx) buttom;
  const Buttom({super.key, required this.texto, required this.buttom});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        buttom(context);
      },
      child: Container(
        height: 50.0,
        width: 200.0,
        padding: const EdgeInsets.all(8.0),
        margin: const EdgeInsets.symmetric(horizontal: 8.0),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(20.0),
          border: Border.all(
            color: Colors.white,
            width: 3,
          ),
          // color: Colors.lightGreen[500],
        ),
        child: Center(
          child: Text(
            texto,
            style: const TextStyle(
                color: Colors.white, fontSize: 20, fontWeight: FontWeight.bold),
          ),
        ),
      ),
    );
  }
}
