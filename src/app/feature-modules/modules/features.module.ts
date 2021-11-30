import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutes } from './feature.routing.module';
import { HomeModule } from '../home/modules/home.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, FeatureRoutes],
  providers: [HomeModule],
})
export class FeaturesModule {}
