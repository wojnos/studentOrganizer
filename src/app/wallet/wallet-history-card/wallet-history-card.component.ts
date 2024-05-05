import {Component, Input, OnInit} from '@angular/core';
import {History} from "../../models/wallet.model";

@Component({
  selector: 'app-wallet-history-card',
  templateUrl: './wallet-history-card.component.html',
  styleUrls: ['./wallet-history-card.component.css']
})
export class WalletHistoryCardComponent implements OnInit {
  @Input() walletHistory?: History;
  constructor() { }

  ngOnInit(): void {
  }

}
