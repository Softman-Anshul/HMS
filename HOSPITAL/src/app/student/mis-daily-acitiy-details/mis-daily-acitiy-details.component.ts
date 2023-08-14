import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import { Students } from '../../students';
import { group } from '@angular/animations';

@Component({
  selector: 'app-mis-daily-acitiy-details',
  templateUrl: './mis-daily-acitiy-details.component.html',
  styleUrls: ['./mis-daily-acitiy-details.component.css']
})
export class MisDailyAcitiyDetailsComponent implements OnInit {
  uname = '';
  declare fromdt:string;
  declare todt:string;
  declare Students : Students[];
  declare Students1 : Students[];
  htotalgamt=0;
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
  fromuser="";

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
    this.fromuser = routerParams["doc5"]
    this._studentservice.misdailyacticity(routerParams["vrdt1"],routerParams["vrdt2"],routerParams["doc5"])
    .subscribe((data:Students[]) => {
    this.Students= data;

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
    this.Router.navigate(['homepage/mis-master/']);
  }

}
function forEach(headingMap: Map<string, boolean>) {
  throw new Error('Function not implemented.');
}

