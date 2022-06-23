import 'dart:convert';
import 'package:http/http.dart' as http;

Future<http.Response> sendImage(String photo) {
  return http.post(
    Uri.parse('http://10.110.1.244:8000/upload'),
    headers: <String, String>{
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: jsonEncode(<String, String>{
      'b64img': photo,
    }),
  );
}

Future<dynamic> receiveImage() async {
  var response = await http.get(
    Uri.parse('http://10.110.1.244:8000/mask'),
    headers: <String, String>{
      'Content-Type': 'application/json; charset=UTF-8',
    },
  );
  if (response.statusCode == 200) {
    return jsonDecode(response.body);
  } else {
    throw Exception('Failed to load');
  }
}
