import { TestBed } from '@angular/core/testing';

import { NgxMaterialKeyboardService } from './ngx-material-keyboard.service';

describe('NgxMaterialKeyboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxMaterialKeyboardService = TestBed.get(NgxMaterialKeyboardService);
    expect(service).toBeTruthy();
  });
});
