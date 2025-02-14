import { Component, inject, input, signal } from '@angular/core';
import { Task, TaskCreate, TaskService } from '../../data-access/task.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { async } from 'rxjs';

@Component({
  selector: 'app-task-delete',
  standalone: true,
  imports: [],
  templateUrl: './task-delete.component.html',
  styleUrl: './task-delete.component.css'
})
export default class TaskDeleteComponent {

  id = input.required<string>()
  sing = signal(false)
  private _taskServices = inject(TaskService)
  private _route = inject(Router)
  
  async delete(){
        const id = this.id()
        if(id){
          await this._taskServices.delete(id)
          this._route.navigateByUrl('task')

        }
      }
    

  async cancel(){
    await this._route.navigateByUrl('tasks')
  }


}