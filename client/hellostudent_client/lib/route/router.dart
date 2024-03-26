// ignore_for_file: prefer_const_constructors

import 'package:go_router/go_router.dart';
import 'package:hellostudent_client/login/login_page.dart';
import 'package:hellostudent_client/testhere/test.dart';

// final GoRouter router = GoRouter(
//   routes: [
//     GoRoute(
//       path: '/',
//       builder: (context, state) => LoginMain(),
//     ),
//   ],
// );

// 라우트를 관리하는 함수
GoRouter router() {
  return GoRouter(
      // 루트 경로 및 핸들러 정의
      routes: [
        GoRoute(
          path: '/',
          builder: (context, state) => LoginMain(),
        ),
        GoRoute(path: ('/testhere'), builder: (context, state) => TestMain()),
      ]);
}
