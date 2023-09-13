import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { TaskFilter } from 'src/types';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
})
export class FiltersComponent implements OnInit {
  constructor(private taskService: TaskService) {}

  filters: TaskFilter = {};

  ngOnInit() {
    this.filters = this.taskService.getTaskFilters();
    
    this.taskService.onResetFiltersClicked.subscribe((filters) => {
      this.filters = filters;
    });
  }

  resetFilters() {
    this.taskService.resetFilters();
  }
}
