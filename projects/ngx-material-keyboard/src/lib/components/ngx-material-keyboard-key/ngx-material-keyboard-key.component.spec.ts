import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMaterialKeyboardKeyComponent } from './ngx-material-keyboard-key.component';

describe('NgxMaterialKeyboardKeyComponent', () => {
  let component: NgxMaterialKeyboardKeyComponent;
  let fixture: ComponentFixture<NgxMaterialKeyboardKeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMaterialKeyboardKeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMaterialKeyboardKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
