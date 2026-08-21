import { TestBed } from '@angular/core/testing';
import { ComparisonSliderComponent } from './comparison-slider.component';

describe('ComparisonSliderComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComparisonSliderComponent]
    }).compileComponents();
  });

  it('should create with no active view by default', () => {
    const fixture = TestBed.createComponent(ComparisonSliderComponent);
    const component = fixture.componentInstance;

    expect(component['activeView']()).toBeNull();
  });

  it('should switch to the "before" view', () => {
    const fixture = TestBed.createComponent(ComparisonSliderComponent);
    const component = fixture.componentInstance;

    component.showBefore();

    expect(component['activeView']()).toBe('before');
  });

  it('should switch to the "after" view', () => {
    const fixture = TestBed.createComponent(ComparisonSliderComponent);
    const component = fixture.componentInstance;

    component.showAfter();

    expect(component['activeView']()).toBe('after');
  });

  it('should apply the matching modifier classes to the host element', () => {
    const fixture = TestBed.createComponent(ComparisonSliderComponent);
    const component = fixture.componentInstance;

    component.showAfter();
    fixture.detectChanges();

    const slider = fixture.nativeElement.querySelector('.slider');
    expect(slider.classList).toContain('slider--after');
    expect(slider.classList).not.toContain('slider--before');
  });
});
