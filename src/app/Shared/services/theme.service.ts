import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Theme } from '../model/theme.enum';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private currentMode: BehaviorSubject<Theme | any> = new BehaviorSubject(Theme.dark)
  constructor() { }

  public get _mode$(): Observable<any> {
    return this.currentMode.asObservable()
  }

  public changeMode(): void {
    if (this.currentMode.value === Theme.dark) {
      this.currentMode.next(Theme.light)
      console.log('light');

    } else {
      this.currentMode.next(Theme.dark)
      console.log('dark');
    }
  }
}
