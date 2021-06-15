import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit {
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

  ngOnInit(): void {}
}
