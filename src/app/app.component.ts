import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contatos';
  mostrandoModal = false;
  show():void {
    this.mostrandoModal=true;
  }
  hide():void {
    this.mostrandoModal=false;
  }
}
