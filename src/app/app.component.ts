import { Component } from '@angular/core';
import { Task } from 'src/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'task-management-app';

  tasksList: Task[] = [];

  addNewTask(task: Task) {
    this.tasksList.push(task);
  }

  deleteTask(id: string) {
    const index = this.tasksList.findIndex((task) => task.id === id);
    this.tasksList.splice(index, 1);
  }
}
