import {Component, OnInit} from '@angular/core';
import {History} from "../../models/wallet.model";
import {Observable} from "rxjs";
import {WalletService} from "../../core/services/wallet.service";

@Component({
  selector: 'app-wallet-history',
  templateUrl: './wallet-history.component.html',
  styleUrls: ['./wallet-history.component.css']
})
export class WalletHistoryComponent implements OnInit {

  walletHistory$: Observable<History[]> = this.walletService.getWalletHistory();
  constructor(
    private walletService: WalletService
  ) { }

  ngOnInit(): void {
  }


}
