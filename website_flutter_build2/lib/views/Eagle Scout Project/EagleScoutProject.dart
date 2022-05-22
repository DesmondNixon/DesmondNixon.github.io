import 'package:flutter/material.dart';
import 'package:website_flutter_build2/widgets/navigation_bar/navigation_bar.dart';

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
              color: Colors.grey[400],
            ),
            child: Padding(
              padding: const EdgeInsets.all(8.0),
              child: Column(
                children: const [
                  Text(
                    "Summary of Project",
                    style: TextStyle(
                      fontSize: 40,
                    ),
                  ),
                  SizedBox(
                    width: 700,
                    child: Text(
                      "The above is an image of the community service project I completed as a part of my Eagle Scout journey. I achieved the Eagle Scout rank in July of 2021 marking the end of my 5 years as a member of Scouts BSA. The project was a culmination of the skills and abilities I gained through this experience.For my project I replaced 10 garden beds at a local community garden -- many of the beds were old, rotting, and inaccessible to those with mobility impairments. The total cost of the project was over 2,000 dollars and I spent months organizing, fundraising, and carrying out the project. Despite the restrictions Covid placed on progress, my troop and I worked hard to revitalize the garden and create a clean, sturdy, and accessible space for the community.",
                      overflow: TextOverflow.fade,
                    ),
                  )
                ],
              ),
            )),
      ]),
    );
  }
}
