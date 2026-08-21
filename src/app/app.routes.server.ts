import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'catalog', renderMode: RenderMode.Prerender },
  { path: 'form', renderMode: RenderMode.Prerender },
  { path: '**', renderMode: RenderMode.Server }
];
