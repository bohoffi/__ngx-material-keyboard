import { Component, OnInit } from '@angular/core';

import { NgxMatKeyboardService } from '@ngx-material-keyboard';

@Component({
  selector: 'app-keyboard-demo',
  templateUrl: './keyboard-demo.component.html',
  styleUrls: ['./keyboard-demo.component.scss']
})
export class KeyboardDemoComponent implements OnInit {

  constructor(private keyboardService: NgxMatKeyboardService) { }

  ngOnInit() {
  }

  openKeyboard(): void {
    this.keyboardService.open();
  }
}
