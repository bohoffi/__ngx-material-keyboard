import { InjectionToken } from '@angular/core';

import { KeyboardConfig } from '../models/keyboard-config';

export const KEYBOARD_CONFIG: InjectionToken<KeyboardConfig> = new InjectionToken<KeyboardConfig>('KEYBOARD_CONFIG');
