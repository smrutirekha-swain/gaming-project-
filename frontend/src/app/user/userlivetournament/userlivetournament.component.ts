import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-userlivetournament',
  templateUrl: './userlivetournament.component.html',
  styleUrls: ['./userlivetournament.component.css']
})
export class UserlivetournamentComponent implements OnInit {

  viewdata: any="";
  isloading: any = false;

  constructor(private addDataa:UserService,private router:Router) { }

  ngOnInit(): void {

    this.viewlive();
  
  }
  viewlive(){
    this.isloading=true;
    this.addDataa.livedget().subscribe((result:any)=>{
      this.isloading=false;

      this.viewdata = result.data;
      console.log(this.viewdata);
      
    })
  
  }
  live(){

    this.router.navigateByUrl('/user/tournament');
  }
}
