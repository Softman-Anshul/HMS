import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import { Students } from '../../students';


@Component({
  selector: 'app-report-daysummary',
  templateUrl: './report-daysummary.component.html',
  styleUrls: ['./report-daysummary.component.css']
})
export class ReportDaysummaryComponent implements OnInit {
  declare Students : Students[];
  uname = '';
  declare vrdt1:string;
  declare vrdt2:string;

  totalcount=0;
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
    this.vrdt1 = routerParams["vrdt1"];
    this.vrdt2 = routerParams["vrdt2"];

    this._studentservice.gettabledaysummary(routerParams["vrdt1"],routerParams["vrdt2"])
    .subscribe((data:Students[]) => {
    this.Students= data;

    for(let i=0;i<this.Students.length;i++){
      this.totalcount +=  parseInt(this.Students[i].uhID.toString());
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
