import { Subject, Observable, Subscription } from 'rxjs';
import { OverlayRef } from '@angular/cdk/overlay';
import { ESCAPE } from '@angular/cdk/keycodes';

import { KeyboardConfig } from '../models/keyboard-config';

export class NgxMaterialKeyboardRef {

    private afterClosed: Subject<any> = new Subject<any>();
    private subscriptions: Subscription = new Subscription();

    public get afterClosed$(): Observable<any> {
        return this.afterClosed.asObservable();
    }

    constructor(private overlay: OverlayRef, public readonly config: KeyboardConfig) {
        if (this.config.closeOnEscape) {
            this.subscriptions.add(
                this.overlay.keydownEvents()
                    .subscribe((event: KeyboardEvent) => {
                        // tslint:disable-next-line: deprecation
                        if (event.keyCode === ESCAPE) {
                            this.close();
                        }
                    })
            );
        }
    }

    public close(): void {
        this.internalClose();
    }

    private internalClose(): void {
        this.overlay.dispose();
        this.afterClosed.next();
        this.afterClosed.complete();

        this.subscriptions.unsubscribe();
    }
}
