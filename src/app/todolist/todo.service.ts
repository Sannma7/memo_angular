import { Injectable } from '@angular/core';

import { Todo } from './todo';
import { TODOS } from './mock-todos';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos(): Observable<Todo[]> {
    return of(TODOS);
  }

}
