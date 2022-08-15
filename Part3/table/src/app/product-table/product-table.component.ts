import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProductTableService } from './product-table.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {

  cookies: Cookie[] = [];
  constructor(private productTableservice: ProductTableService) { }

  ngOnInit(): void {
    this.productTableservice.getProductList().subscribe(products => {
      this.cookies.push(...products.cookies);
    });
  }

  sortName(order: number) {
    if (order == 1)
      this.cookies.sort((a, b) => a.name.localeCompare(b.name));
    else
      this.cookies.sort((a, b) => b.name.localeCompare(a.name));
  }

  sortPrice(order: number) {
    if (order == 1)
      this.cookies.sort((a, b) => a.price.localeCompare(b.price));
    else
      this.cookies.sort((a, b) => b.price.localeCompare(a.price));
  }

  sortCategory(order: number) {
    if (order == 1)
      this.cookies.sort((a, b) => a.category.localeCompare(b.category));
    else
      this.cookies.sort((a, b) => b.category.localeCompare(a.category));
  }

}

export interface Cookie {
  "name": string,
  "price": string,
  "category": string
}