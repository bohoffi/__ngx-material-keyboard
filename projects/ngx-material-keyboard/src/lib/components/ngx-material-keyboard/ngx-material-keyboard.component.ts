import { Component, OnInit, Input, Inject, ChangeDetectionStrategy } from '@angular/core';
import { NgxMaterialKeyboardRef } from '../ngx-material-keyboard-ref';
import { KEYBOARD_LAYOUTS } from '../../tokens/keyboard-layouts';
import { KeyboardLayout } from '../../models/keyboard-layout';

@Component({
  selector: 'ngx-mat-keyboard',
  templateUrl: './ngx-material-keyboard.component.html',
  styleUrls: ['./ngx-material-keyboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxMaterialKeyboardComponent implements OnInit {

  public get disableClose(): boolean {
    return this.keyboardRef.config.disableClose;
  }

  constructor(
    private keyboardRef: NgxMaterialKeyboardRef,
    @Inject(KEYBOARD_LAYOUTS) private keyboardLayouts: KeyboardLayout[]
  ) { }

  ngOnInit() {
  }

  public dismiss(): void {
    this.keyboardRef.close();
  }
}
