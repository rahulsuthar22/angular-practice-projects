import { Component, OnInit } from '@angular/core';
import { Product, products } from '../model/product';
import { CartService } from '../service/cart.service';
// import { toast, snackbar } from 'tailwind-toast';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products: Product[] = products;
  public product = {}

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }
  // toast().default('Hey you pressed it!', 'Why !').for(1000).show();

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
  toast() {
    const { toast, snackbarhi } = require('tailwind-toast')

    toast().default('Hey you pressed it!', 'Why !').for(1000).show()
  }

}
