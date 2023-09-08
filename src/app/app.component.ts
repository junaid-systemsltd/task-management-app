import { Component } from '@angular/core';
import { Task, TASK_PRIORITY, TASK_STATUS } from 'src/types';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'task-management-app';
  task: Task = {
    id: uuidv4(),
    name: '',
    priority: TASK_PRIORITY.LOW,
    status: TASK_STATUS.COMPLETE,
    date: '',
  };
  isEditMode: boolean = false;

  tasksList: Task[] = [
    {
      id: '1',
      name: 'Task 1',
      priority: TASK_PRIORITY.LOW,
      status: TASK_STATUS.COMPLETE,
      date: new Date().toLocaleDateString(),
    },
    {
      id: '2',
      name: 'Task 2',
      priority: TASK_PRIORITY.NEUTRAL,
      status: TASK_STATUS.INCOMPLETE,
      date: new Date().toLocaleDateString(),
    },
    {
      id: '3',
      name: 'Task 3',
      priority: TASK_PRIORITY.HIGH,
      status: TASK_STATUS.INCOMPLETE,
      date: new Date().toLocaleDateString(),
    },
  ];

  addNewTask(task: Task) {
    this.tasksList.push(task);
  }

  editTask(id: string) {
    const task = this.tasksList.find((task) => task.id === id);
    if (task) {
      this.task = { ...task };
      this.isEditMode = true;
    }
  }

  deleteTask(id: string) {
    const index = this.tasksList.findIndex((task) => task.id === id);
    this.tasksList.splice(index, 1);
  }

  updateStatus(id: string) {
    const index = this.tasksList.findIndex((task) => task.id === id);
    const status =
      this.tasksList[index].status === TASK_STATUS.COMPLETE
        ? TASK_STATUS.INCOMPLETE
        : TASK_STATUS.COMPLETE;
    this.tasksList[index] = { ...this.tasksList[index], status };
  }

  updateTask(task: Task) {
    const id = task.id;

    const index = this.tasksList.findIndex((task) => task.id === id);
    this.tasksList[index] = { ...task };
    this.resetTask();
  }

  resetTask() {
    this.task = {
      id: uuidv4(),
      name: '',
      priority: TASK_PRIORITY.LOW,
      status: TASK_STATUS.COMPLETE,
      date: '',
    };
    this.isEditMode = false;
  }
}
