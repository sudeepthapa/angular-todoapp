import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[];
  todoTitle: string;
  idForTodo: number;
  filter: string;

  constructor() { }

  ngOnInit(): void {
    this.todoTitle = ''
    this.idForTodo = 5;
    this.filter = 'all'
    this.todos = [
      {
        'id': 1,
        'title': 'Finish angular assessment',
        'completed': false,
        'editing': false
      },
      {
        'id': 2,
        'title': 'Taking the world',
        'completed': false,
        'editing': false
      },
      {
        'id': 3,
        'title': 'Maths Assignment',
        'completed': false,
        'editing': false
      },
      {
        'id': 4,
        'title': 'Playing PUBG',
        'completed': false,
        'editing': false
      },
    ]
  }

  addTodo() {

    if (this.todoTitle.trim().length === 0) {
      return
    }

    this.todos.push({
      id: this.idForTodo
      ,
      title: this.todoTitle, completed: false, editing: false
    })
    this.todoTitle = ''
    this.idForTodo++;
  }


  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  editTodo(todo: Todo): void {
    todo.editing = true
  }

  doneEdit(todo: Todo): void {
    todo.editing = false
  }

  remaining(): number {
    return this.todos.filter(todo => !todo.completed).length
  }

  atLeastOneCompleted(): boolean {
    return this.todos.filter(todo => todo.completed).length > 0
  }

  clearCompleted(): void {
    this.todos = this.todos.filter(todo => !todo.completed)
  }

  checkAllTodos(): void {
    this.todos = this.todos.map(todo => ({
      ...todo, completed: (<HTMLInputElement>event.target).checked
    }))
  }

  todosFiltered(): Todo[] {
    if (this.filter === 'all') {
      return this.todos
    } else if (this.filter === 'active') {
      return this.todos.filter(todo => !todo.completed)
    } else if (this.filter === 'completed') {
      return this.todos.filter(todo => todo.completed)
    }
    return this.todos
  }

}



