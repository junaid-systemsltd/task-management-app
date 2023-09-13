import { Pipe, PipeTransform } from '@angular/core';
import { Task, TaskFilter, TASK_STATUS } from 'src/types';

@Pipe({
  name: 'taskFilter',
  pure: false,
})
export class TaskPipe implements PipeTransform {
  transform(tasks: Task[], filter: TaskFilter) {
    
    const _name = filter?.name || '';
    const _priority = filter?.priority || TASK_STATUS.ALL;
    const _status = filter?.status || TASK_STATUS.ALL;

    return tasks.filter(({ name, priority, status }) => {
      return (
        name.toLowerCase().includes(_name.toLowerCase()) &&
        (_priority === TASK_STATUS.ALL || priority === _priority) &&
        (_status === TASK_STATUS.ALL || status === _status)
      );
    });
  }
}
