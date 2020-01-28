import { Component, Type, HostListener, HostBinding, ChangeDetectionStrategy } from '@angular/core';

import { NgxMaterialKeyboardComponent } from '../ngx-material-keyboard/ngx-material-keyboard.component';

@Component({
  selector: 'ngx-mat-keyboard-container',
  templateUrl: './ngx-material-keyboard-container.component.html',
  styleUrls: ['./ngx-material-keyboard-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxMaterialKeyboardContainerComponent {

  @HostBinding('attr.role')
  attrRole = 'alert';

  public readonly content: Type<NgxMaterialKeyboardComponent>;

  constructor() {
    this.content = NgxMaterialKeyboardComponent;
  }

  @HostListener('mousedown', ['$event'])
  onMousedown(event: MouseEvent) {
    event.preventDefault();
  }
}
