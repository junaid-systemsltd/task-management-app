import { EventEmitter, Injectable } from '@angular/core';
import { TASK_PRIORITY, TASK_STATUS, Task, TaskFilter } from 'src/types';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  isEditMode: boolean = false;

  taskFilters: TaskFilter = {
    name: '',
    status: TASK_STATUS.ALL,
    priority: TASK_PRIORITY.ALL,
  };

  task: Task = {
    id: uuidv4(),
    name: '',
    priority: TASK_PRIORITY.LOW,
    status: TASK_STATUS.INCOMPLETE,
    date: null,
  };

  tasksList: Task[] = [];

  OnEditClicked = new EventEmitter<Task>();
  OnSaveTaskClicked = new EventEmitter<Task[]>();
  onAddTaskClicked = new EventEmitter();
  onCloseModalClicked = new EventEmitter();
  onResetFiltersClicked = new EventEmitter<TaskFilter>();

  // Adding a New Task Method Handler
  addNewTask(task: Task) {
    this.tasksList.push(task);
    this.onAddTaskClicked.emit();
  }

  // Edit Task Method
  editTask(id: string) {
    const task = this.tasksList.find((task) => task.id === id);
    this.OnEditClicked.emit(task);
  }

  // Update Task Method Handler
  updateTask(task: Task) {
    const id = task.id;

    const index = this.tasksList.findIndex((task) => task.id === id);
    this.tasksList[index] = { ...task };
    this.OnSaveTaskClicked.emit(this.tasksList);
  }

  // Delete Task Method Handler
  deleteTask(id: string) {
    const index = this.tasksList.findIndex((task) => task.id === id);
    this.tasksList.splice(index, 1);
  }

  // Updating Task Status Method Handler
  updateStatus(id: string) {
    const index = this.tasksList.findIndex((task) => task.id === id);
    const status =
      this.tasksList[index].status === TASK_STATUS.COMPLETE
        ? TASK_STATUS.INCOMPLETE
        : TASK_STATUS.COMPLETE;
    this.tasksList[index] = { ...this.tasksList[index], status };
  }

  // Reset Task Method Handler
  resetTask() {
    this.onCloseModalClicked.emit();
  }

  resetFilters() {
    this.taskFilters = {
      name: '',
      status: TASK_STATUS.ALL,
      priority: TASK_PRIORITY.ALL,
    };
    this.onResetFiltersClicked.emit(this.taskFilters);
  }

  getTasks() {
    return this.tasksList;
  }

  getNewTask() {
    return {
      id: uuidv4(),
      name: '',
      priority: TASK_PRIORITY.LOW,
      status: TASK_STATUS.INCOMPLETE,
      date: new Date(),
    };
  }

  getEditMode() {
    return this.isEditMode;
  }

  getTaskFilters() {
    return this.taskFilters;
  }
}
