import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
@Component({
  selector: 'gxun-card',
  imports: [NzCardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
