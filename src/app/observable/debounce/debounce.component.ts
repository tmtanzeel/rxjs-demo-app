import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { pipe } from '@angular/core/src/render3/pipe';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.css']
})
export class DebounceComponent implements AfterViewInit {

  @ViewChild('myInput1') myInput1: ElementRef;
  @ViewChild('myInput2') myInput2: ElementRef;

  reqData;
  reqData2;

  searchTerm: Observable<any>;
  searchTerm2: Observable<any>;

  constructor(
    private _loadingBarService: LoadingBarService
  ) { }

  ngAfterViewInit() {
    this.searchTerm = fromEvent(this.myInput1.nativeElement, 'keyup');
    this.searchTerm
      .pipe(
        map(event => event.target.value),
        debounceTime(1000)
      )
      .subscribe((res) => {
        this.reqData = res;
        this._loadingBarService.start()
        console.log(res);
        setTimeout(() => {
          this.reqData = null;
          this._loadingBarService.stop()
        }, 2000)
      })

    // this.searchTerm2 = fromEvent(this.myInput2.nativeElement, 'keyup');
    // this.searchTerm2
    //   .pipe(
    //     map(event => event.target.value),
    //     debounceTime(1000),
    //     distinctUntilChanged()
    //   )
    //   .subscribe((res) => {
    //     this.reqData2 = res;
    //     this._loadingBarService.start()
    //     console.log(res);
    //     setTimeout(() => {
    //       this.reqData2 = null;
    //       this._loadingBarService.stop()
    //     }, 2000)
    //   })

    const searchTerm2 = fromEvent<any>(this.myInput2.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      debounceTime(500),
      distinctUntilChanged()
    )

    searchTerm2.subscribe(res => {
      console.log(res);
      this.reqData2 = res;

      setTimeout(() => {
        this.reqData2 = null;
      }, 1000);
    })
  }
}
