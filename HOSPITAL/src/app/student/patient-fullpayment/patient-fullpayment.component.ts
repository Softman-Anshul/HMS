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
  headwiseTotal = new Map();
  headwiseTotaldis = new Map();
  headwiseTotalrefund = new Map();
  headwiseTotalbal = new Map();
  headwiseTotalnet = new Map();

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
      if(this.headwiseTotal.has(this.Students[i].Reporttype.toString())){
          this.headwiseTotal.set(this.Students[i].Reporttype.toString(),this.headwiseTotal.get(this.Students[i].Reporttype.toString()) + Number(this.Students[i].grandTotal))
          this.headwiseTotaldis.set(this.Students[i].Reporttype.toString(),this.headwiseTotaldis.get(this.Students[i].Reporttype.toString()) + Number(this.Students[i].discountAmt))
          this.headwiseTotalrefund.set(this.Students[i].Reporttype.toString(),this.headwiseTotalrefund.get(this.Students[i].Reporttype.toString()) + Number(this.Students[i].refund))
          this.headwiseTotalbal.set(this.Students[i].Reporttype.toString(),this.headwiseTotalbal.get(this.Students[i].Reporttype.toString()) + Number(this.Students[i].balamt))
          this.headwiseTotalnet.set(this.Students[i].Reporttype.toString(),this.headwiseTotalnet.get(this.Students[i].Reporttype.toString()) + Number(this.Students[i].recamt))
        } else {
          this.headwiseTotal.set(this.Students[i].Reporttype.toString(),Number(this.Students[i].grandTotal))
          this.headwiseTotaldis.set(this.Students[i].Reporttype.toString(),Number(this.Students[i].discountAmt))
          this.headwiseTotalrefund.set(this.Students[i].Reporttype.toString(),Number(this.Students[i].refund))
          this.headwiseTotalbal.set(this.Students[i].Reporttype.toString(),Number(this.Students[i].balamt))
          this.headwiseTotalnet.set(this.Students[i].Reporttype.toString(),Number(this.Students[i].recamt))

        }
 
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
