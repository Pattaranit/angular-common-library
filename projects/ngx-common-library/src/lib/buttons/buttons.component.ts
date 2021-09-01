import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  @Input() buttonConfig: any | undefined;
  @Output() functioncall = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  onClickCommonButton(event: any) {    
    this.functioncall.emit(event);
  }

}
