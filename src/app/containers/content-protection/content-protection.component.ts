import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-protection',
  templateUrl: './content-protection.component.html',
  styleUrls: ['./content-protection.component.scss']
})
export class ContentProtectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('CONTENT PROTECTION RUNNING...')
  }

}
