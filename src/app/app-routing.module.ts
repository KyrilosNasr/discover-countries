import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailComponent } from './feature-modules/countries/components/country-card/detail/detail.component';
import { HomeComponent } from './feature-modules/home/components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: ':country',
    component: DetailComponent,
  },
  { path: 'features', loadChildren: () => import('./feature-modules/modules/features.module').then(m => m.FeaturesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
