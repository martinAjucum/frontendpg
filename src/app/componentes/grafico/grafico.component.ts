import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.scss']
})
export class GraficoComponent implements OnInit {
  dataSource: Object;
  chartConfig: Object;
  @Input() data: Object;
  constructor() { 
    this.chartConfig = {
      width: '400',
      height: '400',
      type: 'column2d',
      dataFormat: 'json',
  }; 
  }

  ngOnInit() {
  }

}
