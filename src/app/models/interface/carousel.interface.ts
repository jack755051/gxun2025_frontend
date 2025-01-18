import { NewsType } from '../enum/newstype.enum';

/**用於view的輪播圖 */
export interface ViewCarousel {
  id: string;
  newsType: NewsType;
  path: string;
}
