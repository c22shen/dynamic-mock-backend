import { Component } from '@angular/core';

// Import the DataService
import { DataService } from './data.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface State {
  state: string;
}

// interface StateId extends State { 
//   id: string; 
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  apiCol: AngularFirestoreCollection<State>;
  statesCol: AngularFirestoreCollection<State>;
  states: any;
  favoriteSeason: string;

  onStateChange(api, condition) {
    this.afs.doc('state/'+api).set({'state': condition});
  }


  constructor(private dataService: DataService, private afs: AngularFirestore) {

    // Access the Data Service's getUsers() method we defined
    // this.dataService.getUsers()
    //     .subscribe(res => this.users = res);
  }

  ngOnInit() {

    this.statesCol = this.afs.collection('apiCollection');
    // this.states = this.statesCol.valueChanges();
    
    this.states = this.statesCol.snapshotChanges()
    .map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as State;
        const id = a.payload.doc.id;
        this.apiCol = this.afs.collection(id);
        const apiStates = this.apiCol.snapshotChanges()
        .map(actions => {
          return actions.map(a => {
            const state = a.payload.doc.id;
            return { state };
          })
        })
        return { id, data, apiStates };
      });
    });





  }
}
