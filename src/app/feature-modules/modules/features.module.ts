import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutes } from './feature.routing.module';
import { HomeModule } from '../home/modules/home.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [],
  imports: [CommonModule, FeatureRoutes,],
  providers: [HomeModule, Ng2SearchPipeModule],
})
export class FeaturesModule {}
