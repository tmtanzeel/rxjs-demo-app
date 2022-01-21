import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }

  print(count, containerId) {
    let element = document.createElement('li');
    element.innerText = count;
    document.getElementById(containerId).appendChild(element);
  }
}
