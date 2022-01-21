import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, retry, retryWhen, scan } from 'rxjs/operators';
@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css']
})
export class RetryComponent implements OnInit {

  person: any;
  isFetching: boolean = false;
  status: string = "No data requested";
  errorOccured: boolean = false;
  errorMessage: string;

  constructor(
    private _http: HttpClient
  ) { }

  ngOnInit() {
  }

  fetchDetails() {
    this.isFetching = true;
    this.errorOccured = false;
    this._http.get('https://jsonplaceholder.typicode.com/todos/1')
      .pipe(
        //retry(5)
        retryWhen((err) =>
          err.pipe(
            delay(3000),
            scan((retryCount) => {
              if (retryCount >= 5) {
                throw err;
              }
              else {
                retryCount = retryCount + 1;
                this.status = "Retrying Attempt #" + retryCount;
                return retryCount;
              }
            }, 0))
        )
      )
      .subscribe((res) => {
        this.person = res;
        this.isFetching = false;
        this.status = "Data fetched!"
        //console.log(this.person.id);
      },
        (err) => {
          this.isFetching = false;
          this.errorOccured = true;
          this.status = "Error fetching data";
          this.errorMessage = JSON.stringify(err.message);
          console.log(err);
        })
  }

}
