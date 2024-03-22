import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {

  game: any = " ";
  image: any = " ";
  type: any = " ";
  mode: any = " ";
  status: any = " ";
  status_L: any = "";
  rank: any = " ";
  prize: any = " ";
  start: any = " ";
  stime: any = " ";
  etime: any = " ";
  // fees: any = " ";
  viewdata: any = " ";
  items: any = " ";
  prizess: any = " ";
  rankss: any = " ";
  statuss: any = " ";
  dataa: any = " ";
  view: any = " ";
  files: any = '';
  fee: any = '';
  tid: any;
  gamee: any  = '';
  typee: any  = '';
  modee: any  = '';
  statues: any  = '';
  rankk: any  = '';
  prizee: any  = '';
  datee: any  = '';
  timee: any  = '';
  etimee: any  = '';
  feess: any  = '';
imagee: any  = '';
status_k: any  = '';
startdate: any  = '';
stimte: any  = '';
  gamemodeid: any  = '';


  gameid: any  = '';
  filesname: any;
  isloading: any = false;



    url = environment.url;
  
  constructor(private addData: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.viewtournament();
    this.gamestournamentget();
    this.devicetournamentget();
    this.modetournamentget();
    this.statutournamentget();
    this.ranktournamentget();
    this.prizetournamentget();

  }




  tournamentadd() {
    // if(this.game==' ')
    // {
    //   alert('gamename field cannot be empty')
    // }
    // // else if(this.image==' ')
    // // {
    // //   alert('image field cannot be empty')
    // // }
    // else if(this.type==' ')
    // {
    //   alert('type field cannot be empty')
    // }
    // else if(this.mode==' ')
    // {
    //   alert('mode field cannot be empty')
    // }
    // else if(this.status==' ')
    // {
    //   alert('status field cannot be empty')
    // }
    // else if(this.rank==' ')
    // {
    //   alert('rank field cannot be empty')
    // }
    // else if(this.prize==' ')
    // {
    //   alert('prize field cannot be empty')
    // }
    // else if(this.start==' ')
    // {
    //   alert('date field cannot be empty')
    // }
    // else if(this.stime==' ')
    // {
    //   alert('start time field cannot be empty')
    // }
    // else if(this.etime==' ')
    // {
    //   alert('end time field cannot be empty')
    // }
    // else if(this.fees==' ')
    // {
    //   alert('fees field cannot be empty')
    // }

    // else{

    let formdata = new FormData();

    formdata.append('file', this.files, this.filesname);
    formdata.append('gamename', this.game);
    formdata.append('gameimage', this.image);
    formdata.append('gametype', this.type);
    formdata.append('gamemode', this.mode);
    formdata.append('status', this.status_L);
    formdata.append('gamerank', this.rank);
    formdata.append('gameprize', this.prize);
    formdata.append('gamedate', this.start);
    formdata.append('gamestime', this.stime);
    formdata.append('gameetime', this.etime);
    formdata.append('gamefees', this.fee);
    console.log(formdata);

    this.addData.tournamentdata(formdata).subscribe((result: any) => {
      console.log(result.data)

    })
  }

  // img
  imageUpload(e: any) {

    this.files = e.target.files[0];
    this.filesname = this.files.name;
    // console.log(this.files);
    // console.log(this.filesname);


  }

  //view tournament

  viewtournament() {

    this.isloading=true;
    this.addData.tournamentget().subscribe((result: any) => {
      this.isloading=false;
      this.viewdata = result.data;
      console.log(this.viewdata);
      
      // for (let i = 0; i < this.viewdata.length; i++) {
      //   // this.print = this.viewdata[i];
      //  this.print = this.url + '/' + this.viewdata[i].imagepath + '/' + this.viewdata[i].gameimage;
      //   console.log(this.print);

      // }


    })
  }


//table f

updatedata(data:any){
  console.log(data);
  this.tid =data.id;

  this.gamemodeid =data.gameid;

  // this.imagee =data.image;
 // this.= data.typeid;
  this.typee =data.typeid;
  //this. =data.modeid;
  this.modee =data.modeid;
  //this. =data.statusid;
  this.status_k =data.statusid;
  //this. =data.rankid;
  this.rankk =data.rankid;
 // this. =data.prizeid;
  this.prizee =data.prizeid;
  this.startdate =data.date;
  this.stimte =data.time;
  this.etimee =data.etime;
  this.feess =data.fees;

  }

//form f

  updatetournament(){

      let formdata = new FormData();
      formdata.append('id', this.tid);
      formdata.append('file', this.files, this.filesname);
      formdata.append('gamenam', this.gamemodeid);
      // formdata.append('gameimag', this.imagee);
      formdata.append('gametyp', this.typee);
      formdata.append('gamemod', this.modee);
      formdata.append('statu', this.status_k);
      formdata.append('gameran', this.rankk);
      formdata.append('gamepriz', this.prizee);
      formdata.append('gamedat', this.startdate);
      formdata.append('gamestim',  this.stimte);
      formdata.append('gameetim', this.etimee);
      formdata.append('gamefee', this.feess);
     
  
  this.addData.updatetournament(formdata).subscribe((result:any) => {
  
  
      // this.viewtable = false;
      // this.updateformmm = true;
      //  this.addform = true;s
    });


  }




  // tournamentupdate(data: any) { 



  // }

  // // }
  // dropdown()
  // {
  //   this.addData.gamersdata().subscribe((result:any)=>{
  //     this.viewdata = result.data;

  //    })
  // }

  gamestournamentget() {

    this.addData.gametournamentget().subscribe((result: any) => {
      if (result.status == 1) {
        this.items = result.data;
      } else {
      }
      // this.items=result.data;
      console.log(result);
    })
  }

  devicetournamentget() {
    this.addData.gamestypeget().subscribe((result: any) => {
      console.log(result);
      this.view = result;

      // if (result.status == 1) {
      // this.view = result;
      // }

    })
  }


  modetournamentget() {
    this.addData.gamemodeget().subscribe((result: any) => {
      this.dataa = result;
      // if (result.status == 1) {

      // }
    })
  }

  statustournamentget() {
    this.addData.statusget().subscribe((result: any) => {
      this.statuss = result;
      // if (result.status == 1) {

      // }
    })


  }

  ranktournamentget() {
    this.addData.gamerankget().subscribe((result: any) => {
      this.rankss = result;
      // if (result.status == 1) {

      // }
    })
  }

  prizetournamentget() {
    this.addData.gameprizeget().subscribe((result: any) => {
      this.prizess = result;
      // if (result.status == 1) {

      // }
    })
  }

  deleteditem() {

  }

  statutournamentget() {
    this.addData.statusget().subscribe((result: any) => {
      this.statuss = result;
      // if (result.status == 1) {

      // }
    })

  }

}
