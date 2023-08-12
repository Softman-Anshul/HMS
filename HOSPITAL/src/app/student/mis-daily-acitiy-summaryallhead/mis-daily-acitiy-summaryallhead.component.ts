import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Students } from '../../students';
import { group } from '@angular/animations';

@Component({
  selector: 'app-mis-daily-acitiy-summaryallhead',
  templateUrl: './mis-daily-acitiy-summaryallhead.component.html',
  styleUrls: ['./mis-daily-acitiy-summaryallhead.component.css']
})
export class MisDailyAcitiySummaryallheadComponent {
  uname = '';
  declare fromdt: string;
  declare todt: string;
  declare paymode: string;
  declare Students: Students[];
  totaljan=0;
  totalfeb=0;
  totalmar=0;
  totalapr=0;
  totalmay=0;
  totaljun=0;
  totaljul=0;
  totalaug=0;
  totalsep=0;
  totaloct=0;
  totalnov=0;
  totaldec=0;

  groups = [];
 
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

    this._studentservice.missummaryallheadacticity(routerParams["vrdt1"], routerParams["vrdt2"])
      .subscribe((data: Students[]) => {
        this.Students = data;

        for(let i=0;i<this.Students.length;i++){
          this.totaljan +=  parseInt(this.Students[i].grandTotal.toString());
          this.totalfeb +=  parseInt(this.Students[i].discountAmt.toString());
          this.totalmar +=  parseInt(this.Students[i].refund.toString());
          this.totalapr +=  parseInt(this.Students[i].balamt.toString());
          this.totalmay +=  parseInt(this.Students[i].recamt.toString());
          this.totaljun +=  parseInt(this.Students[i].billamt.toString());
          this.totaljul +=  parseInt(this.Students[i].disp.toString());
          this.totalaug +=  parseInt(this.Students[i].typeno.toString());
          this.totalsep +=  parseInt(this.Students[i].pntage.toString());
          this.totaloct +=  parseInt(this.Students[i].ipdno.toString());
          this.totalnov +=  parseInt(this.Students[i].Sno.toString());
          this.totaljan +=  parseInt(this.Students[i].vchrNo.toString());

          
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
