// module
export default interface Todo {
  id: number | string;
  title: string;
  description?: string;
  dueDate: number;
  status: boolean;
  type: 'task' | 'event';
}
