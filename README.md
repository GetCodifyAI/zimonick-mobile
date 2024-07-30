# Zimonick Mobile App

---

## Setup (iOS)

## Installing prerequisite

You likely already have some of the prerequisites already installed

- xcode + cli tools
- node + npm
- cocoapods

## Install cordova cli

`sudo npm install -g cordova`

## cocoapods

- cocoapads needed to manage application level dependency

`brew install cocoapods`

- if above failed use below command to install cocoapads

`brew install --cask cocoapods`

## To create ios platform & install pod dependencies, run the below command in the root folder:

`cordova platform add ios`

`pod install`

## General cordova tips

https://cordova.apache.org/docs/en/10.x/guide/platforms/ios/

## Configure plugins/dependencies

you can check your plugin versions with:

`cordova plugins`

Working plugin versions:

```
cordova-plugin-camera 4.1.0 "Camera"
cordova-plugin-customurlscheme 5.0.2 "Custom URL scheme"
cordova-plugin-deeplinks 1.1.1 "Cordova Deeplinks Plugin"
cordova-plugin-device 2.1.0 "Device"
cordova-plugin-firebasex 13.0.1 "Google Firebase Plugin"
cordova-plugin-inappbrowser 5.0.0 "InAppBrowser"
cordova-plugin-intercom 10.2.0 "Intercom"
cordova-plugin-ionic-webview 5.0.0 "cordova-plugin-ionic-webview"
cordova-plugin-network-information 2.0.2 "Network Information"
cordova-plugin-screen-orientation 3.0.2 "Screen Orientation"
cordova-plugin-splashscreen 5.0.4 "Splashscreen"
cordova-plugin-whitelist 1.3.5 "Whitelist"
```

## Run App

- Create the ios platform

`cordova platform rm ios && cordova platform add ios`

- You should be able to open the workspace in xcode
  (make sure to open workspace and not project file) `platforms/ios` directory

- Click run to build the app in xcode, and hopefully everything is working

## Development

- don't edit code in "platforms/" or its subdirectories
  - this code is generated and will be remade during the normal build process
  - technically you can edit it but it will be erased if you re-add platform / re-generate the build, so probably you don't want to be touching it.

## Demo
#TODO Add image here
