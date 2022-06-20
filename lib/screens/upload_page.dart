import 'package:flutter/material.dart';
import 'package:yolodetec/screens/help_page.dart';
import 'package:yolodetec/utils/components/circle_buttom.dart';

class UploadPage extends StatelessWidget {
  const UploadPage({Key? key}) : super(key: key);

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
          child: Column(mainAxisAlignment: MainAxisAlignment.center,
              // crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                const Spacer(flex: 3),
                const Center(child: CircleButtom1()),
                const Padding(padding: EdgeInsets.only(top: 30.0)),
                const Text('Click to upload a image',
                    textAlign: TextAlign.center,
                    style: TextStyle(
                        fontSize: 30,
                        fontWeight: FontWeight.bold,
                        color: Colors.white)),
                const Spacer(flex: 2),
                // alignment: Alignment.bottomCenter,
                CircleButtom2(
                  buttom: (BuildContext context) {
                    Navigator.push(
                      context,
                      MaterialPageRoute(builder: (context) => const HelpPage()),
                    );
                  },
                ),
                const Spacer(flex: 1),
              ]),
        ),
      ),
    );
  }
}
