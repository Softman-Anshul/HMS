import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import {OPD} from '../../students';
import { discard} from '../../students';
import {HttpClient} from '@angular/common/http';
import { FormBuilder,FormGroup, FormControl,Validators } from '@angular/forms';
import { docClick } from '@syncfusion/ej2-angular-richtexteditor';
import {disheading} from '../../students';

@Component({
  selector: 'app-ipd-dischargecard-report',
  templateUrl: './ipd-dischargecard-report.component.html',
  styleUrls: ['./ipd-dischargecard-report.component.css']
})
export class IpdDischargecardReportComponent implements OnInit {
 
  OPD = new OPD();
  uname = '';
  discard = new discard();
  stuserid='';
  imageSrc: string | undefined;
  imageSrc1: string | undefined;
  imageSrc2: string | undefined;
  declare disheading:disheading[];
  disheading1 = new disheading();
  dt = "";

  constructor(private _studentservice:StudentsService,
    private routes : ActivatedRoute,
    private Router :Router,
    private https:HttpClient,
    private formBuilder : FormBuilder,
    // public dialogRef: MatDialogRef<IpdDischargecardReportComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: {OPD:OPD},
   ) {
    // this.OPD = data.OPD
   
    }

    loginForm= new FormGroup({
      selectedtext: new FormControl()
    });
  ngOnInit(): void {
  //call username 
  this.uname = this._studentservice.getUsername();
  if(this.uname == '')
  {
    this.Router.navigate(['']);
  }
     const routerParams = this.routes.snapshot.params;
     this.discard.ipdno = routerParams["ipdno"];
     this.discard.uhid = routerParams["uhid"];
     this.dt = routerParams["dt"];
     

     this.discard.uname = this.uname;

      //patient information
     this._studentservice.getipdreg1(this.discard.ipdno,this.dt)
    .subscribe((data:any) => {
    this.OPD = data[0];
    this.OPD.expiryDate = "";
    this.OPD.category = routerParams["category"];
     this.OPD.roomNo = routerParams["roomNo"];
     this.OPD.Bedno = routerParams["Bedno"];
  });
     //CALL Heading
     this._studentservice.getdischargeheading()
     .subscribe((data:disheading[]) => {
       this.disheading1 = data[0];
     });
 
   this.discard.carddate = new Date().toISOString().split('T')[0];
    //call company for f.years
    this._studentservice.getCompany()
    .subscribe((data:any) => {
    this.OPD.Years = data[0].years;
    this.discard.Years = this.OPD.Years;
   });
   

    //Load Data
  this._studentservice.dischargecardload(this.discard.ipdno,this.discard.uhid)
  .subscribe((data:any) => {
   this.discard = data[0];
  //  this.discard.ipdno = this.OPD.dcmntNo;
  //  this.discard.uhid = this.OPD.uhID;
   
   });


   }

  selectedFile(arg0: string, selectedFile: any, name: any) {
   throw new Error('Method not implemented.');
 }
 bold(selectedtext: any):void{
if(selectedtext == "a"){
  alert("A")
}
else{
  alert("others")
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
 