export interface ITodo {
    todoid: string;
    title: string;
    completed: boolean;
}

export interface ItodoRes{
      msg: string;
    data: ITodo;
}