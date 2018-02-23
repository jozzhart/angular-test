import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { GraphComponent } from './graph/graph.component';
import { DataService } from './data.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let dataService: DataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TableComponent,
        GraphComponent
      ],
      imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        NgxChartsModule
      ],
      providers: [
        DataService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    // component.theData = [{ name: 'test', value: '5000' }];

    dataService = TestBed.get(DataService);
    spyOn(dataService, 'getData').and.returnValue(Observable.of([{ name: 'test', value: '5000' }]));

    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should table', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('table')).toBeTruthy();
  }));
});
