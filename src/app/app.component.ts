import { Component } from '@angular/core';
console.log('app init');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
    console.log('app init');
  }
}
