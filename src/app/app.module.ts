import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailComponent } from './feature-modules/countries/components/country-card/detail/detail.component';
import { NavbarComponent } from './Shared/components/navbar/navbar.component';
import { FeaturesModule } from './feature-modules/modules/features.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [FeaturesModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
