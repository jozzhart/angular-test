import { TestBed, inject } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DataService } from './data.service';

describe('DataService', () => {

  let dataService;
  let httpMock;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });

    dataService = TestBed.get(DataService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));

  it('should get the data', (done: DoneFn) => {

    dataService.getData()
      .subscribe(value => {
        expect(value).toEqual([{
          name: 'London',
          value: 10000000
        }]);
        done();
      });

    const req = httpMock.expectOne('http://localhost:3000');
    expect(req.request.method).toBe('GET');
    req.flush([{
      name: 'London',
      value: 10000000
    }]);

  });

});
