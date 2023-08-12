import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Students } from '../../students';
import { group } from '@angular/animations';

@Component({
  selector: 'app-mis-daily-acitiy-summary',
  templateUrl: './mis-daily-acitiy-summary.component.html',
  styleUrls: ['./mis-daily-acitiy-summary.component.css']
})
export class MisDailyAcitiySummaryComponent implements OnInit {
  uname = '';
  declare fromdt: string;
  declare todt: string;
  declare paymode: string;
  declare Students: Students[];
  totalgamt = 0;
  totaldamt = 0;
  totalramt = 0;
  totalnamt = 0;
  totalbal = 0;
  totalcount = 0;
  heading = "";
  headingMap = new Map<string, boolean>();
  heading1 = "";
  groups = [];

  headwiseTotal = new Map();
  headwiseTotaldis = new Map();
  headwiseTotalrefund = new Map();
  headwiseTotalbal = new Map();
  headwiseTotalnet = new Map();
  headwiseTotalcount = new Map();
  
  constructor(private _studentservice: StudentsService,
    private routes: ActivatedRoute,
    private Router: Router,
  ) {
  }

  public innerWidth: any;
  ngOnInit(): void {
    //call username 
    this.uname = this._studentservice.getUsername();
    if (this.uname == '') {
      this.Router.navigate(['']);
    }

    const routerParams = this.routes.snapshot.params;
    this.fromdt = routerParams["vrdt1"];
    this.todt = routerParams["vrdt2"];

    this._studentservice.missummaryacticity(routerParams["vrdt1"], routerParams["vrdt2"])
      .subscribe((data: Students[]) => {
        this.Students = data;

        for (let i = 0; i < this.Students.length; i++) {
          this.headingMap.set(this.Students[i].paymode.toString(), true);

          if(this.headwiseTotal.has(this.Students[i].paymode.toString())){
            this.headwiseTotal.set(this.Students[i].paymode.toString(),this.headwiseTotal.get(this.Students[i].paymode.toString()) + Number(this.Students[i].grandTotal))
            this.headwiseTotaldis.set(this.Students[i].paymode.toString(),this.headwiseTotaldis.get(this.Students[i].paymode.toString()) + Number(this.Students[i].discountAmt))
            this.headwiseTotalrefund.set(this.Students[i].paymode.toString(),this.headwiseTotalrefund.get(this.Students[i].paymode.toString()) + Number(this.Students[i].refund))
            this.headwiseTotalbal.set(this.Students[i].paymode.toString(),this.headwiseTotalbal.get(this.Students[i].paymode.toString()) + Number(this.Students[i].balamt))
            this.headwiseTotalnet.set(this.Students[i].paymode.toString(),this.headwiseTotalnet.get(this.Students[i].paymode.toString()) + Number(this.Students[i].recamt))
            this.headwiseTotalcount.set(this.Students[i].paymode.toString(),this.headwiseTotalcount.get(this.Students[i].paymode.toString()) + Number(this.Students[i].uhID))
          } else {
            this.headwiseTotal.set(this.Students[i].paymode.toString(),Number(this.Students[i].grandTotal))
            this.headwiseTotaldis.set(this.Students[i].paymode.toString(),Number(this.Students[i].discountAmt))
            this.headwiseTotalrefund.set(this.Students[i].paymode.toString(),Number(this.Students[i].refund))
            this.headwiseTotalbal.set(this.Students[i].paymode.toString(),Number(this.Students[i].balamt))
            this.headwiseTotalnet.set(this.Students[i].paymode.toString(),Number(this.Students[i].recamt))
            this.headwiseTotalcount.set(this.Students[i].paymode.toString(),Number(this.Students[i].uhID))
  
          }    

        }

        for (let i = 0; i < this.Students.length; i++) {
          this.totalgamt += parseInt(this.Students[i].grandTotal.toString());
          this.totaldamt += parseInt(this.Students[i].discountAmt.toString());
          this.totalramt += parseInt(this.Students[i].refund.toString());
          this.totalbal += parseInt(this.Students[i].balamt.toString());
          this.totalnamt += parseInt(this.Students[i].recamt.toString());
          this.totalcount += parseInt(this.Students[i].uhID.toString());

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