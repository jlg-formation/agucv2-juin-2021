import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles = [
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
}
