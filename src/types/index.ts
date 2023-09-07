export enum TASK_STATUS {
  ALL = 'ALL',
  COMPLETE = 'COMPLETE',
  INCOMPLETE = 'INCOMPLETE',
}

export enum TASK_PRIORITY {
  LOW = 'LOW',
  NEUTRAL = 'NEUTRAL',
  HIGH = 'HIGH',
}

export type Task = {
  id: string;
  name: string;
  priority: TASK_PRIORITY;
  status: TASK_STATUS;
  date: Date;
};
