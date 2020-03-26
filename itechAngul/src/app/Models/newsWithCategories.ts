import { Categories } from './categories';
import { News } from './news';
export class NewsWithCategories {
    constructor(
      public news :News,
      public categories: Categories

    ) {}
  }