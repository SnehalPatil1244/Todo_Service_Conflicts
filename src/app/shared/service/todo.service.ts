import { Injectable } from "@angular/core";
import { ITodo, Itodores } from "../model/todo";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class todoservice {
    TodoArr : Array<ITodo> = [
        {
            todoid: '1',
            title: "delectus aut autem facilis et officia qui",
            completed: false
        },
        {
            todoid: '2',
            title: "quis ut nam facilis et officia qui",
            completed: true
        },
        {
            todoid: '3',
            title: "fugiat veniam minus facilis et officia qui  ",
            completed: false
        },
        {
            todoid: '4',
            title: "et porro tempora facilis et officia qui",
            completed: true
        },
        {
            todoid: '5',
            title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
            completed: false
        },
        {
            todoid: '6',
            title: "qui ullam ratione quibusdam voluptatem quia omnis",
            completed: true
        }
    ]

    fetchTodos(): Observable<ITodo[]> {
        //API Call to fetch TODOs data from DB
        return of(this.TodoArr)
    }

    addtodos(todo: ITodo): Observable<Itodores> {
        this.TodoArr.push(todo)
        let res = {
            msg: `New Todo Item with Id ${todo.todoid} created Successfully !!`,
            data: todo
        }
        return of(res)
    }

}