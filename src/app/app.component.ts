import { Component } from '@angular/core';

// Import the DataService
import { DataService } from './data.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface State {
  state: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  statesCol: AngularFirestoreCollection<State>;
  states: Observable<State[]>;
  users: Array<any>;
  constructor(private dataService: DataService, private afs: AngularFirestore) {

    // Access the Data Service's getUsers() method we defined
    this.dataService.getUsers()
        .subscribe(res => this.users = res);
  }

  ngOnInit() {
    this.statesCol = this.afs.collection('state');
    this.states = this.statesCol.valueChanges();
  }
}
