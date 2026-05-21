import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ITodo } from '../../model/todo';
import { todoservice } from '../../service/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
isIneditMode : boolean = false
@ViewChild('todoForm') todoForm !: NgForm
  constructor(private todoservixe : todoservice) { }

  ngOnInit(): void {
  }

  onTodoSubmit() {
    if (this.todoForm.valid) {
      let NewTodo: ITodo = {
        ...this.todoForm.value, todoid: Date.now().toString()

      }
      this.todoForm.reset()
      this.todoservixe.addtodos(NewTodo).subscribe({
        next: data => {
          console.log(data)
        },
        error: err => {
          console.log(err)
        }
      })
    }
    
  }

}
