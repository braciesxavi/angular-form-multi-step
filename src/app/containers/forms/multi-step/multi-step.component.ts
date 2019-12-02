import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-multi-step',
  templateUrl: './multi-step.template.html',
  styles: []
})
export class MultiStepComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }
  sendData()  {
    this.dataService.changeData({key: 'form', value: 'HELLO'})
  }
}
