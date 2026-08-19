import { Component } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { SelectionComponent } from './components/selection/selection.component';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { ExampleComponent } from './components/example/example.component';
import { LocationComponent } from '../../layout/location/location.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, SelectionComponent, InstructionsComponent, ExampleComponent, LocationComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {}
