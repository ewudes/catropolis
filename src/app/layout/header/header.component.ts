import { Component, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  protected readonly menuOpen = signal(false);

  constructor(private readonly router: Router) {}

  protected isHomeRoute(): boolean {
    return this.router.url === '/';
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }
}
