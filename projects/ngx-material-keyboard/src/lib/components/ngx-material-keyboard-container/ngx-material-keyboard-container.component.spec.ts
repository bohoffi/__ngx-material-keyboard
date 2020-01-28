import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMaterialKeyboardContainerComponent } from './ngx-material-keyboard-container.component';

describe('NgxMaterialKeyboardContainerComponent', () => {
  let component: NgxMaterialKeyboardContainerComponent;
  let fixture: ComponentFixture<NgxMaterialKeyboardContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMaterialKeyboardContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMaterialKeyboardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
