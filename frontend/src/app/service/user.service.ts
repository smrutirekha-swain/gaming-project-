import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  url= environment.url;

  constructor(private http:HttpClient) { }

//tournament

viewselecteddata(data:any){

  return this.http.post(this.url+'viewselectetournament',data);
}




  upcomingget(){

    {
      return this.http.get(this.url+'upcomingselect');
    }

  }
  completedget(){
    
    {
      return this.http.get(this.url+'completedselect');
    }
  }

  livedget(){
    {
      return this.http.get(this.url+'liveselect');
    }
  }



    updatePassword(userpass:any){
      return this.http.post(this.url+'updatepassword',userpass); 

    }
//profile

    imgupload(formdata:any){
      return this.http.post(this.url+'updateimg',formdata);

    }
    showuserprofile(data:any){
      return this.http.post(this.url+'selectprofiledata',data);

    }

    viewprofile(){
      return this.http.get(this.url+'selectprofilee');

    }

    insertprofiledataa(formdata:any ) {
      return this.http.post(this.url+'insertprofile',formdata); 
      }
}
