import { Component } from '@angular/core';

// Import the DataService
import { DataService } from './data.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

interface Api {
  state: any;
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
  apiCollection$: Observable<any>;
  apiCollection: AngularFirestoreCollection<Api>;

  
  onStateChange(apiDocId, currentSelection) {
    this.afs.doc(`apiCollection/${apiDocId}`).update({'currentSelection': currentSelection});
  }


  constructor(private dataService: DataService, private afs: AngularFirestore) {

    // Access the Data Service's getUsers() method we defined
    // this.dataService.getUsers()
    //     .subscribe(res => this.users = res);
  }

  ngOnInit() {

    this.apiCollection = this.afs.collection('apiCollection');

   this.apiCollection$ = this.apiCollection.snapshotChanges()
  
    .map(apisInfo => {
      return apisInfo.map(apiInfo => {
        const apiGeneralData = apiInfo.payload.doc.data();
        const apiDocId = apiInfo.payload.doc.id;
        const apiResponsesData$ = this.afs.collection(`apiCollection/${apiDocId}/responses`).valueChanges();

        return { apiDocId, apiGeneralData, apiResponsesData$ };
      });
    });

    
    // this.states = this.statesCol.snapshotChanges()
    // .map(actions => {
    //   return actions.map(a => {
    //     const data = a.payload.doc.data() as State;
    //     const id = a.payload.doc.id;
    //     this.apiCol = this.afs.collection(id);
    //     const apiStates = this.apiCol.snapshotChanges()
    //     .map(actions => {
    //       return actions.map(a => {
    //         const state = a.payload.doc.id;
    //         return { state };
    //       })
    //     })
    //     return { id, data, apiStates };
    //   });
    // });





  }
}
