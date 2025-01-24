import { ProductStatus } from '../enum/product-status.enum';
import { ViewCard } from '../interface/card.interface';

export class MockCard {
  private static readonly _mockCard: ViewCard[] = [
    {
      id: '1',
      type: ProductStatus.HOT,
      productionName: 'Hot Product 1',
      productionDescription: 'Description for Hot Product 1',
    },
    {
      id: '2',
      type: ProductStatus.HOT,
      productionName: 'Hot Product 2',
      productionDescription: 'Description for Hot Product 2',
    },
    {
      id: '3',
      type: ProductStatus.HOT,
      productionName: 'Hot Product 3',
      productionDescription: 'Description for Hot Product 3',
    },
    {
      id: '4',
      type: ProductStatus.HOT,
      productionName: 'Hot Product 4',
      productionDescription: 'Description for Hot Product 4',
    },
    {
      id: '5',
      type: ProductStatus.HOT,
      productionName: 'Hot Product 5',
      productionDescription: 'Description for Hot Product 5',
    },
    {
      id: '6',
      type: ProductStatus.NEW_ARRIVAL,
      productionName: 'New Arrival Product 1',
      productionDescription: 'Description for New Arrival Product 1',
    },
    {
      id: '7',
      type: ProductStatus.NEW_ARRIVAL,
      productionName: 'New Arrival Product 2',
      productionDescription: 'Description for New Arrival Product 2',
    },
    {
      id: '8',
      type: ProductStatus.NEW_ARRIVAL,
      productionName: 'New Arrival Product 3',
      productionDescription: 'Description for New Arrival Product 3',
    },
    {
      id: '9',
      type: ProductStatus.NEW_ARRIVAL,
      productionName: 'New Arrival Product 4',
      productionDescription: 'Description for New Arrival Product 4',
    },
    {
      id: '10',
      type: ProductStatus.NEW_ARRIVAL,
      productionName: 'New Arrival Product 5',
      productionDescription: 'Description for New Arrival Product 5',
    },
    {
      id: '11',
      type: ProductStatus.COMING_SOON,
      productionName: 'Coming Soon Product 1',
      productionDescription: 'Description for Coming Soon Product 1',
    },
    {
      id: '12',
      type: ProductStatus.COMING_SOON,
      productionName: 'Coming Soon Product 2',
      productionDescription: 'Description for Coming Soon Product 2',
    },
    {
      id: '13',
      type: ProductStatus.COMING_SOON,
      productionName: 'Coming Soon Product 3',
      productionDescription: 'Description for Coming Soon Product 3',
    },
    {
      id: '14',
      type: ProductStatus.COMING_SOON,
      productionName: 'Coming Soon Product 4',
      productionDescription: 'Description for Coming Soon Product 4',
    },
    {
      id: '15',
      type: ProductStatus.COMING_SOON,
      productionName: 'Coming Soon Product 5',
      productionDescription: 'Description for Coming Soon Product 5',
    },
  ];

  static get mockCards(): ViewCard[] {
    return this._mockCard;
  }
}
