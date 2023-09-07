import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task, TASK_STATUS } from 'src/types';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
})
export class TaskListComponent {
  readonly TASK_STATUS = TASK_STATUS;
  taskStatus: string = TASK_STATUS.ALL;
  @Input() taskList: Task[] = [];

  @Output()
  deleteTask: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  updateStatus: EventEmitter<string> = new EventEmitter<string>();

  deleteTaskHandler(id: string) {
    this.deleteTask.emit(id);
  }

  updateStatusHandler(id: string) {
    this.updateStatus.emit(id);
  }

  setTaskStatus(status: string) {
    this.taskStatus = status;
  }
}
