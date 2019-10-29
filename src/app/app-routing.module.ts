import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalFormComponent } from './containers/forms/multi-step/personal-form/personal-form.component';
import { SocialFormComponent } from './containers/forms/multi-step/social-form/social-form.component';
import { AccountInfoComponent } from './containers/forms/multi-step/account-info/account-info.component';


const routes: Routes = [
 {path: 'content-protection', loadChildren: "./containers/content-protection/content-protection.module#ContentProtectionModule"},
 {path: 'forms', loadChildren: "./containers/forms/forms.module#FormModule"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
