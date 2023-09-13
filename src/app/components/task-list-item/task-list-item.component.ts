import { Component, Input } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { TASK_PRIORITY, TASK_STATUS, Task } from 'src/types';

@Component({
  selector: '.task-list-item-component',
  templateUrl: './task-list-item.component.html',
})
export class TaskListItemComponent {
  constructor(private taskService: TaskService) {}
  @Input() task: Task = {
    id: '',
    name: '',
    date: null,
    priority: TASK_PRIORITY.LOW,
    status: TASK_STATUS.COMPLETE,
  };
  @Input('index') i: number = 1;

  deleteTaskHandler(id: string) {
    this.taskService.deleteTask(id);
  }

  updateStatusHandler(id: string) {
    this.taskService.updateStatus(id);
  }

  editTaskHandler(id: string) {
    this.taskService.editTask(id);
  }
}
