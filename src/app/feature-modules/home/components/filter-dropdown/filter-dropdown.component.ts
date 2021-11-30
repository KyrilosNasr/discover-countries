import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-dropdown',
  templateUrl: './filter-dropdown.component.html',
  styleUrls: ['./filter-dropdown.component.scss']
})
export class FilterDropdownComponent {
  showOptions = false;

  @Input()
  placeholder: string;

  @Input()
  regions: string[]  // btwasal tmam

  @Input()
  region: string | any;

  @Output()
  valueChange: EventEmitter<string> = new EventEmitter();

  public select(region: string): void {
    this.valueChange.emit(region);
    console.log(this.valueChange.emit(region));
    console.log(this.region);
    console.log(this.valueChange);
    console.log(this.regions);

  }

  public toggleOptions(): void {
    this.showOptions = !this.showOptions;
  }

}
