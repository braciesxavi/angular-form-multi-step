import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalFormComponent } from './containers/forms/multi-step/personal-form/personal-form.component';
import { SocialFormComponent } from './containers/forms/multi-step/social-form/social-form.component';
import { AccountInfoComponent } from './containers/forms/multi-step/account-info/account-info.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { ScheduleComponent } from './containers/schedule/schedule.component';
import { CronEditorModule } from "cron-editor";
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,

  ],
  imports: [
    BrowserModule,
    CronEditorModule,
    AppRoutingModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
