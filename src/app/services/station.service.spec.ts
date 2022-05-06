import { TestBed } from '@angular/core/testing';
// @ts-ignore
import { StationService} from './station.service'

describe('StationService', () => {
  let service: StationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
