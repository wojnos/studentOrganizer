import {Component, ViewChild} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {TaskFormComponent} from "../task-form/task-form.component";
import {ToDoListService} from "../../core/services/to-do-list.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {
  @ViewChild('taskForm') taskForm?: TaskFormComponent;
  constructor(
    private toDoListService: ToDoListService,
    private toast: MatSnackBar,
    private dialogRef: MatDialogRef<NewTaskComponent>
  ) { }

  createTask() {
    this.toDoListService.addTask(this.taskForm?.form.value)
      .then(this.createSuccess.bind(this), this.createFailure.bind(this))
  }


  //toast - wyskakujace okienko, css znajduje sie w pliku style.css
  private createSuccess() {
    this.dialogRef.close();
    this.toast.open('Dodano nowe zadanie', '' , { panelClass: 'create-success-toast'})
  }

  private createFailure(error: { message: string; }) {
    this.toast.open(error.message, '', { panelClass: 'create-failure-toast'})
  }

}
