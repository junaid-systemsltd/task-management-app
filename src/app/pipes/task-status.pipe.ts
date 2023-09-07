import { Pipe, PipeTransform } from '@angular/core';
import { Task, TASK_STATUS } from 'src/types';

@Pipe({
  name: 'taskStatusFilter',
  pure: false,
})
export class TaskStatusPipe implements PipeTransform {
  transform(tasks: Task[], status: string) {
    if (!tasks || !status) {
      return tasks;
    }
    if (status === TASK_STATUS.ALL) return tasks;
    else if (status === TASK_STATUS.COMPLETE) {
      return tasks.filter((task) => task.status === TASK_STATUS.COMPLETE);
    } else if (status === TASK_STATUS.INCOMPLETE) {
      return tasks.filter((task) => task.status === TASK_STATUS.INCOMPLETE);
    } else return tasks;
  }
}
