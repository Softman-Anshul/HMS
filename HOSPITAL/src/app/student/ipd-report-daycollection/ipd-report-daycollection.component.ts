import { Component, Inject, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import {Router, ActivatedRoute} from '@angular/router';
import { OPD, Students } from '../../students';

@Component({
  selector: 'app-ipd-report-daycollection',
  templateUrl: './ipd-report-daycollection.component.html',
  styleUrls: ['./ipd-report-daycollection.component.css']
})
export class IpdReportDaycollectionComponent implements OnInit {
  declare students : Students[];
  uname = '';
  declare fromdt:string;
  declare todt:string;

  totalgamt=0;
  totaldamt=0;
  totalramt=0;
  totalnamt=0;

  constructor( private _studentservice:StudentsService,
    private routes : ActivatedRoute,
    private Router :Router, 
     ) {
    }

    public innerWidth: any;

  ngOnInit(): void {
  //call username 
   this.uname = this._studentservice.getUsername();
   if(this.uname == '')
   {
     this.Router.navigate(['']);
   }
   const routerParams = this.routes.snapshot.params;
   this.fromdt = routerParams["vrdt1"];
   this.todt = routerParams["vrdt2"];
   this._studentservice.misheadsacticity(routerParams["vrdt1"],routerParams["vrdt2"],"IPD")
   .subscribe((data:Students[]) => {
   this.students= data;

   for(let i=0;i<this.students.length;i++){
    this.totalgamt +=  parseInt(this.students[i].grandTotal.toString());
    this.totalramt +=  parseInt(this.students[i].refund.toString());
    this.totalnamt +=  parseInt(this.students[i].recamt.toString());
  
   }
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
  opdlist(){
    this.Router.navigate(['homepage/opd-reportmaster/']);
  }
}

