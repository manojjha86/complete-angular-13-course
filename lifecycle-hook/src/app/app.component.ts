import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LifecycleHook';

  inputText: string = '';
  destroy: boolean = true;

  OnSubmit(inputEl: HTMLInputElement){
    this.inputText = inputEl.value;
  }

  DestroyComponent(){
    this.destroy = false;
  }
}
