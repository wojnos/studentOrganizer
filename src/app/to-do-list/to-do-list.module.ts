import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularMaterialModule} from "../angular-material/angular-material.module";
import { TaskCardComponent } from './task-card/task-card.component';
import { NewTaskComponent } from './new-task/new-task.component';
import {MatDialogModule} from "@angular/material/dialog";
import { TaskFormComponent } from './task-form/task-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TaskDetailsComponent } from './task-details/task-details.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import { EditTaskComponent } from './edit-task/edit-task.component';


@NgModule({
  declarations: [
    TaskCardComponent,
    NewTaskComponent,
    TaskFormComponent,
    TaskDetailsComponent,
    EditTaskComponent
  ],
    imports: [
        CommonModule,
        AngularMaterialModule,
        MatDialogModule,
        FormsModule,
        ReactiveFormsModule,
        MatDatepickerModule
    ],
  exports: [
    TaskCardComponent
  ]
})
export class ToDoListModule { }
