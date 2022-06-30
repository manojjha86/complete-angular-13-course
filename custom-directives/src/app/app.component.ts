import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CustomDirectives';

  active: boolean = false;

  display: boolean = false;

  occupation: string = 'doctor';

  DisplayNotice(){
    this.display = true;
  }
}
