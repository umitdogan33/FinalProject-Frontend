import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';
import { Product } from 'src/app/models/product';
import { ProductDetail } from 'src/app/models/productDetail';
import { CartService } from 'src/app/service/cart.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  cartItems:CartItem[];
  
  constructor(private cartService:CartService,  private localStorage: LocalStorageService) { }

  ngOnInit(): void {
    this.getCart();
  }

  getCart(){
    this.cartItems=  this.cartService.list();
    
  }

  removeFromCart(product:ProductDetail){
    this.cartService.RemoveFromCart(product);
  }

}
