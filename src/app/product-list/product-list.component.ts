import { Component, OnInit } from '@angular/core';

import {hotels} from '../hotel'


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  hotels = hotels;

  constructor() { }

  ngOnInit() {
  }

}
