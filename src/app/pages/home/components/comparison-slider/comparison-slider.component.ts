import { Component, signal } from '@angular/core';

type SliderView = 'before' | 'after' | null;

@Component({
  selector: 'app-comparison-slider',
  standalone: true,
  templateUrl: './comparison-slider.component.html',
  styleUrl: './comparison-slider.component.scss'
})
export class ComparisonSliderComponent {
  protected readonly activeView = signal<SliderView>(null);

  showBefore(): void {
    this.activeView.set('before');
  }

  showAfter(): void {
    this.activeView.set('after');
  }
}
