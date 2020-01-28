import { ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';

import { NgxMaterialKeyboardKeyComponent } from '../components/ngx-material-keyboard-key/ngx-material-keyboard-key.component';

export interface KeyboardKeyPress {
    key: string;
    input?: ElementRef;
    control?: FormControl;
    //   inputMode: KeyboardInputMode;
    source: NgxMaterialKeyboardKeyComponent;
}
