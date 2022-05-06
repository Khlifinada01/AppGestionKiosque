import { TestBed } from '@angular/core/testing';

// @ts-ignore
import {InspecteurServiceService} from "./inspecteur.service.service";
describe('InspecteurServiceService', () => {
  let service: InspecteurServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InspecteurServiceService);
  });

  it('should be created', () => {
    // @ts-ignore
    expect(service).toBeTruthy();
  });
});

