import { UserService } from '../user.service';
import { User } from './user';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';





@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

   user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  getUserDetails(loginId: string)  {
    console.log(loginId);
    this.userService.getUserById(loginId).subscribe(user => this.user = user);
  }

}
