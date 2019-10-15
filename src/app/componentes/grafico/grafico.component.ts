import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.scss']
})
export class GraficoComponent implements OnInit {
  dataSource: Object;
  chartConfig: Object;
  constructor() { 
    this.chartConfig = {
      width: '400',
      height: '400',
      type: 'column2d',
      dataFormat: 'json',
  }; 
  
   this.dataSource = {
            "chart": {
              "caption": "Resultados",
              "subCaption": "Deteccion de neumonia con Deep Learning",
              "xAxisName": "Estado",
              "yAxisName": "Probabilidad",
              "numberSuffix": "%",
              "theme": "fusion",
            },
            "data": [{
              "label": "NORMAL",
              "value": "86"
            }, {
              "label": "PNEUMONIA",
              "value": "14"
            }]
          };
  }

  ngOnInit() {
  }

}
