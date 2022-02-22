import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { concatMap, exhaustMap, tap } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.css']
})
export class ExhaustMapComponent implements OnInit {

  num: number = 0;
  url = "https://global-1bb0f.firebaseio.com/exhaustMap.json";

  @ViewChild('btn') btn: ElementRef;

  saveRequest;

  fetching: boolean = false;

  constructor(
    private _http: HttpClient,
    private _dus: DesignUtilityService
  ) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    fromEvent(this.btn.nativeElement, 'click')
      .pipe(
        exhaustMap(() => this.onSave(this.num++)))
      .subscribe(res => {
        console.log(res);
      })
  }



  // ngAfterViewInit() {
  //   fromEvent(this.btn.nativeElement, 'click')
  //     .pipe(
  //       tap(() => this.fetching = true),
  //       // concatMap(() => this.onSave(this.num++)))
  //       exhaustMap(() => this.onSave(this.num++)))
  //     .subscribe(res => {
  //       //console.log(res);
  //       this.onFetch();
  //       this.fetching = false;
  //     })
  // }

  // onFetch() {
  //   this._http.get<any>(this.url).subscribe(res => {
  //     console.log(res.data);
  //     this.saveRequest = res.data;
  //   })
  // }

  onSave(changes) {
    return this._http.put(this.url, { data: changes })
  }

  // btnClick() {
  //   //this.num++;
  //   this.onSave(this.num++).subscribe(res => {
  //     console.log(res);
  //   });
  // }

}


// (click)="btnClick()"
