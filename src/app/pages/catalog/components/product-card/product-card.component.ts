import { Component, Input } from '@angular/core';
import { LowerCasePipe } from '@angular/common';
import { Product } from '../../../../core/models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [LowerCasePipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;

  onOrder(event: Event): void {
    // TODO: подключить оформление заказа после появления бэкенда магазина.
    event.preventDefault();
  }
}
