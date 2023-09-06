import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/types';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  @Output()
  addTask: EventEmitter<Task> = new EventEmitter<Task>();

  addTaskHandler(formRef: any) {
    this.addTask.emit({ ...formRef.value, id: uuidv4() });
    formRef.resetForm();
  }
}
