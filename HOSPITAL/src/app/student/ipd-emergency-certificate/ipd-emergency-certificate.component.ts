import { Component, Inject, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import {OPD} from '../../students';
import {Test} from '../../students';

@Component({
  selector: 'app-ipd-emergency-certificate',
  templateUrl: './ipd-emergency-certificate.component.html',
  styleUrls: ['./ipd-emergency-certificate.component.css']
})
export class IpdEmergencyCertificateComponent implements OnInit {
  test = new Test();
  OPD = new OPD();
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

 this.dcmntNo = dcmntNo;
 //patient information
 this._studentservice.getipdreg1(dcmntNo,dt)
 .subscribe((data:any) => {
  this.OPD = data[0];
  
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

ipdlist(){
  this.Router.navigate(['homepage/ipdlist/']);
}
}
