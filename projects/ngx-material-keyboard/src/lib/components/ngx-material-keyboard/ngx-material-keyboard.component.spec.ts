import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMaterialKeyboardComponent } from './ngx-material-keyboard.component';

describe('NgxMaterialKeyboardComponent', () => {
  let component: NgxMaterialKeyboardComponent;
  let fixture: ComponentFixture<NgxMaterialKeyboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMaterialKeyboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMaterialKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
