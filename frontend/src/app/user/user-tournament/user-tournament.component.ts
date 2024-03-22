import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { UserService } from 'src/app/service/user.service';
// import {  Router } from '@angular/router';
@Component({
  selector: 'app-user-tournament',
  templateUrl: './user-tournament.component.html',
  styleUrls: ['./user-tournament.component.css']
})
export class UserTournamentComponent implements OnInit {

  viewdata: any="";
  clickviewdata:any = false;
  upcomingdata:any =true;
  pid: any;
  amount: any;
  team: any;
  GameID : any='';
  isloading: any = false;

  constructor(private addDataa:UserService,private router:Router, private activatedRoute: ActivatedRoute) {
  this.activatedRoute.queryParams.subscribe(params => {
  this.GameID = params['id'];

})
   }

  ngOnInit(): void {
    console.log(this.GameID);
    if (this.GameID == undefined) {
      this.viewupcoming();
    } else {
      this.getTournaments();
    }
  }

  // register(){

  // }
  upcominpage(){
    this.clickviewdata=false;
    this.upcomingdata= true;
  }



getTournaments(){
  let data = {
    gameID : this.GameID
  }
  this.isloading=true;
  this.addDataa.viewselecteddata(data).subscribe((result:any)=>{
    this.isloading=false;
    this.viewdata = result.data;

  })

}


  

viewupcoming(){
  this.isloading=true;
  this.addDataa.upcomingget().subscribe((result:any)=>{
    this.isloading=false;
    this.viewdata = result.data;
    console.log(this.viewdata);
    
  })


}







// viewupcominga() {

//   this.addDataa.upcomingget().subscribe(x => {
//     let id = x.get('id');
//     console.log(id); 
//     this.sharedService.setId(id); 
// });
    // this.activatedRoute.params.subscribe(paramsId => {
    //     this.id = paramsId.id;
    //     console.log(this.id);
    // });
  
//  }


register(x:any,y: any){
  // this.router.navigateByUrl('/user/usersolo');
  this.team = y;
  this.amount = x;
  this.clickviewdata = true;
  this.upcomingdata = false;
}


upcomingg(){
  this.router.navigateByUrl('/user/tournament');
}












}
