import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css']
})
export class RetryComponent implements OnInit {

  constructor(
    private _http: HttpClient
  ) { }

  ngOnInit() {
  }

  fetchDetails() {
    this._http.get('https://global-1bb0f.firebaseio.com/user.json')
  }

}
