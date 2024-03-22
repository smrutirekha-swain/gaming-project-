import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-gaming-status',
  templateUrl: './gaming-status.component.html',
  styleUrls: ['./gaming-status.component.css']
})
export class GamingStatusComponent implements OnInit {
  ststusc:any=" ";
  status:any=" ";
  viewdata: any="";
  ststuss: any="";
  sid: any="";
  updateformmm: any= false;
  addform:any= false;
  viewtable:any= true;
  // viewdata: any=" ";
  isloading: any = false;
  
  constructor(private addDataa: AdminService,private router:Router) { }

  ngOnInit(): void {
   this.statusselect();
  }

  statusselect(){
    this.isloading=true;
    this.addDataa.statusget().subscribe((result:any)=>{
      this.isloading=false;
    this.viewdata = result;
  }) 
  }


  gamestatus()
  {
  let statusdata={
    ststu:this.ststusc,
    
  }
  this.addDataa.gamestatusdata(statusdata).subscribe((result:any)=>{
    console.log(result.data)

  })

   }

   updatedata(data:any){
  
      this.sid =data.id;
      this.ststuss =data.mode_type;
  //ngmodel
    }
    update(){

      let y = {
        id: this.sid,
        ststus_u: this.ststuss,
    
      };
    // console.log(y);
    // return ;
    this.addDataa.updatestatustable(y).subscribe((result:any) => {
    
    
        this.viewtable = false;
        this.updateformmm = true;
         this.addform = true;
      });
    }
  

}
