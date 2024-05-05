import {Component, Inject, Input, OnInit} from '@angular/core';
import {Task} from "../../models/task.model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {AuthService} from "../../core/services/auth.service";

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
@Input() task: Task;

  constructor(
    private authService: AuthService,
    private dialogRef: MatDialogRef<TaskDetailsComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) private  data: Task
  ) {
    this.task = data;
  }

  closeDetails() {
    this.dialogRef.close();
  }

  routeToEditTask() {
    this.closeDetails();
    this.router.navigate(['/dashboard/to-do-list', this.task.key])
    console.log(this.task, this.authService.userLoggedId, this.authService.isLoggedIn());
  }
  ngOnInit(): void {

  }

}
