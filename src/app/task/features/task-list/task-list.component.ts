import { Component } from '@angular/core';
import { TableComponent } from '../../iu/table/table.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TableComponent, RouterLink],
  templateUrl: './task-list.component.html',
  styles: ``
})
export default class TaskListComponent {

}
