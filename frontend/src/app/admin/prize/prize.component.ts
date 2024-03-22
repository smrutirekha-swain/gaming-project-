import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-prize',
  templateUrl: './prize.component.html',
  styleUrls: ['./prize.component.css']
})
export class PrizeComponent implements OnInit {
 
  prize:any="";
  viewdata: any="";
  pid: any="";
  prizes: any="";
  updateformmm: any= false;
  addform: any= false;
  viewtable: any= true;
  isloading: any = false;


  constructor(private addDataa: AdminService,private router:Router) { }

  ngOnInit(): void {
  this.gamesprizeget();
  }


  gamesprizeget(){
    this.isloading=true;
    this.addDataa.gameprizeget().subscribe((result:any)=>{
      this.isloading=false;
      this.viewdata = result;
    })

  }

  prizetype(){

    let prizedata={
      prize:this.prize,
      
    }
    this.addDataa.gameprizedata(prizedata).subscribe((result:any)=>{
      console.log(result.data)
  
    })
  }

  
  updatedata(data:any){

    //  this.viewtable = true;
    // this.addform = false;
    //  this.updateformmm = true;
  
      this.pid =data.id;
      this.prizes =data.prize_p;
    //ngmodel
    }
    update(){
    
      let y = {
        id: this.pid,
        priz: this.prizes,
    
      };
    // console.log(y);
    // return ;
    this.addDataa.updateprizetable(y).subscribe((result:any) => {
    
    
        this.viewtable = false;
        this.updateformmm = true;
         this.addform = true;
      });
    }




}
