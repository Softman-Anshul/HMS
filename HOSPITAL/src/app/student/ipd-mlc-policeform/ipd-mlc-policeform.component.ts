import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import {OPD} from '../../students';
import { MLC} from '../../students';

@Component({
  selector: 'app-mlc-policeform',
  templateUrl: './ipd-mlc-policeform.component.html',
  styleUrls: ['./ipd-mlc-policeform.component.css']
})
export class MlcPoliceformComponent implements OnInit {
  OPD = new OPD();
  uname = '';
  MLC = new MLC();
  thana="";
  pntn="";
  name="";
  age="";
  sex="";
  yrs = "";
  pntg="";
  father="";
  add="";
  city="";  
  admitdt="";
  admittime="";
  dr = "";
  
  brby = "";
  bradd="";
  brcity="";

   constructor( private _studentservice:StudentsService,
    private routes : ActivatedRoute,
    private Router :Router, 
     ) {
    }

    public innerWidth: any;

  ngOnInit(): void {
  const routerParams = this.routes.snapshot.params;
  let ipdNo = routerParams["ipdNo"];
  let uhID = routerParams["uhID"];

  //patient information
  this._studentservice.getuhidsearch(uhID)
  .subscribe((data:any) => {
   this.OPD = data[0];
   this.pntn = this.OPD.pntn;
   this.name = this.OPD.pntName;
   this.age = this.OPD.pntAgeYrs;
   this.sex = this.OPD.pntSex;
   this.yrs = this.OPD.agey;
   this.pntg = this.OPD.pntg;
   this.father =  this.OPD.pntGrdn;
   this.add = this.OPD.pntAdrs1;
   this.city = this.OPD.pntCity;
   this.admitdt = this.OPD.opdDate;
   this.admittime = this.OPD.opdTime;
   this.dr = this.OPD.dctrVisited;
   });

  //Load Data
  this._studentservice.mlcload(ipdNo,uhID)
  .subscribe((data:any) => {
   this.MLC = data[0];
   this.thana = this.MLC.THANA;   
   this.pntg = this.OPD.pntn;
   this.name = this.OPD.pntName;
   this.brby = this.MLC.PBRBY;
   this.bradd = this.MLC.bradd;
   this.brcity = this.MLC.brcity;
   });
    
   //call username 
   this.uname = this._studentservice.getUsername();
   if(this.uname == '')
   {
     this.Router.navigate(['']);
   }

  }
  printComponent() {
    const element = document.getElementById("print")
    if (element != null) {
      let body = document.createElement("body")
      body.appendChild(element)
      document.body = body;
      window.print();
      window.location.reload()
    }
  }
}
