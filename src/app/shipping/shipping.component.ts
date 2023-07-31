import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  constructor(private cartService: CartService) {

  }
  shipping!: Observable<{ type: string, price: number }[]>;

  ngOnInit(): void {
    this.shipping = this.cartService.getShippingPrice()
  }

}
