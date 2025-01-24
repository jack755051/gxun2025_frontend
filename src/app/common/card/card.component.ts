import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CardItemComponent } from './card-item/card-item.component';
import { CommonModule } from '@angular/common';
import { ViewCard } from '../../models/interface/card.interface';
import { ProductStatus } from '../../models/enum/product-status.enum';

@Component({
  selector: 'gxun-card',
  imports: [NzCardModule, CommonModule, CardItemComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit, OnDestroy {
  @Input() cards: ViewCard[] = [];

  hotProduct: ViewCard[] = [];
  newArrivalProduct: ViewCard[] = [];

  readonly ProductStatus = ProductStatus;
  constructor() {}

  ngOnInit(): void {
    console.log('cards', this.cards);
  }

  ngOnDestroy(): void {}

  filterProductsByType(type: ProductStatus): ViewCard[] {
    return this.cards.filter((card) => card.type === type);
  }

  getProductStatusLabel(status: ProductStatus): string {
    const labels = {
      [ProductStatus.HOT]: '熱銷產品',
      [ProductStatus.NEW_ARRIVAL]: '最新產品',
      [ProductStatus.COMING_SOON]: '即將上市',
    };
    return labels[status] || '未定義分類';
  }
}
