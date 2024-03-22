import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  game: any = "";
  image: any = "";
  viewdata: any = "";
  isloading: any = false;
  files: any = "";
  filesname: any = "";
  tid: any;
  gamee: any;
  imagee:any;


  url = environment.url;

  constructor(private addDataa: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.viewgame();
  }

  imageUpload(e: any) {
    this.files = e.target.files[0];
    this.filesname = this.files.name;
  }



  gamesave() {

    let formdata = new FormData();

    formdata.append('gamename', this.game);
    formdata.append('file', this.files, this.filesname);

  this.isloading=true;
    this.addDataa.gamesdata(formdata).subscribe((result: any) => {
      this.isloading=false;
      console.log(result.data)

    })

  }


  viewgame() {
    this.isloading=true;
    this.addDataa.gamesget().subscribe((result: any) => {
      this.isloading=false;
      this.viewdata = result.data;
    console.log(this.viewdata);

    })


  }

  updatedata(data:any){

    this.tid =data.id;
this.gamee=data.game_name;


  }
  updateimage(){
    let formdata = new FormData();
    formdata.append('id', this.tid);
    formdata.append('file', this.files, this.filesname);
    formdata.append('gamenam', this.gamee);

    this.addDataa.gameupdate(formdata).subscribe((result: any) => {
      console.log(result.data)

    })

  }

  deleteedata(x:any){
    let data = {
           id: x
          }
    this.addDataa.gamedelette(data).subscribe((result: any) => {
      console.log(result.data)
      if (result.status==1) {
                Swal.fire({
                  html: '<b><h4>' + result.message + '</h4></b>',
                  icon: 'success',
                  position: 'center',
                  timer: 1500,
                  showConfirmButton: false,
                  timerProgressBar: true,
                })
              }else{
                Swal.fire({
                  html: '<b><h4>' + result.message + '</h4></b>',
                  icon: 'error',
                  position: 'center',
                  timer: 1500,
                  showConfirmButton: false,
                  timerProgressBar: true,
                })
              }
              this.viewgame();
    })


  }

//  getOuttime(x: any) {
//     let data = {
//       id: x
//     }
//     console.log(data);
//     this.adminData.getOuttime(data).subscribe((result: any) => {
//       console.log(result);
//       if (result.status==1) {
//         Swal.fire({
//           html: '<b><h4>' + result.message + '</h4></b>',
//           icon: 'success',
//           position: 'center',
//           timer: 1500,
//           showConfirmButton: false,
//           timerProgressBar: true,
//         })
//       }else{
//         Swal.fire({
//           html: '<b><h4>' + result.message + '</h4></b>',
//           icon: 'error',
//           position: 'center',
//           timer: 1500,
//           showConfirmButton: false,
//           timerProgressBar: true,
//         })
//       }
//       this.viewVisitor();
//     })
//   }

}
