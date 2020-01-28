import { KeyboardPosition } from '../types/keyboard-position';
import { ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { KeyboardScrollStrategy } from '../types/scroll-strategy';

export interface KeyboardConfig {
    input?: ElementRef;
    control?: FormControl;
    // TODO inputMode
    layoutName?: string;
    displayLayoutName?: boolean;
    disableClose?: boolean;
    position?: KeyboardPosition;
    scrollStrategy?: KeyboardScrollStrategy | undefined;
    closeOnEscape?: boolean;
}
