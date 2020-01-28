import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KeyboardDemoComponent } from './components/keyboard-demo/keyboard-demo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaterialKeyboardModule, KEYBOARD_LAYOUTS, KEYBOARD_CONFIG } from '@ngx-material-keyboard';

@NgModule({
  declarations: [
    AppComponent,
    KeyboardDemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    NgxMaterialKeyboardModule
  ],
  providers: [
    {
      provide: KEYBOARD_CONFIG,
      useValue: {
        layoutName: 'TEST'
      }
    },
    {
      provide: KEYBOARD_LAYOUTS,
      useValue: [
        {
          name: 'TEST',
          keys: [
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
            'G',
            'H',
            'I',
            'J',
            'K',
            'L',
            'M',
            'N',
            'O',
            'P',
          ]
        }
      ]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
