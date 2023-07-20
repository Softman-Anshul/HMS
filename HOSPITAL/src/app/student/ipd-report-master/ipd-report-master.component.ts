import { Component, OnInit } from '@angular/core';
import { StudentsService } from './../../students.service';
import { Router } from '@angular/router';
import {consulant,login1,Students} from '../../students';
import { Labname,Cityname } from '../../students';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-ipd-report-master',
  templateUrl: './ipd-report-master.component.html',
  styleUrls: ['./ipd-report-master.component.css']
})
export class IpdReportMasterComponent implements OnInit {
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
    this.doctor = "ALL"
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

   this.vrdt1 = formatDate(new Date(), 'yyyy-MM-dd', 'en_US').split('T')[0];
   this.vrdt2 = formatDate(new Date(), 'yyyy-MM-dd', 'en_US').split('T')[0];
 }
  
 ipd_Datecollection(vrdt1:any,vrdt2:any){
  let dt = this.vrdt1;
  let dt2 = this.vrdt2;
  this.router.navigate(['homepage/ipddatecollection/' + dt,dt2]);
  }


 ipd_daycollection(vrdt1:any,vrdt2:any){
  let dt = this.vrdt1;
  let dt2 = this.vrdt2;
    this.router.navigate(['homepage/ipddaycollection/' + dt,dt2,]);
}
ipd_doctoradmitregister(vrdt1:any,vrdt2:any,doctor:any){
  let dt = this.vrdt1;
  let dt2 = this.vrdt2;
  let doc = this.doctor;
  if(doc == undefined)
  {
   alert("Sorry ! Please Select Consultant Name")
  }
  else
  {
  this.router.navigate(['homepage/doctoradmitregister/' + dt,dt2,doc]);
  }
  }
ipd_doctordischarge(vrdt1:any,vrdt2:any,doc:any){
let dt = this.vrdt1;
let dt2 = this.vrdt2;
this.router.navigate(['homepage/ipddoctordischarge/' + dt,dt2,doc]);
}
// monthsummary(vrdt1:any,vrdt2:any){
// let dt = this.vrdt1;
// let dt2 = this.vrdt2;
// this.router.navigate(['opdmonthsummary/' + dt,dt2]);
// }
// doctorreportday(vrdt1:any,vrdt2:any,doctor:any){
// let dt = this.vrdt1;
// let dt2 = this.vrdt2;
// let doc = this.doctor;
// if(doc == undefined)
// {
//  alert("Sorry ! Please Select Consultant Name")
// }
// else
// {
// this.router.navigate(['opddoctorday/' + dt,dt2,doc]);
// }
// }
// doctorreportmonth(vrdt1:any,vrdt2:any,doctor:any){
// let dt = this.vrdt1;
// let dt2 = this.vrdt2;
// let doc = this.doctor;
// if(doc == undefined)
// {
//  alert("Sorry ! Please Select Consultant Name")
// }
// else
// {
// this.router.navigate(['opddoctormonth/' + dt,dt2,doc]);
// }
// }
// doctorsummary(vrdt1:any,vrdt2:any){
// let dt = this.vrdt1;
// let dt2 = this.vrdt2;
// this.router.navigate(['opddoctorsummary/' + dt,dt2]);
// }
// rdoctorreport(vrdt1:any,vrdt2:any,doctor:any){
// let dt = this.vrdt1;
// let dt2 = this.vrdt2;
// let doc = this.doctor;
// if(doc == undefined)
// {
//  alert("Sorry ! Please Select Consultant Name")
// }
// else
// {
// this.router.navigate(['ropddoctor/' + dt,dt2,doc]);
// }
// }
// rdoctorsummary(vrdt1:any,vrdt2:any){
// let dt = this.vrdt1;
// let dt2 = this.vrdt2;
// this.router.navigate(['opdrdoctorsummary/' + dt,dt2]);
// }
// city(vrdt1:any,vrdt2:any,pcity:any){
// let dt = this.vrdt1;
// let dt2 = this.vrdt2;
// let City = this.pcity;
// if(City == undefined)
// {
//  alert("Sorry ! Please Select Any City")
// }
// else
// {
// this.router.navigate(['opdcity/' + dt,dt2,pcity]);
// }
// }
// citysummary(vrdt1:any,vrdt2:any){
// let dt = this.vrdt1;
// let dt2 = this.vrdt2;
// this.router.navigate(['opdcitysummary/' + dt,dt2]);
// }
// patientregister(vrdt1:any,vrdt2:any){
// let dt = this.vrdt1;
// let dt2 = this.vrdt2;
// this.router.navigate(['opdpatientregister/' + dt,dt2]);
// }
// usercollection(vrdt1:any,vrdt2:any,puname:any){
// let dt = this.vrdt1;
// let dt2 = this.vrdt2;
// let nuname = this.puname;
// if(nuname == undefined)
// {
//  alert("Sorry ! Please Select Any User")
// }
// else
// {
// this.router.navigate(['opduser/' + dt,dt2,nuname]);
// }
// }
// paymodecollection(vrdt1:any,vrdt2:any,paymode:any){
// let dt = this.vrdt1;
// let dt2 = this.vrdt2;
// let pay = this.paymode;
// if(pay == undefined)
// {
//  alert("Sorry ! Please Select Any Paymode")
// }
// else
// {
// this.router.navigate(['opdpaymode/' + dt,dt2,paymode]);
// }
// }


}

