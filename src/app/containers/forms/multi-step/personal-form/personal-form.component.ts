import { Component, OnInit } from '@angular/core';
import { FormAccountService } from 'src/app/services/form-account.service';
import { Personal } from 'src/app/services/account.model';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.scss']
})
export class PersonalFormComponent implements OnInit {
  personalData: Personal;
  data: any = null;
  constructor(private formAccountService: FormAccountService, private router: Router, private dataService: DataService ) {
    this.dataService.currentData.subscribe((data: any) => {
      if (data.key === 'form'){
        this.data = data.value;
        console.log('VALUE', data.value);
      }
    })
  }

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
