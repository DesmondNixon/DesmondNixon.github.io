import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:website_flutter_build/views/Eagle%20Scout%20Project/EagleScoutProject.dart';
import 'package:website_flutter_build/views/Home_main/Home_main.dart';
import 'package:website_flutter_build/views/Settings/Settings.dart';

class NavigationBars extends StatelessWidget {
  const NavigationBars({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Card(
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(15)),
      child: SizedBox(
        height: 60,
        width: MediaQuery.of(context).size.width,
        child: Scaffold(
          appBar: PreferredSize(
            preferredSize: const Size.fromHeight(60),
            child: AppBar(
              titleSpacing: 0,
              actions: [
                PopupMenuButton<int>(
                    itemBuilder: (context) => [
                          PopupMenuItem(
                            child: TextButton(
                                onPressed: () {
                                  Navigator.push(
                                    context,
                                    MaterialPageRoute(
                                        builder: (context) => const Settings()),
                                  );
                                },
                                child: const Text('Settings')),
                          )
                        ])
              ],
              title: Row(
                children: [
                  const Text(
                    "ezy's  Webpage",
                    style: TextStyle(color: Colors.black),
                  ),
                  const Padding(padding: EdgeInsets.only(left: 50)),
                  ElevatedButton(
                      onPressed: () async {
                        const url =
                            'https://www.youtube.com/channel/UCfCUldnUF3xu4N1bhLBKNRQ';
                        if (await canLaunch(url)) {
                          await launch(url);
                        } else {
                          throw 'Could not launch $url';
                        }
                      },
                      child: const Text('My Youtube')),
                  const Padding(
                    padding: EdgeInsets.only(right: 30),
                  ),
                  ElevatedButton(
                      onPressed: () async {
                        const url =
                            'https://www.linkedin.com/in/desmond-nixon/';
                        if (await canLaunch(url)) {
                          await launch(url);
                        } else {
                          throw 'Could not launch $url';
                        }
                      },
                      child: const Text('My LinkedIn')),
                  const Padding(
                    padding: EdgeInsets.only(right: 30),
                  ),
                  ElevatedButton(
                      onPressed: () async {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                              builder: (context) => const EagleScoutProject()),
                        );
                      },
                      child: const Text('Eagle Scout Project')),
                  const Padding(
                    padding: EdgeInsets.only(right: 30),
                  ),
                ],
              ),
              backgroundColor: Colors.red,
              shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(15)),
              leading: Builder(
                builder: (BuildContext context) {
                  return Padding(
                    padding: const EdgeInsets.only(left: 2),
                    child: IconButton(
                        icon: Image.asset('D.png'),
                        onPressed: () {
                          Navigator.push(
                            context,
                            MaterialPageRoute(
                                builder: (context) => const HomeView()),
                          );
                        }),
                  );
                },
              ),
            ),
          ),
        ),
      ),
    );
    //   Container(
    //   padding: const EdgeInsets.all(10),
    //   child: Container(
    //     height: 100,
    //     decoration: BoxDecoration(
    //         color: Colors.blue[900], borderRadius: BorderRadius.circular(25)),
    //     padding: const EdgeInsets.all(8),
    //     child: Column(
    //       children: [
    //         Row(
    //           children: [
    //             const Padding(
    //               padding: EdgeInsets.only(right: 20),
    //             ),
    //             SizedBox(
    //               height: 10,
    //               width: 10,
    //               child: Scaffold(
    //                   drawer: Drawer(
    //                 child: ListView(
    //                   children: [
    //                     ListTile(
    //                       title: Text('testing'),
    //                     )
    //                   ],
    //                 ),
    //               )),
    //             ),
    //             SizedBox(
    //               height: 100,
    //               width: 100,
    //               child: IconButton(
    //                   onPressed: () {
    //                     // Navigator.push(
    //                     //   context,
    //                     //   MaterialPageRoute(builder: (context) => const HomeView()),
    //                     // );
    //                   },
    //                   icon: Image.asset('D.png')),
    //             ),
    //             const Padding(
    //               padding: EdgeInsets.only(right: 30),
    //             ),
    //             ElevatedButton(
    //                 onPressed: () async {
    //                   const url =
    //                       'https://www.youtube.com/channel/UCfCUldnUF3xu4N1bhLBKNRQ';
    //                   if (await canLaunch(url)) {
    //                     await launch(url);
    //                   } else {
    //                     throw 'Could not launch $url';
    //                   }
    //                 },
    //                 child: const Text('My Youtube')),
    //             const Padding(
    //               padding: EdgeInsets.only(right: 30),
    //             ),
    //             ElevatedButton(
    //                 onPressed: () async {
    //                   const url = 'https://www.linkedin.com/in/desmond-nixon/';
    //                   if (await canLaunch(url)) {
    //                     await launch(url);
    //                   } else {
    //                     throw 'Could not launch $url';
    //                   }
    //                 },
    //                 child: const Text('My LinkedIn')),
    //             const Padding(
    //               padding: EdgeInsets.only(right: 30),
    //             ),
    //             ElevatedButton(
    //                 onPressed: () async {
    //                   Navigator.push(
    //                     context,
    //                     MaterialPageRoute(
    //                         builder: (context) => const EagleScoutProject()),
    //                   );
    //                 },
    //                 child: const Text('Eagle Scout Project')),
    //             const Padding(
    //               padding: EdgeInsets.only(right: 30),
    //             ),
    //           ],
    //         ),
    //       ],
    //     ),
    //   ),
    // );
  }
}
