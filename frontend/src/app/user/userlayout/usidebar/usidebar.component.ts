import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usidebar',
  templateUrl: './usidebar.component.html',
  styleUrls: ['./usidebar.component.css']
})
export class UsidebarComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {
    this.checkSession();
  }
  logout(){

    localStorage.removeItem('usersession');
    this.router.navigateByUrl('/pages-login');


  }

  checkSession(){
    if (localStorage.getItem("usersession") === null){
      this.router.navigateByUrl('/pages-login');
    }
  }
}
