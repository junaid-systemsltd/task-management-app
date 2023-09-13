import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task, TaskFilter } from 'src/types';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
})
export class TaskListComponent implements OnInit {
  constructor(private taskService: TaskService) {}

  tasks: Task[] = [];
  taskFilters: TaskFilter = {};

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
    this.taskFilters = this.taskService.getTaskFilters();

    this.taskService.OnSaveTaskClicked.subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });

    this.taskService.onResetFiltersClicked.subscribe((taskFilters) => {
      this.taskFilters = taskFilters;
    });
  }
}
