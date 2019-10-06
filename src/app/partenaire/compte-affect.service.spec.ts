import { TestBed } from '@angular/core/testing';

import { CompteAffectService } from './compte-affect.service';

describe('CompteAffectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompteAffectService = TestBed.get(CompteAffectService);
    expect(service).toBeTruthy();
  });
});
