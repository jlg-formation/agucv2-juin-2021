import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: Article[] = [
    { name: 'Tournevis', price: 2.34, qty: 123 },
    { name: 'Tournevis Cruciforme', price: 4, qty: 12 },
    { name: 'Tournevis', price: 2.34, qty: 123 },
    { name: 'Tournevis', price: 2.34, qty: 123 },
    { name: 'Tournevis', price: 2.34, qty: 123 },
    { name: 'Tournevis', price: 2.34, qty: 123 },
    { name: 'Tournevis', price: 2.34, qty: 123 },
    { name: 'Tournevis', price: 2.34, qty: 123 },
  ];

  constructor() {}

  add(article: Article) {
    this.articles.push(article);
  }
}
