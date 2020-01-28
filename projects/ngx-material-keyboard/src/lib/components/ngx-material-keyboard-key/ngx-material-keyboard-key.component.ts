import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-mat-ngx-material-keyboard-key',
  templateUrl: './ngx-material-keyboard-key.component.html',
  styleUrls: ['./ngx-material-keyboard-key.component.scss']
})
export class NgxMaterialKeyboardKeyComponent {

  @Input()
  public key: string;

  constructor() { }

  public click(): void {}
}
