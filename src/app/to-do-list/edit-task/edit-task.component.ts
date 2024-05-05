import {Component, OnInit, ViewChild} from '@angular/core';
import {ToDoListService} from "../../core/services/to-do-list.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TaskFormComponent} from "../task-form/task-form.component";
import {tap} from "rxjs";
import {Task} from "../../models/task.model";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  @ViewChild('taskForm') taskForm?: TaskFormComponent;

  task?: Task;
  constructor(
    private router: Router,
    private toDoListService: ToDoListService,
    private route: ActivatedRoute,
    private toast: MatSnackBar,

  ) { }

  ngAfterViewInit() {
    this.loadTask();
  }

  editTask() {
    console.log('edit z edittask')
    this.toDoListService.editTask(this.task?.key, this.taskForm?.form.value)
      .then(this.editSuccess.bind(this), this.editFailure.bind(this));
  }

  removeTask() {
    this.toDoListService.removeTask(this.task?.key)
      .then(this.removeSuccess.bind(this), this.removeFailure.bind(this));
  }
  private editSuccess() {
    this.backToToDoList();
    this.toast.open('Zapisano zmiany!', '' , { panelClass: 'create-success-toast'})
  }

  private editFailure(error: { message: string; }) {
    this.toast.open(error.message, '', { panelClass: 'create-failure-toast'})
  }

  private removeSuccess() {
    this.backToToDoList();
    this.toast.open('Usunięto zadanie!', '' , { panelClass: 'create-success-toast'})
  }

  private removeFailure(error: { message: string; }) {
    this.toast.open(error.message, '', { panelClass: 'create-failure-toast'})
  }

  private loadTask() {
    const key = this.route.snapshot.params['key'];
    this.toDoListService.getTask(key)
      .pipe(tap( task => this.taskForm?.setTask(task)))
      .subscribe(task => this.task = task)
    };

   backToToDoList() {
    this.router.navigate(['/dashboard/to-do-list']);
  }
  ngOnInit(): void {
  }

}
