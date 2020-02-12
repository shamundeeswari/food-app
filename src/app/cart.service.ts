import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({

  providedIn: 'root'

})
export class CartService {

	items=[];
	hotels;


	addToCart(item){
		this.items.push(item);
	}

	addToHotel(hotel){
		this.hotels = hotel;
	}

	allToCart(item,hotel){
		this.addToCart(item);
		this.addToHotel(hotel);
	}

	getItems(){
		return this.items;		
	}

	getHotels(){
		return this.hotels;		
	}

	clearCart(){
		this.items=[];
		return this.items
	}

	getShippingPrices() {
    	return this.http.get('/assets/shipping.json');
  	}

  constructor(
  	private http: HttpClient

  	) { }
}
