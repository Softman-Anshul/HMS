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
  heading = "";
  headingMap = new Map<string, boolean>();
  heading1 = "";
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

    this._studentservice.missummaryacticity(routerParams["vrdt1"], routerParams["vrdt2"])
      .subscribe((data: Students[]) => {
        this.Students = data;

        for (let i = 0; i < this.Students.length; i++) {
          this.headingMap.set(this.Students[i].paymode.toString(), true);
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
    const element = document.getElementById("print1")
    if (element != null) {
      const printContents = element.innerHTML;
      const originalContents = document.body.innerHTML;
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
      window.location.reload()
    }
  }

}