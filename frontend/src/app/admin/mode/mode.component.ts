import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-mode',
  templateUrl: './mode.component.html',
  styleUrls: ['./mode.component.css']
})
export class ModeComponent implements OnInit {

  mode:any=" ";
  viewdata:any="";
  mid: any="";
  modetype: any="";
  updateformmm: any= false;
  addform:any= false;
  viewtable:any= true;
  isloading: any = false;

  constructor(private addDataa: AdminService,private router:Router) { 
  this.gamemget();
}
  ngOnInit(): void {
  }

  gamemget(){
    this.isloading=true;
    this.addDataa.gamemodeget().subscribe((result:any)=>{
      this.isloading=false;
      this.viewdata = result;
      console.log(this.viewdata);
      
    })
  }

  gamemode(){

    let data={
      mode:this.mode,
      
    }
    this.addDataa.gamemodedata(data).subscribe((result:any)=>{
      console.log(result.data)
  
    })

  }


  updatedata(data:any){

  //  this.viewtable = true;
  // this.addform = false;
  //  this.updateformmm = true;

    this.mid =data.id;
    this.mode =data.mode_type;
//ngmodel
  }
  update(){
  
    let y = {
      id: this.mid,
      modet: this.mode,
  
    };
  // console.log(y);
  // return ;
  this.addDataa.updatetable(y).subscribe((result:any) => {
  
  
      this.viewtable = false;
      this.updateformmm = true;
       this.addform = true;
    });
  }

 

  delete(){

  } 
}
