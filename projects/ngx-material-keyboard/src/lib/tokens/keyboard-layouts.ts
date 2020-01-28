import { InjectionToken } from '@angular/core';

import { KeyboardLayout } from '../models/keyboard-layout';

export const KEYBOARD_LAYOUTS: InjectionToken<KeyboardLayout[]> = new InjectionToken<KeyboardLayout[]>('KEYBOARD_LAYOUTS');
