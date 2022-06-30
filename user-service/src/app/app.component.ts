import { Component, OnInit } from '@angular/core';
import { LoggerService } from './Services/logger.service';
import { UserService } from './Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit{
  title = 'UserService';

  constructor(private userService: UserService){

  }

  users: {name: string, status: string}[] = [];

  ngOnInit(){
    this.users = this.userService.users;
  }
}
