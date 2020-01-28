import { Pipe, PipeTransform } from '@angular/core';
import { ScrollStrategyOptions, ScrollStrategy } from '@angular/cdk/overlay';

import { KeyboardScrollStrategy } from '../types/scroll-strategy';

@Pipe({
  name: 'keyboardScrollStrategy'
})
export class KeyboardScrollStrategyPipe implements PipeTransform {

  transform(scrollStrategyOptions: ScrollStrategyOptions, scrollStrategy: KeyboardScrollStrategy): ScrollStrategy | undefined {
    switch (scrollStrategy) {
      case 'noop':
        return scrollStrategyOptions.noop();
      case 'close':
        return scrollStrategyOptions.close();
      case 'block':
        return scrollStrategyOptions.block();
      case 'reposition':
        return scrollStrategyOptions.reposition();
      default:
        return undefined;
    }
  }
}
