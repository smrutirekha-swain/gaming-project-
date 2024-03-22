import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  url= environment.url;
  // url:'http://localhost:3131/';
  constructor(private http:HttpClient) { }

  insertsignupdata(data:any){
      return this.http.post(this.url+'insertsignup',data);
  }

  logincom(data:any){
    return this.http.post(this.url+'login',data);
  }


  tournamentdata(formdata:any)
  {
  return this.http.post(this.url+'inserttournament',formdata); 
  }

  tournamentget()
  {
    return this.http.get(this.url+'selecttournament');
  }

// update tournament


updatetournament(formdata:any){
  return this.http.post(this.url+'updatetrournamentdata',formdata);
}




  //img upload

// tournamendata(formdata:any){
//   return this.http.post(this.url+'imginsert',formdata);
// }


//status
gamestatusdata(statusdata:any){
  return this.http.post(this.url+'insertstatus',statusdata); 
}

statusget()
  {
    return this.http.get(this.url+'selectstatus');
  }

  updatestatustable(y:any){
    return this.http.post(this.url+'updatestatusview',y);
  }


//mode

gamemodedata(data:any){
  return this.http.post(this.url+'insertmode',data); 
}

gamemodeget()
  {
    return this.http.get(this.url+'selectmode');
  }

updatetable(y:any){
    return this.http.post(this.url+'updatemodeview',y);
  }


//prize

gameprizedata(prizedata:any){
  return this.http.post(this.url+'insertprize',prizedata); 
}

gameprizeget()
  {
    return this.http.get(this.url+'selectprize');
  }

  updateprizetable(y:any){
    return this.http.post(this.url+'updateprizeview',y);
  }
//rank
gamerankdata(rankdata:any){

  return this.http.post(this.url+'insertrank',rankdata);

}
gamerankget()
  {
    return this.http.get(this.url+'selectrank');
  }

  updateranktable(y:any){
    return this.http.post(this.url+'updaterankview',y);
  }

//device type
gametypedata(dtypedata:any){
  return this.http.post(this.url+'insertdevice',dtypedata);
}
gamestypeget()
{
  return this.http.get(this.url+'selecttype');
}
updatetypetable(y:any){
  return this.http.post(this.url+'updatetypeview',y);
}

//tournament

gametournamentget()
{
  return this.http.get(this.url+'selectgametournament');
}

  


  gamesdata(formdata:any)
  {
  return this.http.post(this.url+'insertgame',formdata); 
  }


  gamesget()
  {
    return this.http.get(this.url+'selectgame');
  }
  gamersdata(data:any)
  {
    return this.http.post(this.url+'viewgame',data); 
  }

  //update img and name

  gameupdate(formdata:any)
  {
  return this.http.post(this.url+'updategame',formdata); 
  }


  gamedelette(data:any)
  {
  return this.http.post(this.url+'Deletegame',data); 
  }
 
}
