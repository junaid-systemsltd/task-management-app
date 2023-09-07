import { Pipe, PipeTransform } from '@angular/core';
import { Task } from 'src/types';

@Pipe({
  name: 'taskStatusFilter',
  pure: false,
})
export class TaskStatusPipe implements PipeTransform {
  STATUS = {
    ALL: 'All',
    COMPLETE: 'complete',
    INCOMPLETE: 'incomplete',
  };
  transform(tasks: Task[], status: string) {
    if (!tasks || !status) {
      return tasks;
    }
    if (status === this.STATUS.ALL) return tasks;
    else if (status === this.STATUS.COMPLETE) {
      return tasks.filter((task) => task.status === this.STATUS.COMPLETE);
    } else if (status === this.STATUS.INCOMPLETE) {
      return tasks.filter((task) => task.status === this.STATUS.INCOMPLETE);
    } else return tasks;
  }
}
