import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';

import { KeyboardKeyPress } from '../../models/keyboard-key-press';

@Component({
  selector: 'ngx-mat-keyboard-key',
  templateUrl: './ngx-material-keyboard-key.component.html',
  styleUrls: ['./ngx-material-keyboard-key.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxMaterialKeyboardKeyComponent {

  @Input()
  public key: string;

  @Input()
  public input?: ElementRef;

  @Input()
  public control?: FormControl;

  @Output()
  public keyPress: EventEmitter<KeyboardKeyPress> = new EventEmitter<KeyboardKeyPress>();

  constructor() { }

  public click(): void {
    this.keyPress.emit({
      key: this.key,
      input: this.input,
      control: this.control,
      source: this
    });
  }
}
