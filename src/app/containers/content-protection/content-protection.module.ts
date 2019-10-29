import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentProtectionRoutingModule } from './content-protection-routing.module';
import { ContentProtectionComponent } from './content-protection.component';
import { CardComponent } from './card/card.component';
import { NgContentComponent } from './ng-content/ng-content.component';


@NgModule({
  declarations: [ContentProtectionComponent, CardComponent, NgContentComponent],
  imports: [
    CommonModule,
    ContentProtectionRoutingModule
  ]
})
export class ContentProtectionModule { }
