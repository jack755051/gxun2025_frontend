import { NewsType } from '../enum/newstype.enum';
import { ViewCarousel } from '../interface/carousel.interface';

export class MockCarousel {
  private static readonly _mockCarousel: ViewCarousel[] = [
    {
      id: '1',
      newsType: NewsType.LATEST,
      path: '../../../assets/image/carousel01.jpg',
    },
    {
      id: '2',
      newsType: NewsType.DISCOUNT,
      path: '../../../assets/image/carousel02.jpg',
    },
    {
      id: '3',
      newsType: NewsType.HOT,
      path: '../../../assets/image/carousel03.jpg',
    },
  ];

  static get mockCarousel(): ViewCarousel[] {
    return this._mockCarousel;
  }
}
