import 'dart:io';
import 'package:image/image.dart';

class ResizeImage2 {
  static Image resizeMyImage(Image resizeThisFile) {
    Image? thumbnail = copyResize(resizeThisFile, width: 120);

    return thumbnail;
  }
}
