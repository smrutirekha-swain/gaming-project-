import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { ValidatorcheckService } from 'src/app/service/validatorcheck.service'; 
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pages-signup',
  templateUrl: './pages-signup.component.html',
  styleUrls: ['./pages-signup.component.css']
})
export class PagesSignupComponent implements OnInit {
  showPassword: boolean = false;
  username: any ='';
  number: any ='';
  age: any ='';
  email: any ='';
  password: any ='';
  c_password:any = '';

  constructor(private  addData: AdminService,private router:Router,public valid:ValidatorcheckService) { }

  ngOnInit(): void {
  }
  signin(){
   

    if (this.username == ''){
      // alert(
      //         'Username Can Not Be Empty'
      //        )
             Swal.fire({
              html: '<b><h4>' + 'Username Can Not Be Empty' + '</h4></b>',
              icon: 'success',
              position: 'center',
              timer: 1500,
              showConfirmButton: false,
              timerProgressBar: true,
            })
    }else if(this.number == ''){
      // alert(
      //   'number Can Not Be Empty'
      //  )
       Swal.fire({
        html: '<b><h4>' +  'number Can Not Be Empty' + '</h4></b>',
        icon: 'success',
        position: 'center',
        timer: 1500,
        showConfirmButton: false,
        timerProgressBar: true,
      })


    }else if(!this.age || this.age <= 18){

      Swal.fire({
        html: '<b><h4>' +  'age Can Not Be Empty' + '</h4></b>',
        icon: 'success',
        position: 'center',
        timer: 1500,
        showConfirmButton: false,
        timerProgressBar: true,
      })

      // alert(
      //   'age Can Not Be Empty'
      //  )
    }else if(this.email == ''){
      Swal.fire({
        html: '<b><h4>' +  'email Can Not Be Empty' + '</h4></b>',
        icon: 'success',
        position: 'center',
        timer: 1500,
        showConfirmButton: false,
        timerProgressBar: true,
      })
      // alert(
      //   'email Can Not Be Empty'
      //  )
    }
    else if(this.password == ''){

      Swal.fire({
        html: '<b><h4>' +  'password Can Not Be Empty' + '</h4></b>',
        icon: 'success',
        position: 'center',
        timer: 1500,
        showConfirmButton: false,
        timerProgressBar: true,
      })
      // alert(
      //   'password Can Not Be Empty'
      //  )
    }else if(this.c_password != this.password){

      Swal.fire({
        html: '<b><h4>' +  'Password Does Not Match' + '</h4></b>',
        icon: 'success',
        position: 'center',
        timer: 1500,
        showConfirmButton: false,
        timerProgressBar: true,
      })

      // alert(
      //   'Password Does Not Match'
      //  )
      // this.router.navigateByUrl('/otpverify');
    }else{

      let data={
        username:this.username,
        number:this.number,
        age:this.age,
        email:this.email,
        password:this.c_password,
      }

      this.addData.insertsignupdata(data).subscribe((result:any)=>{

      }) 
      this.router.navigateByUrl('/otpverify');
    }
  }


  backtologin(){
    this.router.navigateByUrl('/pages-login');
   
  }
  taggleshow(){
    
    this.showPassword = !this.showPassword;
  }
}
