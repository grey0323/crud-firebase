import { inject, Injectable } from '@angular/core';
import { Firestore, collection } from '@angular/fire/firestore';
import { Task } from 'zone.js/lib/zone-impl';

export interface tasl{
  id:string;
  title:string;
  completed:boolean
}

export type TaskCreate = Omit<Task, 'id'>
const path = 'task'
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private _firestore = inject(Firestore);
  private _colection = collection(this._firestore, path)
  constructor() { }
}
