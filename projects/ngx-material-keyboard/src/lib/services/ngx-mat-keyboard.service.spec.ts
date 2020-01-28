import { TestBed } from '@angular/core/testing';

import { NgxMatKeyboardService } from './ngx-mat-keyboard.service';

describe('NgxMatKeyboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxMatKeyboardService = TestBed.get(NgxMatKeyboardService);
    expect(service).toBeTruthy();
  });
});
