import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-wallet-form',
  templateUrl: './wallet-form.component.html',
  styleUrls: ['./wallet-form.component.css']
})
export class WalletFormComponent implements OnInit {
  // @ts-ignore
  walletForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.walletForm = this.formBuilder.group({
      sum: ['', { validators:[Validators.required]}],
      description: [''],
      transactionDate: ['', {validators:[Validators.required]}]
    })
  }
}
