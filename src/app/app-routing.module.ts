import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {SeriesEditComponent} from "./components/series-edit/series-edit.component";
import {SeriesListComponent} from "./components/series-list/series-list.component";
import {SeriesAddComponent} from "./components/series-add/series-add.component";
import {SeriesViewComponent} from "./components/series-view/series-view.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'series',
    pathMatch: "full"
  },
  {
    path: 'series',
    component: SeriesListComponent
  },
  {
    path: 'series/edit/:id',
    component: SeriesEditComponent
  },
  {
    path: 'series/add',
    component: SeriesAddComponent
  },
  {
    path: 'series/view/:id',
    component: SeriesViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
