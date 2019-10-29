import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: []
})
export class CardComponent implements OnInit {
  @Output() checkedChange = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
  emitChangeValue(event) {
    this.checkedChange.emit(event.target.checked);
  }
}
