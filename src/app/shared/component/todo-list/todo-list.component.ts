import { Component, OnInit } from '@angular/core';
import { ITodo } from '../../model/todo';
import { todoservice } from '../../service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  TodoArr!: Array<ITodo>;
  constructor(private todoservice: todoservice) {}

  ngOnInit(): void {
    this.todoservice.fetchTodos().subscribe({
      next: (data) => (this.TodoArr = data),
      error: (err) => console.log(err),
    });
    console.log(this.TodoArr);
  }

  edit(todo: ITodo) {
    this.todoservice.Editemit$.next(todo);
    // console.log(todo);
  }
}
