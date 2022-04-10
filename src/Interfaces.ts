export interface IUserIncluded {
  userName: string;
  avatar: string;
}

export interface ITodoItem {
  taskTitle: string;
  taskDesc: string;
  priority: string;
  isNew: boolean;
  dueDate: string;
  userIncluded: IUserIncluded[];
}
