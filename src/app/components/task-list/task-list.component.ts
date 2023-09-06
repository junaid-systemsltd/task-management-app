import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/types';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
})
export class TaskListComponent {
  todayDate = new Date();

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
}
