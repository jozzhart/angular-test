import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.less']
})
export class GraphComponent implements OnChanges {
  @Input() public theData: [Array<any>];

  private view: any[] = [600, 400];
  private results = [];
  private showXAxis = true;
  private showYAxis = true;
  private gradient = false;
  private showLegend = false;
  private showXAxisLabel = true;
  private xAxisLabel = 'Country';
  private showYAxisLabel = true;
  private yAxisLabel = 'Population';
  private colorScheme = {
    domain: ['#ffb370', '#fc9e4a', '#ff8f2a', '#fc8113', '#ff7800']
  };

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if(!changes.theData && changes.theData.currentValue) return;
    this.results = changes.theData.currentValue;
  }
}
