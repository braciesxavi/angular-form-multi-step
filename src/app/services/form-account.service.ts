import { Injectable } from '@angular/core';
import { Personal, AccountData, Social } from './account.model';

@Injectable({
  providedIn: 'root'
})
export class FormAccountService {
  private formData: AccountData = new AccountData();
  private validPersonalData: boolean = false;
  private validSocialData: boolean = false;
  constructor() { }


  // Set personal data
  setPersonal(data: Personal) {
    this.formData.name = data.name;
    this.formData.address = data.address;
    this.formData.age = data.age;
    this.formData.email = data.email;
    this.validPersonalData = true;
  }

  // Get personal data
  getPersonal(): Personal {
    let data: Personal = {
      name: this.formData.name,
      email: this.formData.email,
      age: this.formData.age,
      address: this.formData.address
    }
    return data;
  }
  // Set personal data
  setSocial(data: Social) {
    this.formData.website = data.website;
    this.formData.facebook = data.facebook;
    this.formData.instagram = data.instagram;
    this.validSocialData = true;
  }

  // Get personal data
  getSocial(): Social {
    let data: Social = {
      website: this.formData.website,
      facebook: this.formData.facebook,
      instagram: this.formData.instagram
    }
    return data;
  }

  getAccountFormData(): AccountData {
      // Return the entire Form Data
      return this.formData;
  }

  resetAccountForm(): AccountData {
      this.formData.clear();
      this.validPersonalData = this.validSocialData = false;
      return this.formData;
  }
  
  // Using for guard access routing
  isFormValid() {
      return this.validPersonalData && this.validSocialData
  }

}
