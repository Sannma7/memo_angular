import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodolistComponent } from './todolist/todolist.component';


const todolistRoutes: Routes = [
  { path: 'todolist', component: TodolistComponent, }
];

@NgModule({
  imports: [RouterModule.forChild(todolistRoutes)],
  exports: [RouterModule]
})
export class TodolistRoutingModule { }
