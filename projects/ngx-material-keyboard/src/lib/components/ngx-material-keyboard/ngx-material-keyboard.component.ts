import { Component, OnInit, Input } from '@angular/core';
import { NgxMaterialKeyboardRef } from '../ngx-material-keyboard-ref';

@Component({
  selector: 'ngx-mat-keyboard',
  templateUrl: './ngx-material-keyboard.component.html',
  styleUrls: ['./ngx-material-keyboard.component.scss']
})
export class NgxMaterialKeyboardComponent implements OnInit {

  public get disableClose(): boolean {
    return this.keyboardRef.config.disableClose;
  }

  constructor(private keyboardRef: NgxMaterialKeyboardRef) { }

  ngOnInit() {
  }

  public dismiss(): void {
    this.keyboardRef.close();
  }
}
