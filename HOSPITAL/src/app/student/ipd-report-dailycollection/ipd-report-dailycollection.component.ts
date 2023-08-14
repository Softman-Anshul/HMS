import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Students } from '../../students';
import { group } from '@angular/animations';

@Component({
  selector: 'app-ipd-report-dailycollection',
  templateUrl: './ipd-report-dailycollection.component.html',
  styleUrls: ['./ipd-report-dailycollection.component.css']
})
export class IpdReportDailycollectionComponent implements OnInit {
  uname = '';
  declare fromdt: string;
  declare todt: string;
  declare paymode: string;
  declare Students: Students[];
  totalgamt = 0;
  totaldamt = 0;
  totalramt = 0;
  totalbal = 0;
  totalnamt = 0;

  heading = "";
  headingMap = new Map<string, boolean>();
  heading1 = "";
  groups = [];
  fromuser="";
  


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
  this.fromuser = routerParams["doc5"];

  this._studentservice.misheadsdailyacticity(routerParams["vrdt1"], routerParams["vrdt2"], "IPD", routerParams["doc"])
    .subscribe((data: Students[]) => {
      this.Students = data;
      for (let i = 0; i < this.Students.length; i++) {
        this.headingMap.set(this.Students[i].dcmntType.toString(), true);
      }
      for (let i = 0; i < this.Students.length; i++) {
        this.totalgamt += parseInt(this.Students[i].grandTotal.toString());
        this.totaldamt += parseInt(this.Students[i].discountAmt.toString());
        this.totalramt += parseInt(this.Students[i].refund.toString());
        this.totalbal += parseInt(this.Students[i].balamt.toString());
        this.totalnamt += parseInt(this.Students[i].recamt.toString());
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

}