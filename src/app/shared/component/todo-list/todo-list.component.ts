import { Component, OnInit } from '@angular/core';
import { ITodo } from '../../model/todo';
import { todoservice } from '../../service/todo.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']

})
export class TodoListComponent implements OnInit {
TodoArr !: Array<ITodo>
  // private _todo: any;
  constructor(
     private _todoservice: todoservice,
     private _matdialog:MatDialog,
  ) { }

  ngOnInit(): void {
     this._todoservice.fetchTodos()
      .subscribe({
        next: (data) => this.TodoArr = data,
        error: (err) => console.log(err)
      })
    console.log(this.TodoArr)
  }

  OnRemoveTodo(id: string) {
    let matConfig = new MatDialogConfig()
    matConfig.width = '400px';
    matConfig.disableClose = true;
    matConfig.data = `Are you sure, you want to remove todo with id ${id}`
    let matRef = this._matdialog.open(GetConfirmComponent, matConfig)

    matRef.afterClosed()
      .subscribe((res: any) => {
        if (res) {
          this._todoservice.removeTodo(id).subscribe({
            next:res=>{
              console.log(res);
            },
            error:err=>{
              console.log(err);
            }
          })
        }
      })
  }
}
