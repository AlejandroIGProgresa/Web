import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SeriesListComponent } from './components/series-list/series-list.component';
import { SeriesEditComponent } from './components/series-edit/series-edit.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SeriesAddComponent } from './components/series-add/series-add.component';
import { SeriesViewComponent } from './components/series-view/series-view.component';

@NgModule({
  declarations: [
    AppComponent,
    SeriesListComponent,
    SeriesEditComponent,
    NavbarComponent,
    SeriesAddComponent,
    SeriesViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
