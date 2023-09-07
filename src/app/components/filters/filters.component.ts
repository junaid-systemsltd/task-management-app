import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
})
export class FiltersComponent {
  status: string = 'all';

  @Output()
  taskStatus: EventEmitter<string> = new EventEmitter<string>();

  onChangeHandler(event: any) {
    this.taskStatus.emit(this.status);
  }
}
