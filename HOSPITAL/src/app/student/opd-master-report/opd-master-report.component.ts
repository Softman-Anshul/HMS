import { Component, OnInit } from '@angular/core';
import { StudentsService } from './../../students.service';
import { Router } from '@angular/router';
import {consulant,login1,Students} from '../../students';
import { Labname,Cityname } from '../../students';

@Component({
  selector: 'app-opd-master-report',
  templateUrl: './opd-master-report.component.html',
  styleUrls: ['./opd-master-report.component.css']
})
export class OpdMasterReportComponent implements OnInit {
  uname = '';
  Mobile = false;
  declare vrdt1:string;
  declare vrdt2:string;
  declare doctor:string;
  declare pcity:string;
  declare puname:string;
  declare pOutsource:string;
  declare paymode:string;
  declare consulant : consulant[];
  declare City : Cityname[];
  declare User : login1[];
  declare Labname : Labname[]; 

  constructor(private _studentservice:StudentsService,
    private router: Router) { }

    ngOnInit(): void {
      this.Mobile = this._studentservice.isMob();
      this._studentservice.gettablerconsultant()
    .subscribe((data:consulant[]) => {
      this.consulant = data;
    });
 //call Consultant
 this._studentservice.gettableconsultant()
 .subscribe((data:consulant[]) => {
   this.consulant = data;
 });
  //call City
  this._studentservice.gettableCity()
  .subscribe((data:any[]) => {
  this.City = data;
  });
  //call User
  this._studentservice.gettableUser()
  .subscribe((data:any[]) => {
  this.User = data;
  });
   //call labname
this._studentservice.gettablelabname()
.subscribe((data:Labname[]) => {
this.Labname = data;
});
    //call username 
    this.uname = this._studentservice.getUsername();
     //call username 
     this.uname = this._studentservice.getUsername();
     if(this.uname == '')
     {
       this.router.navigate(['']);
     }
 
     this.vrdt1 = new Date().toISOString().split('T')[0];
     this.vrdt2 = new Date().toISOString().split('T')[0];
   }
    
   daycollection(vrdt1:any,vrdt2:any){
    let dt = this.vrdt1;
    let dt2 = this.vrdt1;
      this.router.navigate(['opddaycollection/' + dt,dt2]);
}
Datecollection(vrdt1:any,vrdt2:any){
  let dt = this.vrdt1;
  let dt2 = this.vrdt2;
this.router.navigate(['opddaycollection/' + dt,dt2]);
}
daysummary(vrdt1:any,vrdt2:any){
  let dt = this.vrdt1;
  let dt2 = this.vrdt2;
this.router.navigate(['opddaysummary/' + dt,dt2]);
}
monthsummary(vrdt1:any,vrdt2:any){
  let dt = this.vrdt1;
  let dt2 = this.vrdt2;
this.router.navigate(['opdmonthsummary/' + dt,dt2]);
}
doctorreport(vrdt1:any,vrdt2:any,doctor:any){
  let dt = this.vrdt1;
  let dt2 = this.vrdt2;
  let doc = this.doctor;
  if(doc == undefined)
  {
   alert("Sorry ! Please Select Consultant Name")
  }
  else
  {
this.router.navigate(['opddoctor/' + dt,dt2,doc]);
  }
}
doctorsummary(vrdt1:any,vrdt2:any){
  let dt = this.vrdt1;
  let dt2 = this.vrdt2;
this.router.navigate(['opddoctorsummary/' + dt,dt2]);
}
rdoctorreport(vrdt1:any,vrdt2:any,doctor:any){
  let dt = this.vrdt1;
  let dt2 = this.vrdt2;
  let doc = this.doctor;
  if(doc == undefined)
  {
   alert("Sorry ! Please Select Consultant Name")
  }
  else
  {
this.router.navigate(['ropddoctor/' + dt,dt2,doc]);
  }
}
rdoctorsummary(vrdt1:any,vrdt2:any){
  let dt = this.vrdt1;
  let dt2 = this.vrdt2;
this.router.navigate(['opdrdoctorsummary/' + dt,dt2]);
}
city(vrdt1:any,vrdt2:any,pcity:any){
  let dt = this.vrdt1;
  let dt2 = this.vrdt2;
  let City = this.pcity;
  if(City == undefined)
  {
   alert("Sorry ! Please Select Any City")
  }
  else
  {
this.router.navigate(['opdcity/' + dt,dt2,pcity]);
  }
}
citysummary(vrdt1:any,vrdt2:any){
  let dt = this.vrdt1;
  let dt2 = this.vrdt2;
this.router.navigate(['opdcitysummary/' + dt,dt2]);
}
patientregister(vrdt1:any,vrdt2:any){
  let dt = this.vrdt1;
  let dt2 = this.vrdt2;
this.router.navigate(['opdpatientregister/' + dt,dt2]);
}
usercollection(vrdt1:any,vrdt2:any,puname:any){
  let dt = this.vrdt1;
  let dt2 = this.vrdt2;
  let nuname = this.puname;
  if(nuname == undefined)
  {
   alert("Sorry ! Please Select Any User")
  }
  else
  {
this.router.navigate(['opduser/' + dt,dt2,nuname]);
  }
}
paymodecollection(vrdt1:any,vrdt2:any,paymode:any){
  let dt = this.vrdt1;
  let dt2 = this.vrdt2;
  let pay = this.paymode;
  if(pay == undefined)
  {
   alert("Sorry ! Please Select Any Paymode")
  }
  else
  {
this.router.navigate(['opdpaymode/' + dt,dt2,paymode]);
  }
}


}
