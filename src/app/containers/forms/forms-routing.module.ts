import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms.component';
import { MultiStepComponent } from './multi-step/multi-step.component';
import { PersonalFormComponent } from './multi-step/personal-form/personal-form.component';
import { SocialFormComponent } from './multi-step/social-form/social-form.component';
import { AccountInfoComponent } from './multi-step/account-info/account-info.component';


const routes: Routes = [
  {path: '', component: FormsComponent, children: [
    {path: 'multi-step', component: MultiStepComponent, children: [
      {path: "personal", component: PersonalFormComponent},
      {path: "social", component: SocialFormComponent},
      {path: "info", component: AccountInfoComponent},
      {path: "**", component: PersonalFormComponent}
    ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
