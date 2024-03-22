import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.checkSession();
  }
  logout(){

    localStorage.removeItem('adminsession');
    this.router.navigateByUrl('/pages-login');
    
  }

  checkSession(){
    if (localStorage.getItem("adminsession") === null){
      this.router.navigateByUrl('/pages-login');
    }
  }

}
