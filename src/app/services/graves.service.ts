import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Grave } from '../model/Grave.model';
import { Observable, Subject } from 'rxjs';
import { Firestore, addDoc, collection, deleteDoc, doc } from 'firebase/firestore';
import { collectionData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GravesService {

  private infoGrave = new Subject<Grave>();

  graveLocation = {
    image: [
      '../../../../assets/img/05/grave-1.jpg',
      '../../../../assets/img/05/grave-2.jpg',
      '../../../../assets/img/05/grave-3.jpg',
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod' +
                 'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                 'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    measure: {
       depth: 2.50,
       width: 0.75,
       height: 0.65
    },
    price: 80000,
    long: '-69.790120',
    lat: '-20.25221',
    city: 'Pozo Almonte',
  }
  
  constructor(private firestore: AngularFirestore) { }    

  public getInfoGrave(): Observable<Grave> {
    return this.infoGrave.asObservable();
  }

  public setInfoGrave(value: Grave) {
    return this.infoGrave.next(value);
  }

  addGraves(): Promise<any> {
    return this.firestore.collection('graveLocation').add(this.graveLocation);
  }

  getGraves(): Observable<any> {
    return this.firestore.collection('graveLocation').snapshotChanges();
  }

  updateGraves(id: string, grave: Grave) {
    return this.firestore.collection('graveLocation').doc(id).update(grave); 
  }

  getGrave(id: string): Observable<any> {
    return this.firestore.collection('graveLocation').doc(id).snapshotChanges(); 
  }

  deleteGrave(id: string): Promise<any> {
    return this.firestore.collection('graveLocation').doc(id).delete();
  }
}
