import { TestBed } from '@angular/core/testing';
import { provideRouter, Router, Routes } from '@angular/router';
import { HeaderComponent } from './header.component';

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'catalog', component: HeaderComponent }
];

describe('HeaderComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [provideRouter(routes)]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should toggle the mobile menu open state', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const component = fixture.componentInstance;

    expect(component['menuOpen']()).toBeFalse();
    component.toggleMenu();
    expect(component['menuOpen']()).toBeTrue();
    component.toggleMenu();
    expect(component['menuOpen']()).toBeFalse();
  });

  it('should close the mobile menu after navigating to a new route', async () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const component = fixture.componentInstance;
    const router = TestBed.inject(Router);

    component.toggleMenu();
    expect(component['menuOpen']()).toBeTrue();

    await router.navigateByUrl('/catalog');

    expect(component['menuOpen']()).toBeFalse();
  });

  it('should treat "/" as the home route', async () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const component = fixture.componentInstance;
    const router = TestBed.inject(Router);

    await router.navigateByUrl('/');
    expect(component['isHomeRoute']()).toBeTrue();

    await router.navigateByUrl('/catalog');
    expect(component['isHomeRoute']()).toBeFalse();
  });
});
