import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {hotels} from '../hotel'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

 hotel;


  constructor(
			 private route:ActivatedRoute,
  	) { }

  ngOnInit() {


  	 this.route.paramMap.subscribe( params =>
      {
        this.hotel = hotels[+params.get ('hotelId') ];
      });
  		
  }

}
