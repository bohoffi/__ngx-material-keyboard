import { Component, Type } from '@angular/core';

import { NgxMaterialKeyboardComponent } from '../ngx-material-keyboard/ngx-material-keyboard.component';

@Component({
  selector: 'ngx-mat-keyboard-container',
  templateUrl: './ngx-material-keyboard-container.component.html',
  styleUrls: ['./ngx-material-keyboard-container.component.scss']
})
export class NgxMaterialKeyboardContainerComponent {

  content: Type<NgxMaterialKeyboardComponent>;

  constructor() {
    this.content = NgxMaterialKeyboardComponent;
  }
}
