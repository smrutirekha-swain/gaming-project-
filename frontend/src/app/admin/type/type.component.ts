import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {

type:any='';
  viewdata: any='';
  updateformmm: any= false;
  addform: any= false;
  viewtable: any= true;
  pid: any;
  type_t: any;

  isloading: any = false;

  constructor(private addDataa: AdminService,private router:Router) { }

  ngOnInit(): void {
    this.selectdevice();
  }

  selectdevice(){
    this.isloading=true;
    this.addDataa.gamestypeget().subscribe((result:any)=>{
      this.isloading=false;
      this.viewdata = result;
    }) 
  }

  Device(){
    let dtypedata={
      type:this.type,
    }
    this.addDataa.gametypedata(dtypedata).subscribe((result:any)=>{
      console.log(result.data)
  
    })
  }

  updatedata(data:any){

    //  this.viewtable = true;
    // this.addform = false;
    //  this.updateformmm = true;
  
      this.pid =data.id;
      this.type_t =data.device_t;
    //ngmodel
    }
    update(){
    
      let y = {
        id: this.pid,
        d_type: this.type_t,
    
      };
    // console.log(y);
    // return ;
    this.addDataa.updatetypetable(y).subscribe((result:any) => {
    
    
        this.viewtable = false;
        this.updateformmm = true;
         this.addform = true;
      });
    }
  
}
