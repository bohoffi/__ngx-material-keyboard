import { Directive, Input, OnDestroy, ElementRef, Optional, Self, HostListener } from '@angular/core';
import { NgControl, FormControl } from '@angular/forms';

import { KeyboardPosition } from '../types/keyboard-position';
import { NgxMatKeyboardService } from '../services/ngx-mat-keyboard.service';
import { NgxMaterialKeyboardRef } from '../components/ngx-material-keyboard-ref';

@Directive({
  selector: 'input[ngxMatKeyboard], textarea[ngxMatKeyboard]'
})
export class NgxMaterialKeyboardDirective implements OnDestroy {

  @Input()
  layoutName: string;

  @Input()
  keyboardPosition: KeyboardPosition = 'relativeBottom';

  private keyboardRef: NgxMaterialKeyboardRef | null;

  constructor(
    private elementRef: ElementRef,
    private keyboardService: NgxMatKeyboardService,
    @Optional() @Self() private ngControl: NgControl
  ) { }

  @HostListener('focus')
  private displayKeyboard(): void {
    this.keyboardRef = this.keyboardService.open({
      layoutName: this.layoutName,
      disableClose: true,
      input: this.elementRef,
      control: this.ngControl ? this.ngControl.control as FormControl : null,
      position: this.keyboardPosition
    });
  }

  @HostListener('blur')
  private closeKeyboard(): void {
    if (this.keyboardRef) {
      this.keyboardRef.close();
    }
  }

  public ngOnDestroy(): void {

  }
}
