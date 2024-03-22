import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { UserService } from 'src/app/service/user.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usergame',
  templateUrl: './usergame.component.html',
  styleUrls: ['./usergame.component.css']
})
export class UsergameComponent implements OnInit {
  viewdata: any="";
  isloading: any = false;

  url = environment.url;
  constructor(private addData: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.viewgames();
  }

  viewgames() {
    this.isloading=true;
    this.addData.gamesget().subscribe((result: any) => {
      this.isloading=false;
      this.viewdata = result.data;
      console.log(this.viewdata);
    })
}


// asynctournament(x: any,y:any){
// console.log(x,y)
//   // this.router.navigateByUrl('/user/tournament');
// if(y == 1){
// this.router.navigateByUrl('/user/usertournament?id='+ x);
// }else if(y == 2){
//   // this.router.navigateByUrl('/user/tournament?id='+ x);
//   Swal.fire({
//     html: '<b><h4>'+ " Live Tournament  " +'</h4></b>',
//     icon: 'success',
//     position: 'center',
//     timer: 1500,
//   })


// }else{
//   Swal.fire({
//     html: '<b><h4>' + "Completed Tournament" + '</h4></b>',
//     icon: 'success',
//     position: 'center',
//     timer: 1500,
//   })

// }
// }

tournament(x: any){
console.log(x)
   this.router.navigateByUrl('/user/usertournament?id='+ x);
// if(y == 1){
// //this.router.navigateByUrl('/user/usertournament?id='+ x);
// }else if(y == 2){
//   // this.router.navigateByUrl('/user/tournament?id='+ x);
//   Swal.fire({
//     html: '<b><h4>'+ " Live Tournament  " +'</h4></b>',
//     icon: 'success',
//     position: 'center',
//     timer: 1500,
//   })


// }else{
//   Swal.fire({
//     html: '<b><h4>' + "Completed Tournament" + '</h4></b>',
//     icon: 'success',
//     position: 'center',
//     timer: 1500,
//   })

// }
}



}