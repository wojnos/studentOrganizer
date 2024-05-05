import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./core/login/login.component";
import {DashboardComponent} from "./core/dashboard/dashboard.component";
import {WalletComponent} from "./wallet/wallet.component";
import {ToDoListComponent} from "./to-do-list/to-do-list.component";
import {AuthGuard} from "./core/services/auth.guard";
import {EditTaskComponent} from "./to-do-list/edit-task/edit-task.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'wallet', component: WalletComponent },
      { path: 'to-do-list', component: ToDoListComponent },
      { path: 'to-do-list/:key', component: EditTaskComponent },
  ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
