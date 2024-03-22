import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.css']
})
export class RankComponent implements OnInit {
   rank:any='';
  viewdata: any='';
  rank_u: any='';
  pid: any='' ;
  updateformmm: any= false;
  addform: any= false;
  viewtable: any= true;
  isloading: any = false;


  constructor(private addDataa: AdminService,private router:Router) { }

  ngOnInit(): void {
    this.gamerankge();
  }

  gamerankge(){
    this.isloading=true;
    this.addDataa.gamerankget().subscribe((result:any)=>{
      this.isloading=false;
      this.viewdata = result.data;
    })

  }

  ranks(){

    let rankdata={
      rank:this.rank,
      
    }
    this.addDataa.gamerankdata(rankdata).subscribe((result:any)=>{
      console.log(result.data)
  
    })

  }


  updatedata(data:any){

    //  this.viewtable = true;
    // this.addform = false;
    //  this.updateformmm = true;
  
      this.pid =data.id;
      this.rank_u =data.rank_g;
    //ngmodel
    }
    update(){
    
      let y = {
        id: this.pid,
        rankss: this.rank_u,
    
      };
    // console.log(y);
    // return ;
    this.addDataa.updateranktable(y).subscribe((result:any) => {
    
    
        this.viewtable = false;
        this.updateformmm = true;
         this.addform = true;
      });
    }




}
