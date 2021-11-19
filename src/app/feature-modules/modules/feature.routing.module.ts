import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
];

export const FeatureRoutes = RouterModule.forChild(routes);
