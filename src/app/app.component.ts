import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyAmCPaSPP255BK8HXntf48-g2F_DDmj070',
      authDomain: 'mon-appli-c0cad.firebaseapp.com',
      databaseURL: 'https://mon-appli-c0cad.firebaseio.com',
      projectId: 'mon-appli-c0cad',
      storageBucket: 'mon-appli-c0cad.appspot.com',
      messagingSenderId: '1019811485935'
    };
    firebase.initializeApp(config);
  }
}
