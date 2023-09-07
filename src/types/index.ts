export enum TASK_STATUS {
  ALL = 'ALL',
  COMPLETE = 'COMPLETE',
  INCOMPLETE = 'INCOMPLETE',
}

export type Task = {
  id: string;
  name: string;
  priority: string;
  status: TASK_STATUS;
  date: Date;
};
