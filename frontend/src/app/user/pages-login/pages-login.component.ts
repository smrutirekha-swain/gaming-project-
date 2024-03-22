import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { ValidatorcheckService } from 'src/app/service/validatorcheck.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pages-login',
  templateUrl: './pages-login.component.html',
  styleUrls: ['./pages-login.component.css']
})
export class PagesLoginComponent implements OnInit {

  // viewpassword: any = '';

  // hidepassword: any = '';
  showPassword: boolean = false;
  username: any = '';
  password: any = '';

  constructor(private log: AdminService, private router: Router,public valid:ValidatorcheckService) { }


  ngOnInit(): void {
  }
  forgetpassword(){
    this.router.navigateByUrl('/forgetpassword');
  }

  register(){
    this.router.navigateByUrl('/pages-signup');
  }



  LogIn() {
// console.log(this.username);return
    if (this.username == '') {
      alert(
        'Username Can Not Be Empty'
      )
    } else if (this.password == '') {
      alert(
        'Password Can Not Be Empty'
      )
    } else {

      let data = {
        username: this.username,
        password: this.password,
      }

      this.log.logincom(data).subscribe((result: any) => {
        console.log(result)

        if (result.status == 1) {
          console.log('hii');

          if (result.data[0].usertype == 2) {

          this.router.navigateByUrl('/user/dashboard');

          Swal.fire({
            html: '<b><h4>' + result.message + '</h4></b>',
            icon: 'success',
            position: 'center',
            timer: 1500,
          })
          let userinobj = {
            id: result.data[0].id,
            username: result.data[0].username,
            number: result.data[0].number,
            email: result.data[0].email,
            password: result.data[0].password,

          }
          localStorage.setItem('usersession', JSON.stringify(userinobj));
          console.log(userinobj);

        }else if (result.data[0].usertype == 1) {
        
        
          let admindata = {
            id: result.data[0].id,
            username: result.data[0].username,
            number: result.data[0].number,
            email: result.data[0].email,
            password: result.data[0].password,

          }
          localStorage.setItem('adminsession', JSON.stringify(admindata));
          console.log(admindata);
        
          this.router.navigateByUrl('/admin/tournament');
        
        
         } else {
          alert('Invalid username or password')

        }
      }
      })
    }

  }



//   if (result.status == 1) {
//     console.log('hii');

//     if (result.data[0].utype_id == 1) {
// // console.log('admin');
// // return;
//       let admininobj = {
//         utype_id: result.data[0].utype_id,
//         usname: result.data[0].usname,
//         password: result.data[0].password,
//       }
//       localStorage.setItem('adminsession', JSON.stringify(admininobj));

//       this.router.navigateByUrl('/admin/dashboard')

//     } else if (result.data[0].utype_id == 2) {
// //           console.log('student');
// // return;
//       let studentinobj = {
//         utype_id: result.data[0].utype_id,
//         usname: result.data[0].usname,
//         password: result.data[0].password,

//       }

//       localStorage.setItem('studentsession', JSON.stringify(studentinobj));
//       this.router.navigateByUrl('/students/dashboard')
//     }

    
//     else {
//       // console.log('user');
//       // return;
//       let teacherinobj = {
//         utype_id: result.data[0].utype_id,
//         usname: result.data[0].usname,
//         password: result.data[0].password,
//       }
//       localStorage.setItem('teachersession', JSON.stringify(teacherinobj));
//       this.router.navigateByUrl('/teacher/dashboard')

//     }
//   } else {
//     alert('Invalid username or password')

//   }















  // dashboard(){

  //   this.router.navigateByUrl('/dashboard');
  // }

//   showpassword(){
//     this.hidepassword=false
//     this.viewpassword=true;
//   }
// hiddenpassword(){
//   this.hidepassword=true
//   this.viewpassword=false;
// }

// showpassword=false;

taggleshow(){
  this.showPassword= !this.showPassword;
}
}
