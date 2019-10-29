import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { MultiStepComponent } from './multi-step/multi-step.component';
import { PersonalFormComponent } from './multi-step/personal-form/personal-form.component';
import { SocialFormComponent } from './multi-step/social-form/social-form.component';
import { AccountInfoComponent } from './multi-step/account-info/account-info.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormsComponent, 
    MultiStepComponent,
    PersonalFormComponent,
    SocialFormComponent,
    AccountInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormsRoutingModule
  ]
})
export class FormModule { }
