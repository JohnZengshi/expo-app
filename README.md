<!--
 * @LastEditors: John
 * @Date: 2024-01-18 18:05:50
 * @LastEditTime: 2024-01-23 09:56:49
 * @Author: John
-->
## 📝 Cli Notes
- [Expo](https://docs.expo.dev/)
- [Expo TypeScript guide](https://docs.expo.dev/versions/latest/guides/typescript/)

## use modules:
- [本地打包✔](https://github.com/expo/examples/tree/master/with-dev-client)
- [导航组件✔](https://github.com/expo/examples/tree/master/navigation)
- [自定义字体✔](https://github.com/expo/examples/tree/master/with-custom-font)
- [表单验证](https://github.com/expo/examples/tree/master/with-formik)
- [使用icon](https://github.com/expo/examples/tree/master/with-icons) ---> [icon库](https://icons.expo.fyi/Index)
- [3d模型](https://github.com/expo/examples/tree/master/with-react-three-fiber) --- [threejs](https://github.com/expo/examples/tree/master/with-three)
- [动画](https://github.com/expo/examples/tree/master/with-reanimated)
- [视频背景](https://github.com/expo/examples/tree/master/with-video-background)
- [状态管理✔](https://github.com/expo/examples/tree/master/with-zustand)
- [i18n国际化](https://github.com/i18next/react-i18next/tree/master/example/v9.x.x/reactnative-expo)

## dependencies:
- [java17](https://www.oracle.com/java/technologies/downloads/#java11-windows)
- [Android Studio/emulator](https://developer.android.com/studio?hl=zh-cn)



## tip

- 远程调试：下载 [Expo go](https://expo.dev/client)，本地运行 `yarn start:g`
- 本地打包：`yarn android`（方便修改原生代码）
- 配置代理：android/gradle.properties
  ```
  systemProp.http.proxyHost=127.0.0.1 // 本机地址
  systemProp.http.proxyPort=20171 // 代理的http端口
  systemProp.https.proxyHost=127.0.0.1
  systemProp.https.proxyPort=20171
  ```
- 配置jdk：android/gradle.properties
  ```
  org.gradle.java.home=C:\\Program Files\\Java\\jdk-17
  ```
- 清除gradle缓存：删除 android/.gradle文件