import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private triggerHomePage = new BehaviorSubject<boolean>(false);
  listPage$ = this.triggerHomePage.asObservable();

  constructor() { }

  triggerHomeAction() {
    this.triggerHomePage.next(true);
  }

}
