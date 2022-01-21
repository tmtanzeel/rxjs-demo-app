import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit {

  @ViewChild('addBtn') addBtn: ElementRef;

  constructor(private _designUtilityService: DesignUtilityService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let count = 0;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe((res) => {
      count++;
      this._designUtilityService.print(count, "elContainer");
      this._designUtilityService.print(count, "elContainer2");
    });
  }
}
