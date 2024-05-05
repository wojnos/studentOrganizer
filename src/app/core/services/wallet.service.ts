import { Injectable } from '@angular/core';
import {AngularFireDatabase, SnapshotAction} from "@angular/fire/compat/database";
import {map, Observable} from "rxjs";
import {History, Wallet} from "../../models/wallet.model";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private API_URL = "/users";
  userId = this.authService.userLoggedId;
  constructor(
    private db: AngularFireDatabase,
    private authService: AuthService
  ) {
  }

  getWallet(): Observable<Wallet[]> {
    return this.db.list<Wallet>(`${this.API_URL}/${this.userId}/wallet/`).snapshotChanges()
      .pipe(map(response => response.map(wallet => this.assignKey(wallet))));
  }

  updateWallet(key: string | undefined, wallet: number) {
    // @ts-ignore
    return this.db.object<Wallet>(`${this.API_URL}/${this.userId}/wallet/${key}`).set({'sum': wallet});
  }

  addWalletHistory(wallet: Wallet) {
    return this.db.list<Wallet>(`${this.API_URL}/${this.userId}/walletHistory`).push(wallet);
  }

  getWalletHistory(): Observable<History[]> {
    return this.db.list<History>(`${this.API_URL}/${this.userId}/walletHistory`).snapshotChanges()
      .pipe(map(response => response.map(wallet => this.assignKey(wallet))));
  }
  private assignKey(userWallet: SnapshotAction<any>) {
    return {...userWallet.payload.val(), key: userWallet.key }
  }

}
