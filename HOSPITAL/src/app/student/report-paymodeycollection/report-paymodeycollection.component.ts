import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import { Students } from '../../students';

@Component({
  selector: 'app-report-paymodeycollection',
  templateUrl: './report-paymodeycollection.component.html',
  styleUrls: ['./report-paymodeycollection.component.css']
})
export class ReportPaymodeycollectionComponent implements OnInit {
  declare Students : Students[];
  uname = '';
  declare fromdt:string;
  declare todt:string;
  declare paymode:string;
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
    
    const routerParams = this.routes.snapshot.params;
    this.fromdt = routerParams["vrdt1"];
    this.todt = routerParams["vrdt2"];
    this.paymode = routerParams["paymode"];
    this._studentservice.gettabledaycollectionpaymode(routerParams["vrdt1"],routerParams["vrdt2"],routerParams["paymode"])
    .subscribe((data:Students[]) => {
    this.Students= data;

    for(let i=0;i<this.Students.length;i++){
      this.totalgamt +=  parseInt(this.Students[i].grandTotal.toString());
      this.totaldamt +=  parseInt(this.Students[i].discountAmt.toString());
      this.totalramt +=  parseInt(this.Students[i].refund.toString());
      this.totalnamt +=  parseInt(this.Students[i].recamt.toString());
    
     }
    });
    
   //call username 
   this.uname = this._studentservice.getUsername();
   if(this.uname == '')
   {
     this.Router.navigate(['']);
   }

  }

}

