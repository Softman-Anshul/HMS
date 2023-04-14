import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import { Students } from '../../students';
import { group } from '@angular/animations';

@Component({
  selector: 'app-patient-fullpayment',
  templateUrl: './patient-fullpayment.component.html',
  styleUrls: ['./patient-fullpayment.component.css']
})
export class PatientFullpaymentComponent implements OnInit {
  uname = '';
  declare uhID:string;
  patient="";
  declare Students : Students[];
  totalgamt=0;
  totaldamt=0;
  totalramt=0;
  totalnamt=0;
  totalbal=0;
  heading="";
  headingMap = new Map<string,boolean>();
  heading1="";
  groups = [];

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
    this.uhID = routerParams["uhID"];
    this._studentservice.patientfullpayment(routerParams["uhID"])
    .subscribe((data:Students[]) => {
    this.Students= data;
    this.patient = data[0].PntName;

    for(let i=0;i<this.Students.length;i++)
      {
        this.headingMap.set(this.Students[i].Reporttype.toString(),true);
      }

    for(let i=0;i<this.Students.length;i++){
     this.totalgamt +=  parseInt(this.Students[i].grandTotal.toString());
      this.totaldamt +=  parseInt(this.Students[i].discountAmt.toString());
      this.totalramt +=  parseInt(this.Students[i].refund.toString());
      this.totalbal +=  parseInt(this.Students[i].balamt.toString());
      this.totalnamt +=  parseInt(this.Students[i].recamt.toString());
    }

  });
  }

}
