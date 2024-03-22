import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-gameview',
  templateUrl: './gameview.component.html',
  styleUrls: ['./gameview.component.css']
})

export class GameviewComponent implements OnInit {
  image:any="";

  files: any = "";
  filesname: any = "";

  constructor() { }

  ngOnInit(): void {
  }

  imageUpload(e: any){
    this.files = e.target.files[0];
    this.filesname = this.files.name;
  }

//   gamedata(){
//   let formdata = new FormData();

//   formdata.append('file', this.files, this.filesname);

// // this.addData.tournamentdata(formdata).subscribe((result: any) => {
// //       console.log(result.data)

// //     })
// // }

 }
