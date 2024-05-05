import {Component, OnInit} from '@angular/core';
import {ToDoListService} from "../core/services/to-do-list.service";
import {Observable} from "rxjs";
import {Task} from "../models/task.model";
import {MatDialog} from "@angular/material/dialog";
import {NewTaskComponent} from "./new-task/new-task.component";
import {TaskDetailsComponent} from "./task-details/task-details.component";
@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  tasks$: Observable<Task[]> = this.toDoService.getTasks();
  constructor(
    private toDoService: ToDoListService,
    private dialog: MatDialog
  ) { }

  openNewTaskModal() {
    this.dialog.open(NewTaskComponent)
  }

  openTaskDetailModal(task : Task) {
    this.dialog.open(TaskDetailsComponent, { data: task })
  }

  ngOnInit(): void {
  }
}
