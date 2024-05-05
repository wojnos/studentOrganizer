import {Component, Input, OnInit} from '@angular/core';
import {WalletService} from "../core/services/wallet.service";
import {Observable} from "rxjs";
import {History, Wallet} from "../models/wallet.model";
import {formatNumber} from "@angular/common";
import {NewTaskComponent} from "../to-do-list/new-task/new-task.component";
import {WalletHistoryComponent} from "./wallet-history/wallet-history.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  @Input() wallet?: Wallet;
  wallet$: Observable<Wallet[]> = this.walletService.getWallet();


  constructor(
    private walletService: WalletService,
    private dialog: MatDialog,
    ) { }

  ngOnInit(): void {
    this.walletService.getWallet().subscribe(console.log);
  }

  createNewWallet() {
      // @ts-ignore
      this.walletService.updateWallet('w-a-l-e-t-key', parseFloat(0) )
  }

  openHistoryModal() {
    this.dialog.open(WalletHistoryComponent)
  }


}
