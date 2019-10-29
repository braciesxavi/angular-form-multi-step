import { Component, OnInit } from '@angular/core';
import { AccountData } from 'src/app/services/account.model';
import { FormAccountService } from 'src/app/services/form-account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss']
})
export class AccountInfoComponent implements OnInit {
  accountInfo: AccountData;
  constructor(private formService: FormAccountService, private router: Router) { }

  ngOnInit() {
    this.accountInfo = this.formService.getAccountFormData();
  }
  done() {
    this.formService.resetAccountForm();
    this.router.navigate(["/personal"]);
  }

}
