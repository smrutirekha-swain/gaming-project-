import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages-changepassword',
  templateUrl: './pages-changepassword.component.html',
  styleUrls: ['./pages-changepassword.component.css']
})
export class PagesChangepasswordComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  changepassword(){
    this.router.navigateByUrl('/pages-login');
  }
  backtologin(){
    this.router.navigateByUrl('/pages-login');
   
  }
}
