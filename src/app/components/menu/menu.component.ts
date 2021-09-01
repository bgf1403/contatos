import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() eventEmitter = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  addContact():void {
    this.eventEmitter.emit()
  }

}
