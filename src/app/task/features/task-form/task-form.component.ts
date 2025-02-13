import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports:[ReactiveFormsModule],
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
  standalone:true
})
export default class TaskFormComponent {

  private _formbuilder = inject(FormBuilder)

  form = this._formbuilder.group({
    title: this._formbuilder.control('', Validators.required),
    completed: this._formbuilder.control(false, Validators.required)
  })

  submit(){
    if(this.form.invalid) return;
    console.log(this.form.value)

  }

}
