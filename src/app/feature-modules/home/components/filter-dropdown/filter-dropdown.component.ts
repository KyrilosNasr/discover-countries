import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-dropdown',
  templateUrl: './filter-dropdown.component.html',
  styleUrls: ['./filter-dropdown.component.scss'],
})
export class FilterDropdownComponent {
  selected: string = 'All';

  showOptions = false;

  @Input()
  regions: string[]; // btwasal tmam

  @Output()
  valueChanged: EventEmitter<string> = new EventEmitter();

  public select(region: string): void {
    this.selected = region;
    this.valueChanged.emit(region);
  }

  public toggleOptions(): void {
    this.showOptions = !this.showOptions;
  }
}
