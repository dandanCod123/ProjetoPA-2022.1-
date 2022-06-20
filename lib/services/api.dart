import 'dart:convert';

import 'package:http/http.dart' as http;
import 'package:yolodetec/models/photo.dart';

class ComputationalVisionApi {
  Future<List<Photo>> fetchImage() async {
    var response = await http
        .get(Uri.http('https://jsonplaceholder.typicode.com', 'todos'));

    if (response.statusCode == 200) {
      return List<Photo>.from(
          json.decode(response.body).map((x) => Photo.fromJson(x)));
    } else {
      throw Exception("Failed");
    }
  }
}
