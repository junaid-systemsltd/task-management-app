import { Component, EventEmitter, Output, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from 'src/types';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
})
export class AddTaskComponent {
  @Input() task: any;
  @Input() isEditMode: boolean = false;
  @Input() closeModal() {}

  @Output()
  addTask: EventEmitter<Task> = new EventEmitter<Task>();

  @Output()
  updateTask: EventEmitter<Task> = new EventEmitter<Task>();

  addTaskHandler(formRef: NgForm) {
    console.log(formRef);
    this.addTask.emit({ ...formRef.value, id: uuidv4() });
    this.closeModal();
  }

  updateTaskHandler() {
    this.updateTask.emit(this.task);
    this.closeModal();
  }
}
