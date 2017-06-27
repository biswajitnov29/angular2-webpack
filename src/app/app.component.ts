import { Component } from '@angular/core';

import '../assets/css/styles.css';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styles: [
    require('./app.component.less').toString()
  ]
})
export class AppComponent { }
