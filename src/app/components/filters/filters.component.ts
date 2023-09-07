import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TASK_STATUS } from 'src/types';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
})
export class FiltersComponent {
  status: string = TASK_STATUS.ALL;

  @Output()
  taskStatus: EventEmitter<string> = new EventEmitter<string>();

  onChangeHandler(event: any) {
    this.taskStatus.emit(this.status);
  }
}
