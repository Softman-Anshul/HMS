import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Students } from '../../students';
import { group } from '@angular/animations';

@Component({
  selector: 'app-mis-daily-acitiy-details-consultant',
  templateUrl: './mis-daily-acitiy-details-consultant.component.html',
  styleUrls: ['./mis-daily-acitiy-details-consultant.component.css']
})
export class MisDailyAcitiyDetailsConsultantComponent {
  uname = '';
  declare fromdt: string;
  declare todt: string;
  declare doctor:string;
  declare Students: Students[];
  declare Students1: Students[];
  htotalgamt = 0;
  totalgamt = 0;
  totaldamt = 0;
  totalramt = 0;
  totalnamt = 0;
  totalbal = 0;
  heading = "";
  heading1 = "";
  headingMap = new Map<string, string[]>();
  headingMap1 = new Map<string, boolean>();
  groups = [];
  headwiseTotal = new Map();
  headwiseTotaldis = new Map();
  headwiseTotalrefund = new Map();
  headwiseTotalbal = new Map();
  headwiseTotalnet = new Map();
  typewiseTotal = new Map<String, Map<String, Map<String, Number>>>();

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
    this.doctor = routerParams["doc1"];

    this._studentservice.misdailyacticity_conssultant(routerParams["vrdt1"], routerParams["vrdt2"], routerParams["doc1"])
      .subscribe((data: Students[]) => {
        this.Students = data;

        for (let i = 0; i < this.Students.length; i++) {
          this.headingMap1.set(this.Students[i].condoctor.toString(), true);
          let list = this.headingMap.get(this.Students[i].condoctor.toString());

          if (list != null && list != undefined) {
            if (!list.includes(this.Students[i].Reporttype.toString())) {
              list.push(this.Students[i].Reporttype.toString())
            }
            this.headingMap.set(this.Students[i].condoctor.toString(), list);
          } else {
            this.headingMap.set(this.Students[i].condoctor.toString(), [this.Students[i].Reporttype.toString()]);
          }

          if (this.headwiseTotal.has(this.Students[i].condoctor.toString())) {
            this.headwiseTotal.set(this.Students[i].condoctor.toString(), this.headwiseTotal.get(this.Students[i].condoctor.toString()) + Number(this.Students[i].grandTotal))
            this.headwiseTotaldis.set(this.Students[i].condoctor.toString(), this.headwiseTotaldis.get(this.Students[i].condoctor.toString()) + Number(this.Students[i].discountAmt))
            this.headwiseTotalrefund.set(this.Students[i].condoctor.toString(), this.headwiseTotalrefund.get(this.Students[i].condoctor.toString()) + Number(this.Students[i].refund))
            this.headwiseTotalbal.set(this.Students[i].condoctor.toString(), this.headwiseTotalbal.get(this.Students[i].condoctor.toString()) + Number(this.Students[i].balamt))
            this.headwiseTotalnet.set(this.Students[i].condoctor.toString(), this.headwiseTotalnet.get(this.Students[i].condoctor.toString()) + Number(this.Students[i].recamt))

            let typewiseValue = this.typewiseTotal.get(this.Students[i].condoctor.toString());

            if (typewiseValue != null) {
              let val = typewiseValue.get(this.Students[i].Reporttype.toString());
              if (val != null && val != undefined) {
                val.set('headwiseTotal', Number(val.get('headwiseTotal')) + Number(this.Students[i].grandTotal));
                val.set('headwiseTotaldis', Number(val.get('headwiseTotaldis')) + Number(this.Students[i].discountAmt));
                val.set('headwiseTotalrefund', Number(val.get('headwiseTotalrefund')) + Number(this.Students[i].refund));
                val.set('headwiseTotalbal', Number(val.get('headwiseTotalbal')) + Number(this.Students[i].balamt));
                val.set('headwiseTotalnet', Number(val.get('headwiseTotalnet')) + Number(this.Students[i].recamt));
                typewiseValue.set(this.Students[i].Reporttype.toString(), val)
                this.typewiseTotal.set(this.Students[i].condoctor.toString(),typewiseValue);
              } else {
                let typewiseValue = new Map<String, Number>();
                typewiseValue.set('headwiseTotal', Number(this.Students[i].grandTotal));
                typewiseValue.set('headwiseTotaldis', Number(this.Students[i].discountAmt));
                typewiseValue.set('headwiseTotalrefund', Number(this.Students[i].refund));
                typewiseValue.set('headwiseTotalbal', Number(this.Students[i].balamt));
                typewiseValue.set('headwiseTotalnet', Number(this.Students[i].recamt));

                let val = this.typewiseTotal.get(this.Students[i].condoctor.toString());

                if(val != null && val != undefined)
                this.typewiseTotal.set(this.Students[i].condoctor.toString(), val.set(this.Students[i].Reporttype.toString(), typewiseValue))    
              }
            }

          } else {
            this.headwiseTotal.set(this.Students[i].condoctor.toString(), Number(this.Students[i].grandTotal))
            this.headwiseTotaldis.set(this.Students[i].condoctor.toString(), Number(this.Students[i].discountAmt))
            this.headwiseTotalrefund.set(this.Students[i].condoctor.toString(), Number(this.Students[i].refund))
            this.headwiseTotalbal.set(this.Students[i].condoctor.toString(), Number(this.Students[i].balamt))
            this.headwiseTotalnet.set(this.Students[i].condoctor.toString(), Number(this.Students[i].recamt))

            let typewiseValue = new Map<String, Number>();
            typewiseValue.set('headwiseTotal', Number(this.Students[i].grandTotal));
            typewiseValue.set('headwiseTotaldis', Number(this.Students[i].discountAmt));
            typewiseValue.set('headwiseTotalrefund', Number(this.Students[i].refund));
            typewiseValue.set('headwiseTotalbal', Number(this.Students[i].balamt));
            typewiseValue.set('headwiseTotalnet', Number(this.Students[i].recamt));
            this.typewiseTotal.set(this.Students[i].condoctor.toString(), new Map<String, Map<String, Number>>().set(this.Students[i].Reporttype.toString(), typewiseValue))
          }
        }

        console.log(this.typewiseTotal)

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

  opdlist() {
    this.Router.navigate(['homepage/mis-master/']);
  }

}
function forEach(headingMap: Map<string, boolean>) {
  throw new Error('Function not implemented.');
}

