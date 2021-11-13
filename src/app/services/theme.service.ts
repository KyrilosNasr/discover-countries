import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Theme } from '../Enums/theme.enum';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  
  private currentMode : BehaviorSubject<Theme | any> = new BehaviorSubject(Theme.dark)
  constructor() { }

  get mode$(){
    return this.currentMode.asObservable()
  }

  changeMode(){
    if(this.currentMode.value === Theme.dark){
      this.currentMode.next(Theme.light)
      console.log('light');
      
    }else{
      this.currentMode.next(Theme.dark)
      console.log('dark');
    }
  }
}
