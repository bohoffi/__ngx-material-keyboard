import { Injectable, Injector, Inject } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { PortalInjector, ComponentPortal } from '@angular/cdk/portal';

import { NgxMaterialKeyboardRef } from '../components/ngx-material-keyboard-ref';
import {
  NgxMaterialKeyboardContainerComponent
} from '../components/ngx-material-keyboard-container/ngx-material-keyboard-container.component';
import { KeyboardPositionPipe } from '../pipes/keyboard-position.pipe';
import { KEYBOARD_CONFIG } from '../tokens/keyboard-config-token';
import { KeyboardConfig } from '../models/keyboard-config';
import { KeyboardScrollStrategyPipe } from '../pipes/keyboard-scroll-strategy.pipe';

@Injectable({
  providedIn: 'root'
})
export class NgxMatKeyboardService {

  private keyboardRef: NgxMaterialKeyboardRef;

  private positionPipe: KeyboardPositionPipe = new KeyboardPositionPipe();
  private scrollStrategyPipe: KeyboardScrollStrategyPipe = new KeyboardScrollStrategyPipe();

  public get isOpen(): boolean {
    return !!this.keyboardRef;
  }

  constructor(
    private overlay: Overlay,
    private injector: Injector,
    @Inject(KEYBOARD_CONFIG) private defaultConfig: KeyboardConfig
  ) { }

  public open(config?: KeyboardConfig): NgxMaterialKeyboardRef {

    if (this.isOpen) {
      this.keyboardRef.close();
    }

    config = { ...this.defaultConfig, ...config };

    const overlayRef = this.overlay.create({
      positionStrategy: this.positionPipe.transform(this.overlay.position(), config.position, config.input),
      scrollStrategy: this.scrollStrategyPipe.transform(this.overlay.scrollStrategies, config.scrollStrategy)
    });

    this.keyboardRef = new NgxMaterialKeyboardRef(overlayRef, config);

    const injector = this.createInjector(this.keyboardRef, this.injector);
    overlayRef.attach(new ComponentPortal(NgxMaterialKeyboardContainerComponent, null, injector));

    return this.keyboardRef;
  }

  private createInjector(keyboardRef: NgxMaterialKeyboardRef, injector: Injector) {
    const tokens = new WeakMap([[NgxMaterialKeyboardRef, keyboardRef]]);
    return new PortalInjector(injector, tokens);
  }
}
