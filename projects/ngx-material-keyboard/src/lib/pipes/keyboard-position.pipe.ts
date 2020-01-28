import { Pipe, PipeTransform, ElementRef } from '@angular/core';
import { ConnectedPosition, OverlayPositionBuilder } from '@angular/cdk/overlay';
import { KeyboardPosition } from '../types/keyboard-position';

@Pipe({
  name: 'keyboardPosition'
})
export class KeyboardPositionPipe implements PipeTransform {

  private relativeBottom: ConnectedPosition = {
    originX: 'center',
    originY: 'bottom',
    overlayX: 'center',
    overlayY: 'top',
  };
  private relativeTop: ConnectedPosition = {
    originX: 'center',
    originY: 'top',
    overlayX: 'center',
    overlayY: 'bottom',
  };

  transform(overlayPositionBuilder: OverlayPositionBuilder, position: KeyboardPosition, connectedInput?: ElementRef): any {

    if (position === 'globalBottom' || !connectedInput) {
      return overlayPositionBuilder
        .global()
        .centerHorizontally()
        .bottom('0');
    }

    return position === 'relativeBottom'
      ? overlayPositionBuilder
        .flexibleConnectedTo(connectedInput)
        .withPositions([this.relativeBottom, this.relativeTop])
        .withDefaultOffsetY(32)
      : overlayPositionBuilder
        .flexibleConnectedTo(connectedInput)
        .withPositions([this.relativeTop, this.relativeBottom])
        .withDefaultOffsetY(-32);
  }
}
