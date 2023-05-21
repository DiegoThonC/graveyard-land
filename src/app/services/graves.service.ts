import { Injectable } from '@angular/core';
import { collection, Firestore, collectionData } from '@angular/fire/firestore';
import { Grave } from '../model/Grave.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GravesService {

  private infoGrave = new Subject<Grave>();
  
  constructor(private firestore: Firestore) { }    

  public getInfoGrave(): Observable<Grave> {
    return this.infoGrave.asObservable();
  }

  public setInfoGrave(value: Grave) {
    return this.infoGrave.next(value);
  }

  getGraves(): Observable<Grave[]> {
    const graveRef = collection(this.firestore, 'graveLocation');
    return collectionData(graveRef, { idField: 'id' }) as Observable<Grave[]>;
  }
}
