import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {DemoMaterialModule} from '../material-module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ChartsModule, WavesModule } from 'angular-bootstrap-md'
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { TodolistRoutingModule } from './todolist-routing.module';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodolistComponent } from './todolist/todolist.component';


@NgModule({
  declarations: [TodoItemComponent, TodolistComponent],
  imports: [
    CommonModule,
    TodolistRoutingModule,
    DemoMaterialModule,
    FlexLayoutModule,
    NgxChartsModule
  ]
})
export class TodolistModule { }
