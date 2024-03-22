import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-usercomplited-tournament',
  templateUrl: './usercomplited-tournament.component.html',
  styleUrls: ['./usercomplited-tournament.component.css']
})
export class UsercomplitedTournamentComponent implements OnInit {

  viewdata: any="";
  isloading: any = false;
  constructor(private addDataa:UserService,private router:Router) { }

  ngOnInit(): void {

this.viewcomplitedt();

  }

  viewcomplitedt(){
    this.isloading=true;
    this.addDataa.completedget().subscribe((result:any)=>{
      this.isloading=false;
      this.viewdata = result.data;
      console.log(this.viewdata);
      
    })
  
  
  }

  complete(){
    this.router.navigateByUrl('/user/tournament');

  }
}
