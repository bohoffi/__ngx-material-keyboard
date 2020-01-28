import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KeyboardDemoComponent } from './components/keyboard-demo/keyboard-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    KeyboardDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
