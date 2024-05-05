import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarConfig, MatSnackBarModule} from "@angular/material/snack-bar";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogConfig} from "@angular/material/dialog";

const angularMaterial_Modules = [
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatFormFieldModule
];

const MAT_DIALOG_GLOBAL_CONFIG: MatDialogConfig = {
  width: '750px',
  hasBackdrop: true
};

const MAT_SNACK_BAR_GLOBAL_CONFIG: MatSnackBarConfig = {
  verticalPosition: 'top',
  horizontalPosition: 'center',
  duration: 2000
};
@NgModule({
  declarations: [],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: MAT_DIALOG_GLOBAL_CONFIG},
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: MAT_SNACK_BAR_GLOBAL_CONFIG}
  ],
  imports: [
    CommonModule,
  ],
  exports: [...angularMaterial_Modules]
})
export class AngularMaterialModule { }
