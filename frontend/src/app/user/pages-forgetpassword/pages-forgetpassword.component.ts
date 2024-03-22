import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages-forgetpassword',
  templateUrl: './pages-forgetpassword.component.html',
  styleUrls: ['./pages-forgetpassword.component.css']
})
export class PagesForgetpasswordComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  forgeted(){
    this.router.navigateByUrl('/changepassword');
   
  }
  backtologin(){
    this.router.navigateByUrl('/pages-login');
   
  }
}
