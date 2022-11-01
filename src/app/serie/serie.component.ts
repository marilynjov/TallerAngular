import { Component, OnInit } from '@angular/core';
import { Serie } from './Serie'
import { SerieService } from './serie.service';


@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})

export class SerieComponent implements OnInit {
  constructor(private serieService:SerieService) { }

  series: Array<Serie> = [];
  promedio: number=6;
  av: number=0;
  getSeries(){
    this.serieService.getSeries().subscribe(series=>{
      this.series=series;
    });
  }



  average(promedio:number){
    let count:number = 0;
      let cant:number = 0;

      for(let serie of this.series)
      {
          count+=serie.seasons;
          console.log(`Sum:${count}`);
          console.log(serie.seasons);

          cant+=1;
      }

      promedio = count/cant;
      console.log(promedio);
      return promedio;
    }

    ngOnInit() {
      this.getSeries();
    }

}
