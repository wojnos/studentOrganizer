import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Task} from "../../models/task.model";

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  // @ts-ignore
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  setTask(task: Task) {
    const {key, ...formData } = task;
    this.form.patchValue(formData)
  }
  private buildForm() {
    this.form = this.formBuilder.group({
      whatToDo: ['',{ validators:[Validators.required]}],
      addedDate: ['',{ validators:[Validators.required]}],
      deadLine: ['',{ validators:[Validators.required]}],
      additionalInfo: ['']
    })
  }
}
