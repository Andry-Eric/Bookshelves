import { Component } from "@angular/core";
import * as firebase from "firebase";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyDlFJ1U0E75Jrf8euHemVHF8S-VeThDCy4",
      authDomain: "bookshalves-cb6f1.firebaseapp.com",
      databaseURL: "https://bookshalves-cb6f1.firebaseio.com",
      projectId: "bookshalves-cb6f1",
      storageBucket: "bookshalves-cb6f1.appspot.com",
      messagingSenderId: "206779500106",
      appId: "1:206779500106:web:2ef69e47edbfa4141688b3",
      measurementId: "G-5GK76NGKME"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
}
