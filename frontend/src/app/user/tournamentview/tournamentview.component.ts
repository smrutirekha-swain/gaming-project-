import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-tournamentview',
  templateUrl: './tournamentview.component.html',
  styleUrls: ['./tournamentview.component.css']
})
export class TournamentviewComponent implements OnInit {


  constructor(private addDataa:UserService,private router:Router) { }

  ngOnInit(): void {

  }

  
  completed(){
    this.router.navigateByUrl('/user/usercompletedtournament');
  }


  live(){
    this.router.navigateByUrl('/user/userlivetournament');
  }
  upcoming(){

    this.router.navigateByUrl('/user/usertournament');
  }
}
