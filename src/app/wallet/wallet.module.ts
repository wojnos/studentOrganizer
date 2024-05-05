import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularMaterialModule} from "../angular-material/angular-material.module";
import { WalletCardComponent } from './wallet-card/wallet-card.component';
import { WalletFormComponent } from './wallet-form/wallet-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import { WalletHistoryComponent } from './wallet-history/wallet-history.component';
import { WalletHistoryCardComponent } from './wallet-history-card/wallet-history-card.component';
import {MatTableModule} from "@angular/material/table";


@NgModule({
  declarations: [
    WalletCardComponent, WalletFormComponent, WalletHistoryComponent, WalletHistoryCardComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatTableModule
  ],
  exports: [
    WalletCardComponent,
    WalletFormComponent,
    WalletHistoryComponent

  ]
})
export class WalletModule { }
