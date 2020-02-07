import { Injectable } from '@angular/core';


@Injectable({

  providedIn: 'root'

})
export class CartService {

	items=[];

	addToCart(hotel){
		this.items.push(hotel);
	}

	getItems(){
		return this.items;		
	}

	clearCart(){
		this.items=[];
		return this.items
	}


  constructor(

  	) { }
}
