// ignore_for_file: prefer_const_constructors, prefer_const_literals_to_create_immutables

import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class TestMain extends StatelessWidget {
  const TestMain({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Text('TEST'),
        ),
        body: Column(
          children: [
            Center(
              child: Text('TEST Page'),
            ),
            Text('22'),
            ElevatedButton(
                onPressed: () {
                  GoRouter.of(context).go('/');
                },
                child: Text('main')),
            SizedBox(
              height: 20,
            ),
            TextField(
              decoration: InputDecoration(
                  border: OutlineInputBorder(),
                  labelText: 'Enter your username'),
            ),
          ],
        ),
      ),
    );
  }
}
