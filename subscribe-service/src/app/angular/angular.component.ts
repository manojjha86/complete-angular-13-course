import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../Services/enroll.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css'],
  //providers: [EnrollService]
})
export class AngularComponent{
  title="Angular";

  constructor(private enrollService: EnrollService){

  }

  OnEnroll(){
    this.enrollService.OnEnrollClicked(this.title);
  }
}
