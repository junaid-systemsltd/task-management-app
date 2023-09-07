import { Component } from '@angular/core';
import { Task } from 'src/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'task-management-app';

  tasksList: Task[] = [
    {
      id: '1',
      name: 'Task 1',
      priority: 'low',
      status: 'complete',
      date: new Date(),
    },
    {
      id: '2',
      name: 'Task 2',
      priority: 'neutral',
      status: 'incomplete',
      date: new Date(),
    },
    {
      id: '3',
      name: 'Task 3',
      priority: 'high',
      status: 'incomplete',
      date: new Date(),
    },
    {
      id: '4',
      name: 'Task 4',
      priority: 'low',
      status: 'incomplete',
      date: new Date(),
    },
    {
      id: '5',
      name: 'Task 5',
      priority: 'low',
      status: 'incomplete',
      date: new Date(),
    },
    {
      id: '6',
      name: 'Task 6',
      priority: 'low',
      status: 'incomplete',
      date: new Date(),
    },
  ];

  addNewTask(task: Task) {
    this.tasksList.push(task);
  }

  deleteTask(id: string) {
    const index = this.tasksList.findIndex((task) => task.id === id);
    this.tasksList.splice(index, 1);
  }

  updateStatus(id: string) {
    const index = this.tasksList.findIndex((task) => task.id === id);
    const status =
      this.tasksList[index].status === 'complete' ? 'incomplete' : 'complete';
    this.tasksList[index] = { ...this.tasksList[index], status };
  }
}
