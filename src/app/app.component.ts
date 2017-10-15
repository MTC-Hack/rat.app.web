import { Component } from '@angular/core';
import {API_ENDPOINT} from "./app.settings";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  public title: string = 'rat';

  constructor() { }

  ngOnInit() {
    this.title = API_ENDPOINT;
    console.log(this.title);
  }
}
