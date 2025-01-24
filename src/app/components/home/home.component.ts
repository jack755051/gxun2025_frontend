/** package */
import { Component, OnInit } from '@angular/core';
/** component */
import { CarouselComponent } from '../carousel/carousel.component';
import { CardComponent } from '../../common/card/card.component';
/** interface*/
import { ViewCarousel } from '../../models/interface/carousel.interface';
import { ViewCard } from '../../models/interface/card.interface';
/** mock*/
import { MockCarousel } from '../../models/mock/mock-carousel';
import { MockCard } from '../../models/mock/mock-card';

@Component({
  selector: 'gxun-home',
  imports: [CarouselComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  /** homepage - 輪播圖 */
  carousel: ViewCarousel[] = [];
  /** homepage - 產品牌卡 */
  cards: ViewCard[] = [];
  constructor() {}

  ngOnInit(): void {
    this.carousel = MockCarousel.mockCarousel;
    this.cards = MockCard.mockCards;
  }
}
