import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Theme } from './Shared/model/theme.enum';

import { ThemeService } from './Shared/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  theme: Observable<Theme>;

  constructor(
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    this.theme = this.themeService._mode$;
  }
}
