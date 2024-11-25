import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SHARED_COMPONENTS } from './shared/shared';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,...SHARED_COMPONENTS],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gxun_frontend';
  headerButtonList:string[]=[];

  constructor() {
    this.headerButtonList=['Home','Product','About','Contact'];
  }

  ngOnInit() {
  }
}
