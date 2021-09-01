import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'poc';
  label = 'test button common library'

  confirmButtonConfig = {
    styles: {
      position: 'relative',
      width: '100px',
      height: '30px',
      backgroundColor: '#B2D234',
      color: '#fff',
      fontFamily: 'Nunito',
      fontSize: '20px',
      fontWeight: '700',
      fontStyle: 'normal',
      borderRadius: '6px',
    },
    text: 'Confirm'
  };

  cancelButtonConfig = {
    styles: {
      position: 'relative',
      width: '100px',
      height: '30px',
      backgroundColor: '#DDDDDD',
      color: '#979797',
      fontFamily: 'Nunito',
      fontSize: '20px',
      fontWeight: '700',
      fontStyle: 'normal',
      borderRadius: '6px',
    },
    text: 'Cancel'
  };

  discardButtonConfig = {
    styles: {
      position: 'relative',
      width: '100px',
      height: '30px',
      backgroundColor: '#EA4141',
      color: '#FFFFFF',
      fontFamily: 'Nunito',
      fontSize: '20px',
      fontWeight: '700',
      fontStyle: 'normal',
      borderRadius: '6px',
    },
    text: 'Discard'
  };

  onClickButton(event: any) {
    console.log('onClickButton', event);
  }
  
}
