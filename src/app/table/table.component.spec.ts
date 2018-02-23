import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { TableComponent } from './table.component';
import { DataService } from '../data.service';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;

    component.theData = [{ name: 'test', value: '5000' }];

    fixture.detectChanges();
  });

  it('should create table', () => {
    expect(component).toBeTruthy();

    const trs = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(trs.length).toBe(1);
    const td0 = trs[0].cells[0].textContent;
    const td1 = trs[0].cells[1].textContent;
    expect(td0).toContain('test');
    expect(td1).toContain('5000');
  });
});
