import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private themeService: ThemeService) {

  }
  public switchTheme(): void {
    this.themeService.changeMode()

  }

  ngOnInit() { }

}
