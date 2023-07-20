import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import { Students } from '../../students';


@Component({
  selector: 'app-report-doctorysummary',
  templateUrl: './report-doctorysummary.component.html',
  styleUrls: ['./report-doctorysummary.component.css']
})
export class ReportDoctorysummaryComponent implements OnInit {
  declare Students : Students[];
  uname = '';
  declare vrdt1:string;
  declare vrdt2:string;
  totalgamt=0;
  totaldamt=0;
  totalramt=0;
  totalbalamt=0;
  totalnamt=0;
  headingMap = new Map<string,boolean>();

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
    
    const routerParams = this.routes.snapshot.params;
    this.vrdt1 = routerParams["vrdt1"];
    this.vrdt2 = routerParams["vrdt2"];

    this._studentservice.gettabledoctorsummary(routerParams["vrdt1"],routerParams["vrdt2"])
    .subscribe((data:Students[]) => {
    this.Students= data;

    for(let i=0;i<this.Students.length;i++)
      {
        this.headingMap.set(this.Students[i].condoctor.toString(),true);

        if(this.headwiseTotal.has(this.Students[i].condoctor.toString())){
          this.headwiseTotal.set(this.Students[i].condoctor.toString(),this.headwiseTotal.get(this.Students[i].condoctor.toString()) + Number(this.Students[i].grandTotal))
          this.headwiseTotaldis.set(this.Students[i].condoctor.toString(),this.headwiseTotaldis.get(this.Students[i].condoctor.toString()) + Number(this.Students[i].discountAmt))
          this.headwiseTotalrefund.set(this.Students[i].condoctor.toString(),this.headwiseTotalrefund.get(this.Students[i].condoctor.toString()) + Number(this.Students[i].refund))
          this.headwiseTotalbal.set(this.Students[i].condoctor.toString(),this.headwiseTotalbal.get(this.Students[i].condoctor.toString()) + Number(this.Students[i].balamt))
          this.headwiseTotalnet.set(this.Students[i].condoctor.toString(),this.headwiseTotalnet.get(this.Students[i].condoctor.toString()) + Number(this.Students[i].recamt))
        } else {
          this.headwiseTotal.set(this.Students[i].condoctor.toString(),Number(this.Students[i].grandTotal))
          this.headwiseTotaldis.set(this.Students[i].condoctor.toString(),Number(this.Students[i].discountAmt))
          this.headwiseTotalrefund.set(this.Students[i].condoctor.toString(),Number(this.Students[i].refund))
          this.headwiseTotalbal.set(this.Students[i].condoctor.toString(),Number(this.Students[i].balamt))
          this.headwiseTotalnet.set(this.Students[i].condoctor.toString(),Number(this.Students[i].recamt))

        }
      }

    for(let i=0;i<this.Students.length;i++){
      this.totalgamt +=  parseInt(this.Students[i].grandTotal.toString());
      this.totaldamt +=  parseInt(this.Students[i].discountAmt.toString());
      this.totalramt +=  parseInt(this.Students[i].refund.toString());
      this.totalbalamt +=  parseInt(this.Students[i].balamt.toString());
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

