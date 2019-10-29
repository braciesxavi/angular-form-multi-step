import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentProtectionComponent } from './content-protection.component';
import { NgContentComponent } from './ng-content/ng-content.component';


const routes: Routes = [
  {path: '', component: ContentProtectionComponent, children: [
    {path: 'ng-content', component: NgContentComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentProtectionRoutingModule { }
