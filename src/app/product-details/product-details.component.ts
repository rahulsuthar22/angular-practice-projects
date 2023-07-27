import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../model/product';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  products: Product[] = products;

  constructor(private route: ActivatedRoute,
    private cartService: CartService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = routeParams.get('productId');

    this.product = this.products.find(product => product.id === Number(productIdFromRoute))

  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}
