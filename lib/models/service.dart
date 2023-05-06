import 'dart:convert';

class Service {
  final String name;
  final String picture;
  final String rating;
  final String serviceType;
  final String distance;
  final String deliveryTime;
  final String deliveryPrice;

  Service({
    this.name,
    this.picture,
    this.rating,
    this.serviceType,
    this.distance,
    this.deliveryPrice,
    this.deliveryTime,
  });

  factory Service.fromJson(jsonData) {
    return Service(
      name: jsonData['name'],
      picture: jsonData['picture'],
      rating: jsonData['rating'],
      serviceType: jsonData['serviceType'],
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
      'serviceType': serviceType,
      'distance': distance,
      'deliveryTime': deliveryTime,
      'deliveryPrice': deliveryPrice
    });
  }
}
