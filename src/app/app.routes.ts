import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { FormComponent } from './pages/form/form.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Cat Energy — функциональное питание для котов' },
  { path: 'catalog', component: CatalogComponent, title: 'Каталог продукции — Cat Energy' },
  { path: 'form', component: FormComponent, title: 'Подбор программы — Cat Energy' },
  { path: '**', component: NotFoundComponent, title: 'Страница не найдена — Cat Energy' }
];
