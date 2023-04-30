import 'dart:convert';

class Service {
  final String name;
  final String picture;
  final String rating;
  final String foodType;
  final String distance;
  final String deliveryTime;
  final String deliveryPrice;

  Service({
    required this.name,
    required this.picture,
    required this.rating,
    required this.foodType,
    required this.distance,
    required this.deliveryPrice,
    required this.deliveryTime,
  });

  factory Service.fromJson(jsonData) {
    return Service(
      name: jsonData['name'],
      picture: jsonData['picture'],
      rating: jsonData['rating'],
      foodType: jsonData['foodType'],
      distance: jsonData['distance'],
      deliveryTime: jsonData['deliveryTime'],
      deliveryPrice: jsonData['deliveryPrice'],
    );
  }

  toJson() {
    return jsonEncode({
      'name': name,
      'picture': picture,
      'rating': rating,
      'foodType': foodType,
      'distance': distance,
      'deliveryTime': deliveryTime,
      'deliveryPrice': deliveryPrice
    });
  }
}
