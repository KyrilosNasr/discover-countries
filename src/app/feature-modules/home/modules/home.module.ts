import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterDropdownComponent } from '../components/filter-dropdown/filter-dropdown.component';
import { HomeComponent } from '../components/home/home.component';
import { CountryCardComponent } from '../../countries/components/country-card/country-card.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, FilterDropdownComponent, CountryCardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
