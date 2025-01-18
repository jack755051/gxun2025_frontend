import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { ViewCarousel } from '../../models/interface/carousel.interface';
import { MockCarousel } from '../../models/mock/mock-carousel';

@Component({
  selector: 'gxun-home',
  imports: [CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  /** homepage - 輪播圖 */
  carousel: ViewCarousel[] = [];
  constructor() {}

  ngOnInit(): void {
    this.carousel = MockCarousel.mockCarousel;
  }
}
