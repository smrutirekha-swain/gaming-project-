import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tagging',
  templateUrl: './tagging.component.html',
  styleUrls: ['./tagging.component.css']
})
export class TaggingComponent implements OnInit {
  itema: any=" ";
  tag:any=" ";

  constructor(private addData: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.gamestournamentgets();
  }

  gamestournamentgets() {

    this.addData.gametournamentget().subscribe((result: any) => {
      if (result.status == 1) {
        this.itema = result.data;
      } else {
      }
        // this.itema = result;

      }) 
      // this.items=result.data;
     
   
  }

}
