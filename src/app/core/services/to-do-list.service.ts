import {Injectable, OnInit} from '@angular/core';
import {AngularFireDatabase, SnapshotAction} from "@angular/fire/compat/database";
import {map, Observable} from "rxjs";
import {Task} from "../../models/task.model";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class ToDoListService implements OnInit {

  private API_URL = "/users";

  userId = this.authService.userLoggedId;
  constructor(
    private db: AngularFireDatabase,
    private authService: AuthService
              ) {
  }

  getTasks(): Observable<Task[]> {
    return this.db.list<Task>(`${this.API_URL}/${this.userId}/tasks`).snapshotChanges()
      .pipe(map(response => response.map(task => this.assignKey(task))));
  }

  getTask(key: string): Observable<Task> {
    return this.db.object<Task>(`${this.API_URL}/${this.userId}/tasks/${key}`).snapshotChanges()
      .pipe(map(task => this.assignKey(task)))
  }

  addTask(task: Task) {
    return this.db.list<Task>(`${this.API_URL}/${this.userId}/tasks/`).push(task);
  }

  removeTask(key: string | undefined) {
    return this.db.object(`${this.API_URL}/${this.userId}/tasks/${key}`).remove()
  }

  editTask(key: string | undefined, task: Task) {
    console.log('edit z totolistservice')
    return this.db.object<Task>(`${this.API_URL}/${this.userId}/tasks/${key}`).update(task)
  }

  private assignKey(task: SnapshotAction<any>) {
    return {...task.payload.val(), key: task.key}
  }

  ngOnInit(): void {
  }

}
