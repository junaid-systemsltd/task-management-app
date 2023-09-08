import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TASK_STATUS, TASK_PRIORITY } from 'src/types';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
})
export class FiltersComponent {
  status: string = TASK_STATUS.ALL;
  priority: string = TASK_PRIORITY.ALL;
  searchTerm: string = '';

  @Output()
  taskStatus: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  taskPriority: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  searchText: EventEmitter<string> = new EventEmitter<string>();

  onChangeHandler() {
    this.taskStatus.emit(this.status);
  }

  onPriorityChangeHandler() {
    this.taskPriority.emit(this.priority);
  }

  onSearchTermHandler() {
    this.searchText.emit(this.searchTerm);
  }
}
