import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterDropdownComponent } from '../components/filter-dropdown/filter-dropdown.component';
import { HomeComponent } from '../components/home/home.component';
import { CountryCardComponent } from '../../countries/components/country-card/country-card.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [HomeComponent, FilterDropdownComponent, CountryCardComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, Ng2SearchPipeModule, RouterModule],
  exports: [HomeComponent],
  providers: []
})
export class HomeModule {}
