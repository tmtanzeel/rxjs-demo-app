import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './includes/header/header.component';
import { PromiseComponent } from './promise/promise.component';
import { ObservableComponent } from './observable/observable.component';
import { ListComponent } from './observable/list/list.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { CustomComponent } from './observable/custom/custom.component';
import { MapComponent } from './observable/map/map.component';
import { PluckComponent } from './observable/pluck/pluck.component';
import { FilterComponent } from './observable/filter/filter.component';
import { TapComponent } from './observable/tap/tap.component';
import { TakeComponent } from './observable/take/take.component';
import { RetryComponent } from './observable/retry/retry.component';
import { HttpClientModule } from '@angular/common/http';
import { DebounceComponent } from './observable/debounce/debounce.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromiseComponent,
    ObservableComponent,
    ListComponent,
    FromEventComponent,
    IntervalComponent,
    OfFromComponent,
    ToArrayComponent,
    CustomComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    RetryComponent,
    DebounceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
