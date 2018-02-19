import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Import the Http Module and our Data Service
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';

import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';


var firebaseConfig = {
  apiKey: "AIzaSyCkba3b7b3m8jjYbqm7dGEpyhkmlOq4_ek",
  authDomain: "firestore-c5f87.firebaseapp.com",
  databaseURL: "https://firestore-c5f87.firebaseio.com",
  projectId: "firestore-c5f87",
  storageBucket: "firestore-c5f87.appspot.com",
  messagingSenderId: "527097843634"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(firebaseConfig),  // Add this for firestore
    AngularFirestoreModule                            // And this for firestore
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
