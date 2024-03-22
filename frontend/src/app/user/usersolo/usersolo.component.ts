import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-usersolo',
  templateUrl: './usersolo.component.html',
  styleUrls: ['./usersolo.component.css']
})
export class UsersoloComponent implements OnInit {
  pid: any;
  amount: any;
  team: any;

  constructor(private addDataa:UserService,private router:Router) { }

  ngOnInit(): void {
    // this.viewupcoming();
  }


  upcominpage(){
    this.router.navigateByUrl('/user/usertournament');
  }
}
