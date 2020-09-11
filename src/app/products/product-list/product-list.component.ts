import { Component, OnInit } from '@angular/core';

interface Product {
  id: number;
  name: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  product: Product = {
    id:1,
    name: 'Aspirine 2',
  };
  items: [1,2,3,'1'];

  constructor() { }

  ngOnInit(): void {
  }

  print(x: number): void {
    alert(`I clicked ${x}`)
  }
}
