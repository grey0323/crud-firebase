import { Router } from '@angular/router';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskCreate, TaskService } from '../../data-access/task.service';
import { NgClass } from '@angular/common';

@Component({
  imports:[ReactiveFormsModule],
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
  standalone:true
})
export default class TaskFormComponent {

  sing = signal(false)
  private _formbuilder = inject(FormBuilder)
  private _taskServices = inject(TaskService)
  private _route = inject(Router)
  form = this._formbuilder.group({
    title: this._formbuilder.control('', Validators.required),
    completed: this._formbuilder.control(false, Validators.required)
  })

  async submit(){
    this.sing.set(true)
    if(this.form.invalid) return;
    try{
      const {title,completed} = this.form.value;
      const task: TaskCreate ={
       title:title || '',
       completed: !!completed

      }
      
      await this._taskServices.create(task)
      console.log("Tarea creada correctamente")
      this._route.navigateByUrl('task')

    }catch(error){

      console.log("No sirve")

    }finally{

      this.sing.set(false)
    }
  }

}
