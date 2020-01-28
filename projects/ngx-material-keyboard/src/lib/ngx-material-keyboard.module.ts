import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { NgxMaterialKeyboardComponent } from './components/ngx-material-keyboard/ngx-material-keyboard.component';
import {
  NgxMaterialKeyboardContainerComponent
} from './components/ngx-material-keyboard-container/ngx-material-keyboard-container.component';
import { NgxMaterialKeyboardKeyComponent } from './components/ngx-material-keyboard-key/ngx-material-keyboard-key.component';
import { KeyboardPositionPipe } from './pipes/keyboard-position.pipe';
import { KEYBOARD_CONFIG } from './tokens/keyboard-config-token';
import { KeyboardScrollStrategyPipe } from './pipes/keyboard-scroll-strategy.pipe';
import { KEYBOARD_LAYOUTS } from './tokens/keyboard-layouts';
import { NgxMaterialKeyboardDirective } from './directives/ngx-material-keyboard.directive';

@NgModule({
  declarations: [
    NgxMaterialKeyboardComponent,
    NgxMaterialKeyboardContainerComponent,
    NgxMaterialKeyboardKeyComponent,
    KeyboardPositionPipe,
    KeyboardScrollStrategyPipe,
    NgxMaterialKeyboardDirective
  ],
  imports: [
    CommonModule,

    OverlayModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    NgxMaterialKeyboardComponent,
    NgxMaterialKeyboardDirective
  ],
  entryComponents: [
    NgxMaterialKeyboardContainerComponent,
    NgxMaterialKeyboardComponent
  ],
  providers: [
    {
      provide: KEYBOARD_CONFIG,
      useValue: {
        position: 'globalBottom'
      }
    },
    {
      provide: KEYBOARD_LAYOUTS,
      useValue: []
    }
  ]
})
export class NgxMaterialKeyboardModule { }
