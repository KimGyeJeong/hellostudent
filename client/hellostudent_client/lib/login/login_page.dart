// ignore_for_file: prefer_const_constructors, prefer_const_literals_to_create_immutables

import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class LoginMain extends StatelessWidget {
  const LoginMain({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Login'),
        ),
        body: Column(
          children: [
            Center(
              child: Text('Login Page'),
            ),
            Text('22'),
            ElevatedButton(
                onPressed: () {
                  GoRouter.of(context).go('/testhere');
                },
                child: Text('test'))
          ],
        ),
      ),
    );
  }
}
