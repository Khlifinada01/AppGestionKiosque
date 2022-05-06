// @ts-ignore
import { TestBed } from '@angular/core/testing';
import {ConcurrentService} from "./concurrent.service";

describe('StationService', () => {
  let  service: ConcurrentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConcurrentService);
  });

  it('should be created', () => {
    // @ts-ignore
    expect(service).toBeTruthy();
  });
});
