import { Component, OnInit, Inject, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { NgxMaterialKeyboardRef } from '../ngx-material-keyboard-ref';
import { KEYBOARD_LAYOUTS } from '../../tokens/keyboard-layouts';
import { KeyboardLayout } from '../../models/keyboard-layout';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ngx-mat-keyboard',
  templateUrl: './ngx-material-keyboard.component.html',
  styleUrls: ['./ngx-material-keyboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxMaterialKeyboardComponent implements OnInit {

  public get displayLayoutName(): boolean {
    return this.keyboardRef.config.displayLayoutName;
  }

  public get layout(): KeyboardLayout {
    return this.keyboardLayouts
      .find((layout: KeyboardLayout) => layout.name === this.keyboardRef.config.layoutName)
      || {
      name: 'EMPTY',
      keys: []
    };
  }

  public get input(): ElementRef {
    return this.keyboardRef.config.input;
  }

  public get control(): FormControl {
    return this.keyboardRef.config.control;
  }

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
