import { Component, Input } from '@angular/core';
import { OptionalProduct } from '../../../../core/models/product.model';

@Component({
  selector: 'app-optional-card',
  standalone: true,
  templateUrl: './optional-card.component.html',
  styleUrl: './optional-card.component.scss'
})
export class OptionalCardComponent {
  @Input({ required: true }) product!: OptionalProduct;

  onOrder(event: Event): void {
    // TODO: подключить оформление заказа после появления бэкенда магазина.
    event.preventDefault();
  }
}
