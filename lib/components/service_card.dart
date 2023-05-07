import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:wudo/constants.dart';

class ServiceCard extends StatelessWidget {
  final String name;
  final String picture;
  final String rating;
  final String serviceType;
  final String distance;
  final String deliveryTime;
  final String deliveryPrice;
  final Key key;

  ServiceCard({
    this.name,
    this.picture,
    this.rating,
    this.serviceType,
    this.distance,
    this.deliveryTime,
    this.deliveryPrice,
    this.key,
  });

  Widget _dotSeparator() {
    return Container(
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(50),
      ),
      margin: EdgeInsets.symmetric(horizontal: 10),
      width: 5,
      height: 5,
    );
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.black45, // background
      key: key,
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 1.0),
        child: Card(
          elevation: 2.5,
          child: Container(
            decoration: BoxDecoration(
              border: Border.all(color: Colors.lightBlue.shade100),
              borderRadius: BorderRadius.all(
                Radius.circular(4),
              ),
            ),
            child: Row(
              children: <Widget>[
                Container(
                  width: 100,
                  child: Center(
                    child: Container(
                      width: 80,
                      height: 80,
                      decoration: BoxDecoration(
                        color: Colors.blueGrey,
                        shape: BoxShape.rectangle,
                        border: Border.all(
                          width: 1.0,
                          color: Colors.blueGrey,
                        ),
                      ),
                      child: ClipOval(
                        child: CachedNetworkImage(
                          imageUrl: picture,
                          placeholder: (context, url) => Container(
                            height: 80,
                            width: 80,
                            child: Center(
                              child: CircularProgressIndicator(),
                            ),
                          ),
                          errorWidget: (context, url, error) => Center(
                            child: Icon(Icons.error),
                          ),
                          fit: BoxFit.contain,
                        ),
                      ),
                    ),
                  ),
                ),
                VerticalDivider(),
                Flexible(
                  child: Padding(
                    padding: const EdgeInsets.all(4.0),
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.spaceAround,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: <Widget>[
                        Text(
                          name,
                          overflow: TextOverflow.ellipsis,
                          softWrap: false,
                          style: TextStyle(
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        Row(
                          children: <Widget>[
                            Icon(
                              Icons.star,
                              color: Colors.lightBlue.shade100,
                              size: 20.0,
                            ),
                            SizedBox(
                              width: 3,
                            ),
                            Text(
                              rating,
                              style: TextStyle(
                                color: Colors.lightBlue.shade100,
                                fontSize: 15,
                              ),
                            ),
                            _dotSeparator(),
                            Text(
                              serviceType,
                              style: TextStyle(
                                color: Colors.black,
                                fontSize: 13,
                              ),
                            ),
                            _dotSeparator(),
                            Text(
                              distance,
                              style: TextStyle(
                                color: Colors.white,
                                fontSize: 13,
                              ),
                            )
                          ],
                        ),
                        SizedBox(
                          height: 1.0,
                        ),
                        Row(
                          children: <Widget>[
                            Text(
                              deliveryTime,
                              style: TextStyle(
                                color: deliveryTime == kSemAgenda
                                    ? Colors.redAccent.shade700
                                    : Colors.white,
                                fontSize: 12,
                              ),
                            ),
                            _dotSeparator(),
                            Text(
                              deliveryPrice,
                              style: TextStyle(
                                color: Colors.black,
                                fontSize: 12,
                              ),
                            )
                          ],
                        )
                      ],
                    ),
                  ),
                )
              ],
            ),
          ),
        ),
      ),
    );
  }
}
