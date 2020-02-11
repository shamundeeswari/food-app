import { Injectable } from '@angular/core';


@Injectable({

  providedIn: 'root'

})
export class CartService {

	items=[];
	hotel=[];

	addToCart(item){
		this.items.push(item);
	}

	addToHotel(hotel){
		this.hotel.push(hotel);
	}



	callAll(item,hotel){
		this.addToCart(item)
		this.addToHotel(hotel)
	}

	
	getItems(){
		return this.items;		
	}

	getHotel(){
		return this.hotel;		
	}



	clearCart(){
		this.items=[];
		return this.items
	}


  constructor(

  	) { }
}
