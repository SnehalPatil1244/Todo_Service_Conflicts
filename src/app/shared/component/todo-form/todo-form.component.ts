import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ITodo } from '../../model/todo';
import { todoservice } from '../../service/todo.service';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {

  isIneditMode: boolean = false;
  @ViewChild('todoForm') todoForm!: NgForm;
  constructor(private todoser: todoservice) { }
  ngOnInit(): void {
    this.Onedit();
  }
  editobj!: ITodo;
  Onedit() {
    this.todoser.Editemit$.subscribe({
      next: (res) => {
        this.todoForm.form.patchValue(res);
        this.isIneditMode = true;
        this.editobj = res;
        // console.log(this.editobj);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onsubmit(){
      if (this.todoForm.valid) {
        let NewTodo: ITodo = {
          ...this.todoForm.value, todoid: Date.now().toString()
        }
        this.todoForm.reset()
        this.todoser.addtodos(NewTodo).subscribe({
          next: data => {
            console.log(data)
          },
          error: err => {
            console.log(err)
          }
        })
      }
    }

    Updatetodo() {
      if (this.todoForm.form.valid) {
        let UpdateObj = {
          ...this.todoForm.form.value,
          todoid: this.editobj.todoid,
        };
        this.todoser.UpdateTodo(UpdateObj).subscribe({
          next: (res) => {
            console.log(res);
            this.isIneditMode = false;
          },
          error: (err) => {
            console.log(err);
          }
        })
      }
    }
    
}