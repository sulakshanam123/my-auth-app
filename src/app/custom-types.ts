export interface Task {
  id: number;
  description: string;
  status: Status;
  comment?: string;
}


export enum Status {
  NEW = 'NEW',
  STARTED = 'started',
  IN_PROGRESS = 'in progress',
  HOLD = 'on hold',
  COMPLETED = 'completed'
}
