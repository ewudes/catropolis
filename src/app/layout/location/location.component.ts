import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-location',
  standalone: true,
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss'
})
export class LocationComponent {
  @Input() variant: 'default' | 'index' = 'default';
}
