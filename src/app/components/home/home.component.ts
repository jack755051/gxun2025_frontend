import { Component, OnInit } from '@angular/core';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { NzFloatButtonModule } from 'ng-zorro-antd/float-button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'gxun-home',
  imports: [NzFloatButtonModule, NzIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  openChange(status: boolean): void {
    console.log(status);
  }
}
