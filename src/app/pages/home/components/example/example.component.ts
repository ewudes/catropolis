import { Component } from '@angular/core';
import { ComparisonSliderComponent } from '../comparison-slider/comparison-slider.component';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [ComparisonSliderComponent],
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss'
})
export class ExampleComponent {}
