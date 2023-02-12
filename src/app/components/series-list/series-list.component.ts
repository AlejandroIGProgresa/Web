import { Component, OnInit } from '@angular/core';
import {Serie} from "../../../../../Api/src/series/interfaces/serie/serie.interface";
import {SerieService} from "../../services/serie.service";

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {
  itemList: Serie[] = [];
  items: Serie[] = [];

  toast = {
    header: '',
    body: '',
    duration: 2000
  }
  toastShow = false;

  constructor(private serieService: SerieService) { }

  ngOnInit(): void {
    this.loadSeries();
  }

  deleteSerie(serie: Serie) {
    if (serie._id) this.serieService.deleteSerie(serie._id).subscribe(
      (data: any) => {
        this.toast.body = data.message;
        this.toastShow = true;
        setTimeout(() => {this.toastShow = false}, 2000);
        this.loadSeries();
      }
    )
  }

  private loadSeries() {
    this.serieService.getSeries().subscribe(
      (datos: Serie[])=> {
        this.itemList = datos;
        this.items = datos;
      }
    )
  }

   getImages(serie: Serie) {
    var imageObject: Array<Object> = []
    for (var i = 0; i < serie.imagenes.length; i++){
      imageObject[i] = {
        image: serie.imagenes[i],
        thumbImage: serie.imagenes[i],
        alt: serie.nombre,
        title: serie.nombre
      }
    }
    return imageObject
  }
}
