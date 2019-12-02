import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-content',
  templateUrl: './ng-content.component.html',
  styleUrls: ['./ng-content.component.scss']
})
export class NgContentComponent implements OnInit {
  cardEventChecked: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  cardEventChange(event){
    this.cardEventChecked = event;
  }
  eventCall(event){
    console.log('CALL EVENT: ', event.clipboardData)
  }
}
