import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';

import { HomePage } from '../pages/home/home';

  
  

  @Component({
  templateUrl: 'app.html'
})
export class MyApp {

// Initialize Firebase
  
  
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  
  let config = {
    apiKey: "AIzaSyC1F5nhj5Bw2AtUzeVxz07olPemKJneF7U",
    authDomain: "ionic2fbasechat.firebaseapp.com",
    databaseURL: "https://ionic2fbasechat.firebaseio.com",
    projectId: "ionic2fbasechat",
    storageBucket: "ionic2fbasechat.appspot.com",
  };
  firebase.initializeApp(config);
  }
}

