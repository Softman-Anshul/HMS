import { Component, Inject, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import {OPD} from '../../students';
import {Test} from '../../students';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  test = new Test();
  OPD = new OPD();
  uname = '';
  dcmntNo=0;
  dt="";
  vchrDate="";
  vchrTime="";

  constructor(private _studentservice:StudentsService,
    private routes : ActivatedRoute,
    private Router :Router, 
   
   ) {
   
    }
    
  ngOnInit(): void {
     //call username 
 this.uname = this._studentservice.getUsername();
 if(this.uname == '')
 {
   this.Router.navigate(['']);
 }
 const routerParams = this.routes.snapshot.params;
 let dcmntNo = routerParams["dcmntNo"];
 let dt = routerParams["dt"];

 this.dcmntNo = dcmntNo;
 //patient information
 this._studentservice.getipdreg(dcmntNo,dt)
 .subscribe((data:any) => {
  this.OPD = data[0];

  });
    
   //call company for f.years
   this._studentservice.getCompany()
   .subscribe((data:any) => {
   this.OPD.Years = data[0].years;
  });
  this.vchrDate = formatDate(new Date(), 'yyyy-MM-dd', 'en_US').split('T')[0];
  this.vchrTime = new Date().toLocaleTimeString('en-US', { hour12: true, hour: "numeric",  minute: "numeric"});

}
printComponent() {
  window.print();
  }
}
