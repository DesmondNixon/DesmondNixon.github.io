import 'package:flutter/material.dart';
import 'package:website_flutter_build/widgets/navigation_bar/navigation_bar.dart';

class EagleScoutProject extends StatelessWidget {
  const EagleScoutProject({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Column(children: <Widget>[
        const NavigationBars(),
        const Padding(
          padding: EdgeInsets.all(8.0),
        ),
        Container(
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(7),
              color: Colors.blueGrey,
            ),
            child: const Padding(
              padding: EdgeInsets.all(8.0),
              child: Text("Summary of Project"),
            )),
      ]),
    );
  }
}
