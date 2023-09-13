import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { NgForm } from '@angular/forms';

import { TaskService } from 'src/app/services/task.service';
import { TASK_PRIORITY, TASK_STATUS, Task } from 'src/types';

@Component({
  selector: 'app-add-edit-modal',
  templateUrl: './add-edit-modal.component.html',
})
export class AddEditModalComponent implements OnInit {
  constructor(private taskService: TaskService) {}

  task: Task = {
    id: '',
    name: '',
    date: null,
    priority: TASK_PRIORITY.LOW,
    status: TASK_STATUS.INCOMPLETE,
  };
  isEditMode: boolean = false;

  ngOnInit() {
    this.task = this.taskService.getNewTask();
    this.isEditMode = this.taskService.getEditMode();

    this.taskService.OnEditClicked.subscribe((task) => {
      this.task = { ...task };
      this.isEditMode = true;
    });

    this.taskService.OnSaveTaskClicked.subscribe(() => {
      this.isEditMode = false;
      this.task = this.taskService.getNewTask();
    });

    this.taskService.onCloseModalClicked.subscribe(() => {
      this.isEditMode = false;
      this.task = { ...this.taskService.getNewTask() };
    });

    this.taskService.onAddTaskClicked.subscribe(() => {
      this.task = this.taskService.getNewTask();
    });
  }

  addTaskHandler({ value }: NgForm) {
    this.taskService.addNewTask({ ...value, id: uuidv4() });
  }

  updateTaskHandler(task: Task) {
    this.taskService.updateTask(task);
  }

  resetTask() {
    this.taskService.resetTask();
  }
}
