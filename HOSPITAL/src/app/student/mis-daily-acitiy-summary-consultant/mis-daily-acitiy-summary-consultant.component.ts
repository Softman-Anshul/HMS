import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Students, allheadsummary } from '../../students';
import { group } from '@angular/animations';

@Component({
  selector: 'app-mis-daily-acitiy-summary-consultant',
  templateUrl: './mis-daily-acitiy-summary-consultant.component.html',
  styleUrls: ['./mis-daily-acitiy-summary-consultant.component.css']
})
export class MisDailyAcitiySummaryConsultantComponent {
  uname = '';
  declare fromdt: string;
  declare todt: string;
  declare paymode: string;
  declare allheadsummary: allheadsummary[];
  declare sum: Map<String, allheadsummary>;
  declare total: allheadsummary;
  consulatants = new Set<String>();
  totalgamt = 0;
  totaldamt = 0;
  totalramt = 0;
  totalnamt = 0;
  totalbal = 0;
  heading = "";
  headingMap = new Map<string, boolean>();
  heading1 = "";
  groups = [];
  headwiseTotal = new Map();
  headwiseTotaldis = new Map();
  headwiseTotalrefund = new Map();
  headwiseTotalbal = new Map();
  headwiseTotalnet = new Map();

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
    this.paymode = routerParams["doc1"];

    this._studentservice.misconsultant_allheads(routerParams["vrdt1"], routerParams["vrdt2"])
      .subscribe((data: allheadsummary[]) => {
        this.allheadsummary = data;
        this.sum = new Map<String, allheadsummary>();
        this.total = new allheadsummary();

        for (let i = 0; i < this.allheadsummary.length; i++) {
          if (!this.sum.has(this.allheadsummary[i].doctor)) {
            this.sum.set(this.allheadsummary[i].doctor, new allheadsummary());
          }
          this.consulatants.add(this.allheadsummary[i].doctor);
          let summary = this.sum.get(this.allheadsummary[i].doctor);
          if (summary != null && summary != undefined) {
            summary.Jan = Number(summary.Jan) + Number(this.allheadsummary[i].Jan);
            summary.Feb = Number(summary.Feb) + Number(this.allheadsummary[i].Feb);
            summary.Mar = Number(summary.Mar) + Number(this.allheadsummary[i].Mar);
            summary.Apr = Number(summary.Apr) + Number(this.allheadsummary[i].Apr);
            summary.May = Number(summary.May) + Number(this.allheadsummary[i].May);
            summary.Jun = Number(summary.Jun) + Number(this.allheadsummary[i].Jun);
            summary.Jul = Number(summary.Jul) + Number(this.allheadsummary[i].Jul);
            summary.Aug = Number(summary.Aug) + Number(this.allheadsummary[i].Aug);
            summary.Sep = Number(summary.Sep) + Number(this.allheadsummary[i].Sep);
            summary.Oct = Number(summary.Oct) + Number(this.allheadsummary[i].Oct);
            summary.Nov = Number(summary.Nov) + Number(this.allheadsummary[i].Nov);
            summary.Dec = Number(summary.Dec) + Number(this.allheadsummary[i].Dec);            
            this.sum.set(this.allheadsummary[i].doctor, summary);
          }

          this.total.Jan = this.total.Jan + Number(this.allheadsummary[i].Jan);
          this.total.Feb = this.total.Feb + Number(this.allheadsummary[i].Feb);
          this.total.Mar = this.total.Mar + Number(this.allheadsummary[i].Mar);
          this.total.Apr = this.total.Apr + Number(this.allheadsummary[i].Apr);
          this.total.May = this.total.May + Number(this.allheadsummary[i].May);
          this.total.Jun = this.total.Jun + Number(this.allheadsummary[i].Jun);
          this.total.Jul = this.total.Jul + Number(this.allheadsummary[i].Jul);
          this.total.Aug = this.total.Aug + Number(this.allheadsummary[i].Aug);
          this.total.Sep = this.total.Sep + Number(this.allheadsummary[i].Sep);
          this.total.Oct = this.total.Oct + Number(this.allheadsummary[i].Oct);
          this.total.Nov = this.total.Nov + Number(this.allheadsummary[i].Nov);
          this.total.Dec = this.total.Dec + Number(this.allheadsummary[i].Dec);
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