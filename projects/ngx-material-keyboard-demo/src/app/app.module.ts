import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KeyboardDemoComponent } from './components/keyboard-demo/keyboard-demo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaterialKeyboardModule } from '@ngx-material-keyboard';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
