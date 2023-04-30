class Highlight {
  final String title;
  final String tip;
  final String picture;

  Highlight({required this.title, required this.tip, required this.picture});

  factory Highlight.fromJson(jsonData) {
    return Highlight(
      title: jsonData['title'],
      tip: jsonData['tip'],
      picture: jsonData['picture'],
    );
  }
}
