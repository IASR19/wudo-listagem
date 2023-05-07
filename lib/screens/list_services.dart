import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart' show rootBundle;
import 'package:wudo/components/category_card.dart';
import 'package:wudo/components/service_card.dart';
import 'package:wudo/models/category.dart';
import 'package:wudo/models/service.dart';

class ListServices extends StatefulWidget {
  static String id = 'list_services';

  @override
  _ListServicesState createState() => _ListServicesState();
}

class _ListServicesState extends State<ListServices> {
  bool _loading = false;
  List<Category> _categories = [];
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
    List<Service> services = [];

    if (_categories.length < 1) {
      categories = await _loadCategories();
    }

    if (_services.length < 1) {
      services = await _loadServices();
    }

    setState(() {
      _categories = categories.length > 1 ? categories : _categories;
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

  Future<List<Service>> _loadServices() async {
    List<dynamic> json =
        jsonDecode(await rootBundle.loadString('assets/services.json'));
    List<Service> services = [];

    for (var service in json) {
      services.add(Service.fromJson(service));
    }

    return services;
  }

  Widget _buildCategories() {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 10.0),
      child: Container(
        height: 145,
        color: Colors.blueGrey,
        child: Padding(
          padding: const EdgeInsets.only(top: 10.0, left: 15.0, bottom: 10.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              Text(
                'Categorias:',
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 15.0,
                  fontWeight: FontWeight.w100,
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
        color: Colors.black12,
        child: SafeArea(
          child: Container(
            color: Colors.black54,
            child: CustomScrollView(
              slivers: <Widget>[
                SliverAppBar(
                  backgroundColor: Colors.blueGrey,
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
                                'Ambiente',
                                textAlign: TextAlign.left,
                                style: TextStyle(
                                  color: Colors.white,
                                  fontSize: 17.0,
                                ),
                              ),
                              Row(
                                crossAxisAlignment: CrossAxisAlignment.center,
                                children: <Widget>[
                                  Text(
                                    'Contratante',
                                    style: TextStyle(
                                        color: Colors.white38,
                                        fontSize: 18.0,
                                        fontWeight: FontWeight.w500),
                                  ),
                                  Icon(
                                    Icons.keyboard_arrow_down,
                                    color: Colors.blue,
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
                      backgroundColor: Colors.blueGrey,
                      elevation: 0.0,
                      centerTitle: false,
                      title: Container(
                        decoration: BoxDecoration(
                          color: Colors.black54,
                          borderRadius: BorderRadius.circular(4.0),
                        ),
                        child: TextField(
                          cursorColor: Colors.blue,
                          decoration: InputDecoration(
                            icon: Padding(
                              padding: const EdgeInsets.all(8.0),
                              child: Icon(
                                Icons.search_rounded,
                                color: Colors.black54,
                              ),
                            ),
                            hintText: 'Busque',
                            hintStyle: TextStyle(color: Colors.blueGrey),
                            border: InputBorder.none,
                          ),
                        ),
                      ),
                      actions: <Widget>[
                        Padding(
                          padding: const EdgeInsets.only(right: 10.0),
                          child: Center(
                              child: Icon(
                                Icons.filter_alt,
                                color: Colors.black54,
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
                              strokeWidth: 10,
                              valueColor:
                                  AlwaysStoppedAnimation<Color>(Colors.blueGrey),
                            ),
                          ),
                        ),
                      ],
                    ),
                  )
                else ...[
                  SliverToBoxAdapter(
                    child: _buildCategories(),
                  ),
                  SliverList(
                    delegate: SliverChildListDelegate([
                      Container(
                        color: Colors.black26,
                        child: Padding(
                          padding: const EdgeInsets.all(10.0),
                          child: Text(
                            'Catálogo de Serviços:',
                            style: TextStyle(
                              color: Colors.white,
                              fontSize: 15.0,
                              fontWeight: FontWeight.w100,
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
          unselectedItemColor: Colors.white,
          selectedItemColor: Colors.white,
          showUnselectedLabels: true,
          items: [
            BottomNavigationBarItem(
              icon: Icon(Icons.home_max),
              label: 'Início',
            ),
            /*BottomNavigationBarItem(
              icon: Icon(Icons.search),
              label: 'Busca',
            ),*/
            BottomNavigationBarItem(
              icon: Icon(Icons.history),
              label: 'Histórico',
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.person),
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
