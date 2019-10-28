import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormAccountService } from 'src/app/services/form-account.service';
import { Social } from 'src/app/services/account.model';

@Component({
  selector: 'app-social-form',
  templateUrl: './social-form.component.html',
  styleUrls: ['./social-form.component.scss']
})
export class SocialFormComponent implements OnInit {
  socialData: Social;
  constructor(private router: Router, private formService: FormAccountService) { }

  ngOnInit() {
    this.socialData = this.formService.getSocial();
  }
  onSubmit(form: any) {
    if (form.valid) {
      this.formService.setSocial(this.socialData);
      this.router.navigate(["/info"]);
    } else {
      console.log("SOCIAL FORM INVALID")
    }
  }

}
