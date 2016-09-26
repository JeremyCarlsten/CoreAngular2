import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { ViewComponent } from './view/view.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'view/:id', component: ViewComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

