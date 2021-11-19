import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  values: string[];

  @Input()
  value: string | any;

  @Output()
  valueChange: EventEmitter<string> = new EventEmitter();

  public select(value: string): void {
    this.valueChange.emit(value);
  }

  public toggleOptions(): void {
    this.showOptions = !this.showOptions;
  }

}
