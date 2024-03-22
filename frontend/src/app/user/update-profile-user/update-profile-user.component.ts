import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-profile-user',
  templateUrl: './update-profile-user.component.html',
  styleUrls: ['./update-profile-user.component.css']
})
export class UpdateProfileUserComponent implements OnInit {

  name: any = "";
  mail: any = "";
  mob: any = "";
  gender: any = "";
  pass: any = "";
  npass: any = "";
  Cpass: any = "";
  pid: any;
  viewdata: any;
  image: any = "";
  files: any = "";
  filesname: any = "";
  isloading: any = false;
  url = environment.url;

  storage: any = localStorage.getItem('usersession');
  userObj: any = JSON.parse(this.storage);
  userService: any;

  constructor(private addDataa: UserService, private router: Router) { }

  ngOnInit(): void {
    this.showUserDetails();
   // this.viewprofile();

    console.log(this.userObj);
    console.log(this.files);

  }

  imageUpload(e: any) {

    this.files = e.target.files[0];
    this.filesname = this.files.name;
    console.log(this.files);
    console.log(this.filesname);

  }

  // editprofile(){

  //   let formdata = new FormData();

  //   formdata.append('file', this.files, this.filesname);
  //  // formdata.append('gameimage', this.image);

  //   this.addDataa.imgupload(formdata).subscribe((result: any) => {
  //     console.log(result.data)
  // })

  // }


  // viewprofile() {
  //   this.addDataa.viewprofile().subscribe((result: any) => {



  //     this.viewdata = result.data;
  //     console.log(this.viewdata);

  //   })

  // }


  showUserDetails() {
   let data = {
    userid: this.userObj.id,
   }
   this.isloading=true;
   this.addDataa.showuserprofile(data).subscribe((result: any) => {
    this.isloading=false;
    if (result.status == 1) {

      this.pid = result.data[0].id;
      this.name = result.data[0].username;
      this.mail = result.data[0].email;
      this.mob = result.data[0].number;


  console.log(result.data);
    } else {

    }
  })
    // this.pid = this.userObj.id;
    // this.name = this.userObj.username;
    // this.mail = this.userObj.email;
    // this.mob = this.userObj.number;

  }

  updateprofile() {

    // let data:any ={
    //   id:this.pid,
    //   Name:this.pid,
    // }
    let formdata = new FormData();
    if(this.files == ''){
    
      
    formdata.append('file', '');
    formdata.append('id', this.pid);
    formdata.append('Name', this.name);
    }else{
    

    formdata.append('file', this.files, this.filesname);
    formdata.append('id', this.pid);
    formdata.append('Name', this.name);
    }
    this.addDataa.insertprofiledataa(formdata).subscribe((result: any) => {
      if (result.status == 1) {
        this.showUserDetails();
      } else {

      }
    })


  }

//password


  updatepassword() {
    // console.log(this.npass +"=="+ this.Cpass);
    // return;
    if (this.npass == this.Cpass) {
      console.log(this.npass + "==" + this.Cpass);

      let userpass = {
        id: this.pid,
        Password: this.npass,
        oldpassword: this.pass
      };
      console.log(userpass);

      this.addDataa.updatePassword(userpass).subscribe((result: any) => {

      });
    }

    else {
      console.log(this.npass + "!=" + this.Cpass);


      Swal.fire({
        html: '<b><h4>' + 'New password and Confirm password do not match' + '</h4></b>',
        icon: 'error',
        position: 'center',
        timer: 1500,
        showConfirmButton: false,
        timerProgressBar: true
      });
    }

  }

}