import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import { OPD, Students } from '../../students';

@Component({
  selector: 'app-opd-report-patientregister',
  templateUrl: './opd-report-patientregister.component.html',
  styleUrls: ['./opd-report-patientregister.component.css']
})
export class OPDReportPatientregisterComponent implements OnInit {
  declare OPD : OPD[];
  uname = '';
  declare fromdt:string;
  declare todt:string;
  declare doc:string;

   constructor( private _studentservice:StudentsService,
    private routes : ActivatedRoute,
    private Router :Router, 
     ) {
    }

    public innerWidth: any;
  ngOnInit(): void {
    const routerParams = this.routes.snapshot.params;
    this.fromdt = routerParams["vrdt1"];
    this.todt = routerParams["vrdt2"];
    this.doc = routerParams["doc"];

    this._studentservice.gettableopdpatientregister(routerParams["vrdt1"],routerParams["vrdt2"],routerParams["doc"])
    .subscribe((data:OPD[]) => {
    this.OPD= data;
    });
    
   //call username 
   this.uname = this._studentservice.getUsername();
   if(this.uname == '')
   {
     this.Router.navigate(['']);
   }

  }

}

