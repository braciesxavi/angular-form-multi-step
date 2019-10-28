import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalFormComponent } from './containers/personal-form/personal-form.component';
import { SocialFormComponent } from './containers/social-form/social-form.component';
import { AccountInfoComponent } from './containers/account-info/account-info.component';


const routes: Routes = [
  {path: "personal", component: PersonalFormComponent},
  {path: "social", component: SocialFormComponent},
  {path: "info", component: AccountInfoComponent},
  {path: "**", component: PersonalFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
