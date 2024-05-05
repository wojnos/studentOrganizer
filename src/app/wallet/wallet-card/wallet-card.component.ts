import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Wallet} from "../../models/wallet.model";
import {WalletFormComponent} from "../wallet-form/wallet-form.component";
import {WalletService} from "../../core/services/wallet.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-wallet-card',
  templateUrl: './wallet-card.component.html',
  styleUrls: ['./wallet-card.component.css']
})
export class WalletCardComponent implements OnInit {
  @Input() wallet?: Wallet;
  @ViewChild('walletForm') walletForm?: WalletFormComponent;
  constructor(
    private walletService: WalletService,
    private toast: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  newWalletValueADD() {
    let oldValue = this.wallet?.sum;
    let addingValue = this.walletForm?.walletForm.value.sum;
    // @ts-ignore
    let newSum = parseFloat(oldValue) + parseFloat(addingValue);
    this.addHistory();
    return this.walletService.updateWallet(this.wallet?.key, newSum)
  }


  addHistory() {
    console.log('dodanie historii')
    this.walletService.addWalletHistory(this.walletForm?.walletForm.value)
      .then(this.addSuccess.bind(this), this.addFailure.bind(this));
  }

  private addSuccess() {
    this.toast.open('Dodano nowy wpis!', '' , { panelClass: 'create-success-toast'})
  }

  private addFailure(error: { message: string; }) {
    this.toast.open(error.message, '', { panelClass: 'create-failure-toast'})
  }
}
