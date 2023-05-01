import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart' show rootBundle;
import 'package:wudo/components/category_card.dart';
import 'package:wudo/components/highlight_card.dart';
import 'package:wudo/components/service_card.dart';
import 'package:wudo/constants.dart';
import 'package:wudo/models/category.dart';
import 'package:wudo/models/highlight.dart';
import 'package:wudo/models/service.dart';

class ListServices extends StatefulWidget {
  static String id = 'list_services';

  @override
  _ListServicesState createState() => _ListServicesState();
}

class _ListServicesState extends State<ListServices> {
  bool _loading = false;
  List<Category> _categories = [];
  List<Highlight> _highlights = [];
  List<Service> _services = [];

  @override
  void initState() {
    super.initState();

    _loadData();
  }

  Future<void> _loadData() async {
    setState(() {
      _loading = true;
    });

    List<Category> categories = [];
    List<Highlight> highlights = [];
    List<Service> services = [];

    if (_categories.length < 1) {
      categories = await _loadCategories();
    }

    if (_highlights.length < 1) {
      highlights = await _loadHighlights();
    }
    if (_services.length < 1) {
      services = await _loadServices();
    }

    setState(() {
      _categories = categories.length > 1 ? categories : _categories;
      _highlights = highlights.length > 1 ? highlights : _highlights;
      _services = services.length > 1 ? services : _services;
      _loading = false;
    });
  }

  Future<List<Category>> _loadCategories() async {
    List<dynamic> json =
        jsonDecode(await rootBundle.loadString('assets/categories.json'));
    List<Category> categories = [];

    for (var category in json) {
      categories.add(Category.fromJson(category));
    }

    return categories;
  }

  Future<List<Highlight>> _loadHighlights() async {
    List<dynamic> json =
        jsonDecode(await rootBundle.loadString('assets/highlights.json'));
    List<Highlight> highlights = [];

    for (var category in json) {
      highlights.add(Highlight.fromJson(category));
    }

    return highlights;
  }

  Future<List<Service>> _loadServices() async {
    List<dynamic> json =
        jsonDecode(await rootBundle.loadString('assets/services.json'));
    List<Service> services = [];

    for (var service in json) {
      services.add(Service.fromJson(service));
    }

    return services;
  }

  Widget _buildHighlights() {
    return Container(
      height: 190.0,
      color: Colors.white,
      child: Padding(
        padding: const EdgeInsets.only(top: 10, left: 10, bottom: 10),
        child: ListView.builder(
          scrollDirection: Axis.horizontal,
          itemCount: _highlights.length,
          itemBuilder: (BuildContext context, int index) {
            Highlight highlight = _highlights[index];

            return HighlightCard(
              key: Key('${highlight.title}_${highlight.tip}'),
              tip: highlight.tip,
              picture: highlight.picture,
            );
          },
        ),
      ),
    );
  }

  Widget _buildCategories() {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 10.0),
      child: Container(
        height: 145,
        color: Colors.white,
        child: Padding(
          padding: const EdgeInsets.only(top: 10.0, left: 15.0, bottom: 10.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              Text(
                'Categories',
                style: TextStyle(
                  fontSize: 16.0,
                  fontWeight: FontWeight.bold,
                ),
              ),
              Expanded(
                child: ListView.builder(
                  scrollDirection: Axis.horizontal,
                  itemCount: _categories.length,
                  itemBuilder: (context, index) {
                    Category category = _categories[index];

                    return CategoryCard(
                      key: Key('${category.name}_${category.picture}'),
                      name: category.name,
                      picture: category.picture,
                    );
                  },
                ),
              )
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildServices() {
    return SliverFixedExtentList(
      itemExtent: 108.0,
      delegate: SliverChildBuilderDelegate(
        (context, index) {
          Service service = _services[index];

          return ServiceCard(
            key: Key('${service.name}_${service.picture}'),
            picture: service.picture,
            name: service.name,
            deliveryPrice: service.deliveryPrice,
            deliveryTime: service.deliveryTime,
            distance: service.distance,
            serviceType: service.serviceType,
            rating: service.rating,
          );
        },
        childCount: _services.length,
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        color: Colors.white,
        child: SafeArea(
          child: Container(
            color: kBackgroundColor,
            child: CustomScrollView(
              slivers: <Widget>[
                SliverAppBar(
                  backgroundColor: Colors.white,
                  expandedHeight: 80.0,
                  flexibleSpace: FlexibleSpaceBar(
                    background: Stack(
                      children: <Widget>[
                        Positioned(
                          top: 20,
                          left: 20,
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.start,
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: <Widget>[
                              Text(
                                'ENTREGAR EM',
                                textAlign: TextAlign.left,
                                style: TextStyle(
                                  color: kBrandDarkenGrey,
                                  fontSize: 17.0,
                                ),
                              ),
                              Row(
                                crossAxisAlignment: CrossAxisAlignment.center,
                                children: <Widget>[
                                  Text(
                                    'Av. Brasil, 123',
                                    style: TextStyle(
                                        color: kBrandDarkerGrey,
                                        fontSize: 18.0,
                                        fontWeight: FontWeight.w500),
                                  ),
                                  Icon(
                                    Icons.keyboard_arrow_down,
                                    color: kBrandRed,
                                    size: 18.0,
                                  )
                                ],
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
                SliverPersistentHeader(
                  pinned: true,
                  floating: false,
                  delegate: _SliverAppBarDelegate(
                    AppBar(
                      backgroundColor: Colors.white,
                      elevation: 0.0,
                      centerTitle: false,
                      title: Container(
                        decoration: BoxDecoration(
                          color: kBrandGrey,
                          borderRadius: BorderRadius.circular(4.0),
                        ),
                        child: TextField(
                          decoration: InputDecoration(
                            icon: Padding(
                              padding: const EdgeInsets.all(8.0),
                              child: Icon(
                                Icons.search,
                                color: kBrandRed,
                              ),
                            ),
                            hintText: 'Prato ou servicee',
                            hintStyle: TextStyle(color: kBrandDarkGrey),
                            border: InputBorder.none,
                          ),
                        ),
                      ),
                      actions: <Widget>[
                        Padding(
                          padding: const EdgeInsets.only(right: 10.0),
                          child: Center(
                            child: Text(
                              'Filtros',
                              style: TextStyle(
                                color: kBrandRed,
                                fontSize: 16.0,
                              ),
                            ),
                          ),
                        )
                      ],
                    ),
                  ),
                ),
                if (_loading)
                  SliverList(
                    delegate: SliverChildListDelegate(
                      <Widget>[
                        Container(
                          width: double.infinity,
                          height: 200.0,
                          child: Center(
                            child: CircularProgressIndicator(
                              strokeWidth: 5,
                              valueColor:
                                  AlwaysStoppedAnimation<Color>(Colors.red),
                            ),
                          ),
                        ),
                      ],
                    ),
                  )
                else ...[
                  SliverToBoxAdapter(
                    child: _buildHighlights(),
                  ),
                  SliverToBoxAdapter(
                    child: _buildCategories(),
                  ),
                  SliverList(
                    delegate: SliverChildListDelegate([
                      Container(
                        color: Colors.white,
                        child: Padding(
                          padding: const EdgeInsets.all(15.0),
                          child: Text(
                            'Restaurantes',
                            style: TextStyle(
                              fontSize: 16.0,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                        ),
                      ),
                    ]),
                  ),
                  _buildServices()
                ],
              ],
            ),
          ),
        ),
      ),
      bottomNavigationBar: BottomNavigationBar(
          type: BottomNavigationBarType.fixed,
          unselectedItemColor: Colors.black45,
          selectedItemColor: Colors.black87,
          showUnselectedLabels: true,
          items: [
            BottomNavigationBarItem(
              icon: Icon(Icons.home),
              label: 'Início',
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.search),
              label: 'Busca',
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.description),
              label: 'Pedidos',
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.person_outline),
              label: 'Perfil',
            ),
          ]),
    );
  }
}

class _SliverAppBarDelegate extends SliverPersistentHeaderDelegate {
  final AppBar _appBar;

  _SliverAppBarDelegate(this._appBar);

  @override
  Widget build(
      BuildContext context, double shrinkOffset, bool overlapsContent) {
    return Container(
      child: _appBar,
    );
  }

  @override
  double get maxExtent => 60;

  @override
  double get minExtent => 60;

  @override
  bool shouldRebuild(SliverPersistentHeaderDelegate oldDelegate) {
    return false;
  }
}
