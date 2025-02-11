import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {hotels} from '../hotel'
import { CartService } from '../cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

 hotel;




  allToCart(item,hotel){
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(item);
    this.cartService.addToHotel(hotel);
  }


  constructor(
			 private route:ActivatedRoute,
       
       private cartService:CartService,
  	) { }

  ngOnInit() {


  	 this.route.paramMap.subscribe( params =>
      {
        this.hotel = hotels[+params.get ('hotelId') ];
      });
  		
  }

}
