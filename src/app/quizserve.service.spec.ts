import { TestBed } from '@angular/core/testing';

import { QuizserveService } from './quizserve.service';

describe('QuizserveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuizserveService = TestBed.get(QuizserveService);
    expect(service).toBeTruthy();
  });
});
