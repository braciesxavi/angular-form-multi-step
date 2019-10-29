import { Component, OnInit } from '@angular/core';
import { FormAccountService } from 'src/app/services/form-account.service';
import { Personal } from 'src/app/services/account.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.scss']
})
export class PersonalFormComponent implements OnInit {
  personalData: Personal;
  constructor(private formAccountService: FormAccountService, private router: Router ) { }

  ngOnInit() {
    this.personalData = this.formAccountService.getPersonal();
  }
  onSubmit(form: any) {
    if (form.valid){
      this.formAccountService.setPersonal(this.personalData);
      this.router.navigate(["/social"]);
    } else {
      console.log('FORM PERSONAL INVALID')
    }
   
  }
}
