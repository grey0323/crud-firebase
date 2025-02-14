import { inject, Injectable } from '@angular/core';
import { updateDoc, Firestore, collection, addDoc, collectionData, doc, getDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {toSignal} from '@angular/core/rxjs-interop'
import { authStateService } from '../../share/data-access/auth-state.services';

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

  private current = inject(authStateService)


  constructor() {
   
    this.current.currentUSer
  }

  getTask(id:string){
    const docRef = doc(this._colection, id)
    return getDoc(docRef);

  }


  update(task:TaskCreate, id:string){

    const docRef = doc(this._colection, id)
    return updateDoc(docRef, task);
  }

  create(Task:TaskCreate){
    return addDoc(this._colection, Task)
  }

  delete(id:string){
    const docRef = doc(this._colection, id)
    return deleteDoc(docRef);

  }
}




