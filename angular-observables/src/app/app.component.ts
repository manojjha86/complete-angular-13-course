import { Component, OnInit } from '@angular/core';
import { from, Observable, of, interval } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent implements OnInit{
  title = 'AngularObservables';

  constructor(private dataService: DataService){

  }

  //USING OBSERVABLE CONSTRUCTOR
  // myObservable = new Observable((observer) =>{
  //   console.log('Observable starts')
  //   setTimeout(()=>{observer.next("1")}, 1000)
  //   setTimeout(()=>{observer.next("2")}, 2000)
  //   setTimeout(()=>{observer.next("3")}, 3000)
  //   //setTimeout(()=>{observer.error(new Error('Something went wrong! Please try again later'))}, 3000)
  //   setTimeout(()=>{observer.next("4")}, 4000)
  //   setTimeout(()=>{observer.next("5")}, 5000)
  //   //setTimeout(()=>{observer.complete()}, 3000)
  //   // observer.next("1")
  //   // observer.next("2")
  //   // observer.next("3")
  //   // observer.next("4")
  //   // observer.next("5")
  // });

  //USING CREATE METHOD
  // myObservable = Observable.create((observer) => {
  //   setTimeout(()=>{observer.next("A")}, 1000)
  //   setTimeout(()=>{observer.next("B")}, 2000)
  //   setTimeout(()=>{observer.next("C")}, 3000)
  //   setTimeout(()=>{observer.next("D")}, 4000)
  //   //setTimeout(()=>{observer.error(new Error('Something went wrong! Please try again later'))}, 4000)
  //   setTimeout(()=>{observer.next("E")}, 5000)
  //   setTimeout(()=>{observer.complete()}, 7000)
  // });

  array1 = [1, 2, 6, 7, 8];
  array2 = ['A', 'B', 'C'];

  //myObservable = of(this.array1, this.array2, 20, 79, 'Hello');

  // myObservable = from(this.array1).pipe(map((val) => {
  //   return val * 5;
  // }), filter((val) => {
  //     return val >= 30
  // }));//1, 2, 6, 7, 8 => 5, 10, 30, 35, 40

  // transformedObs = this.myObservable.pipe(map((val) => {
  //   return val * 5;
  // }), filter((val) => {
  //     return val >= 30
  // }))

  // filteredObs = this.transformedObs.pipe(filter((val) => {
  //     return val >= 30
  // }))

  counterObservable = interval(1000);
  counterSub;

  ngOnInit(){
    // this.myObservable.subscribe((val) => {
    //   console.log(val);
    // }, (error) => {
    //   alert(error.message);
    // }, () => {
    //   alert('Observable has complete emitting all values.')
    // });
    
  }
  unsubscribe(){
    this.counterSub.unsubscribe();
  }
  subscribe(){
    this.counterSub = this.counterObservable.subscribe((val) => {
      console.log(val);
    })
  }
}
