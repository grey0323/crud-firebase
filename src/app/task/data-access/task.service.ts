import { inject, Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {toSignal} from '@angular/core/rxjs-interop'

export interface Task{
  id:string
  title:string
  completed:boolean
}

export type TaskCreate = Omit<Task, 'id'>
const path = 'Task'
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private _firestore = inject(Firestore);
  private _colection = collection(this._firestore, path)
  getTasks = toSignal(collectionData(this._colection, {idField:'id'}) as Observable<Task[]>,
  {initialValue:[],

  })



  create(Task:TaskCreate){
    return addDoc(this._colection, Task)
  }
}




