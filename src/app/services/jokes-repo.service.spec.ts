import { TestBed } from '@angular/core/testing';

import { JokesRepoService } from './jokes-repo.service';

describe('JokesRepoService', () => {
  let service: JokesRepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JokesRepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
