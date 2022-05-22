import 'package:flutter/material.dart';
import 'package:website_flutter_build/widgets/navigation_bar/navigation_bar.dart';

class Settings extends StatelessWidget {
  const Settings({Key? key}) : super(key: key);

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
              color: Colors.grey[400],
            ),
            child: Padding(
              padding: const EdgeInsets.all(8.0),
              child: Column(
                children: const [
                  Text(
                    "Settings",
                    style: TextStyle(
                      fontSize: 40,
                    ),
                  ),
                  SizedBox(
                    width: 700,
                    child: Text(
                      "Sample Text",
                      textAlign: TextAlign.center,
                    ),
                  )
                ],
              ),
            )),
      ]),
    );
  }
}
