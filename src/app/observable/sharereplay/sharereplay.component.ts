import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sharereplay',
  templateUrl: './sharereplay.component.html',
  styleUrls: ['./sharereplay.component.css']
})
export class SharereplayComponent implements OnInit {

  url = 'https://test-products-b05fe.firebaseio.com/products.json';

  allProducts: Observable<any>;
  mobiles: Observable<any>;
  laptops: Observable<any>;

  constructor(
    private _http: HttpClient
  ) { }

  ngOnInit() {
    this.allProducts = this._http.get(this.url);
    this.mobiles = this.allProducts
      .pipe(
        map(
          res => res.filter(data => data.type == 'mobile')
        )
      );
    this.laptops = this.allProducts
      .pipe(
        map(
          res => res.filter(data => data.type == 'pc')
        )
      );
  }

}
