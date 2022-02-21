import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  exclusive = new Subject<boolean>();
  userName = new BehaviorSubject<string>("Tanzeel");
  videoEmit = new ReplaySubject<string>(3, 5000);
  asyncVideoEmit = new AsyncSubject<any>();
  constructor() { }

  print(count, containerId) {
    let element = document.createElement('li');
    element.innerText = count;
    document.getElementById(containerId).appendChild(element);
  }
}
