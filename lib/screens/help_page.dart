import 'package:flutter/material.dart';

class HelpPage extends StatelessWidget {
  const HelpPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        extendBodyBehindAppBar: true,
        appBar: AppBar(
          backgroundColor: Colors.transparent,
          elevation: 0,
          leading: IconButton(
            icon: const Icon(Icons.arrow_back_ios_new_outlined),
            onPressed: () {
              Navigator.pop(context);
            },
          ),
        ),
        body: Container(
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              colors: [Color(0xff08203e), Color(0xff557c93)],
              begin: Alignment.bottomCenter,
              end: Alignment.topCenter,
            ),
          ),
          child: Center(
            child: Column(mainAxisAlignment: MainAxisAlignment.center,
                // crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  const Text(
                    'Help',
                    textAlign: TextAlign.center,
                    style: TextStyle(
                        fontSize: 30.0,
                        fontWeight: FontWeight.bold,
                        color: Colors.white),
                  ),
                  const Padding(padding: EdgeInsets.only(top: 30.0)),
                  Container(
                    height: 420,
                    width: 256,
                    decoration: BoxDecoration(
                        border: Border.all(
                      color: Colors.white,
                      width: 2,
                    )),
                    child: const SingleChildScrollView(
                      child: Text(
                        "Bem vindo ao nosso Aplicativo de detecção e reconhecimento de objetos com Yolo. \n\n1. Tenha em sua galeria a imagem a qual você deseja que o aplicativo reconheça, \n\n2. Para começar: Clique no botão "
                        '"+"'
                        " para selecionar sua imagem partindo da galeria e enviá-la ao aplicativo, \n\n3. Você será direcionado à próxima tela na qual será processada a imagem e a devolverá com uma caixa delimitando o que foi detectado e reconhecido na imagem com seu devido nome.",
                        style: TextStyle(
                            color: Colors.white,
                            fontSize: 20,
                            fontWeight: FontWeight.bold),
                      ),
                    ),
                  ),
                ]),
          ),
        ),
      ),
    );
  }
}