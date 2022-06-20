class Photo {
  String photo;

  Photo({required this.photo});

  Photo.fromJson(Map<String, dynamic> json) : photo = json["photo"];

  Map<String, dynamic> toJson() => {
        "photo": photo,
      };
}
