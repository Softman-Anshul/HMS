import { Component, Inject, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import {OPD} from '../../students';

@Component({
  selector: 'app-ipd-gatepass',
  templateUrl: './ipd-gatepass.component.html',
  styleUrls: ['./ipd-gatepass.component.css']
})
export class IpdGatepassComponent implements OnInit {
  OPD = new OPD();
  ward = new OPD();
  uname = '';
  dcmntNo=0;
  dt="";

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
 let uhID = routerParams["uhID"];

 this.dcmntNo = dcmntNo;
 //patient information
 this._studentservice.getipdreg1(dcmntNo,dt)
 .subscribe((data:any) => {
  this.OPD = data[0];
  });

  //Ward information
  this._studentservice.getwardbyipdno(dcmntNo,uhID)
  .subscribe((data:any) => {
   this.ward = data[0];
   });
    
   //call company for f.years
   this._studentservice.getCompany()
   .subscribe((data:any) => {
   this.OPD.Years = data[0].years;
  });
  

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