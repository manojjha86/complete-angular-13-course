import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  sayHello(inputEl: HTMLInputElement){
    //alert('Hello '+inputEl.value);
    console.log(inputEl)
  }
}
