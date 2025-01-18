import { ProductStatus } from '../enum/product-status.enum';

export interface ViewCard {
  id: string;
  type?: ProductStatus;
  productionName: string;
  productionDescription: string;
}
