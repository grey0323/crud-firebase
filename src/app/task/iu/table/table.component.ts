import { Task } from './../../data-access/task.service';
import { Component, effect, input, } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styles: ``
})
export class TableComponent {

  tasks = input.required<Task[]>();

  constructor() {
    
  }
}
