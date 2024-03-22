import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages-otpverify',
  templateUrl: './pages-otpverify.component.html',
  styleUrls: ['./pages-otpverify.component.css']
})
export class PagesOtpverifyComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  otpverify(){
    this.router.navigateByUrl('/dashboard');
  }
  backtologin(){
    this.router.navigateByUrl('/pages-login');
   
  }
}
