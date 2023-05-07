import 'package:flutter/material.dart';
import 'package:wudo/screens/list_services.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Wudo',
      color: Colors.white,
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.blue,
        brightness: Brightness.dark,
        cardColor: Colors.blueGrey,
      ),
      initialRoute: ListServices.id,
      routes: {ListServices.id: (context) => ListServices()},
    );
  }
}
