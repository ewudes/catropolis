import { Component } from '@angular/core';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { OptionalCardComponent } from './components/optional-card/optional-card.component';
import { GiftComponent } from './components/gift/gift.component';
import { LocationComponent } from '../../layout/location/location.component';
import { OPTIONAL_PRODUCTS, PRODUCTS } from '../../core/data/products';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [ProductCardComponent, OptionalCardComponent, GiftComponent, LocationComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent {
  protected readonly products = PRODUCTS;
  protected readonly optionalProducts = OPTIONAL_PRODUCTS;

  onShowMore(event: Event): void {
    // TODO: подключить пагинацию/подгрузку каталога после появления бэкенда магазина.
    event.preventDefault();
  }
}
