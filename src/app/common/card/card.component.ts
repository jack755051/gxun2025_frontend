import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CardItemComponent } from './card-item/card-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'gxun-card',
  imports: [NzCardModule, CommonModule, CardItemComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
