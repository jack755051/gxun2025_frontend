import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ViewCard } from '../../../models/interface/card.interface';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'gxun-card-item',
  imports: [CommonModule, NzCardModule, NzIconModule],
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.scss',
})
export class CardItemComponent implements OnInit {
  @Input() ProductData: ViewCard[] = [];

  constructor() {}

  ngOnInit(): void {
    console.log('ProductData', this.ProductData);
  }
}
