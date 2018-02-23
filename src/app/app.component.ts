import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  public theData = [];

  constructor(public dataService: DataService) { }

  ngOnInit() {

    this.dataService.getData()
      .subscribe(res => {
        this.theData = res;
      });
  }
}
