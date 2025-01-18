import { Component, Input, OnInit } from '@angular/core';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { ViewCarousel } from '../../models/interface/carousel.interface';
import { NewsType } from '../../models/enum/newstype.enum';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'gxun-carousel',
  imports: [CommonModule, NzCarouselModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent implements OnInit {
  @Input() carousel: ViewCarousel[] = [];

  readonly NewsType = NewsType;
  constructor() {}

  ngOnInit(): void {}
  array = [1, 2, 3, 4];
}
