import { Component, Inject, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import {Router, ActivatedRoute} from '@angular/router';
import { OPD } from '../../students';

@Component({
  selector: 'app-opd-daycollection',
  templateUrl: './opd-daycollection.component.html',
  styleUrls: ['./opd-daycollection.component.css']
})
export class OPDDaycollectionComponent implements OnInit {
  declare OPD : OPD[];
  uname = '';
  declare fromdt:string;
  declare todt:string;

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
    //call username 
   this.uname = this._studentservice.getUsername();
   if(this.uname == '')
   {
     this.Router.navigate(['']);
   }
   const routerParams = this.routes.snapshot.params;
   this.fromdt = routerParams["vrdt1"];
   this.todt = routerParams["vrdt2"];
   this._studentservice.gettableopddaycollection(routerParams["vrdt1"],routerParams["vrdt2"])
   .subscribe((data:OPD[]) => {
   this.OPD= data;

   for(let i=0;i<this.OPD.length;i++){
    this.totalgamt +=  parseInt(this.OPD[i].amt.toString());
    this.totaldamt +=  parseInt(this.OPD[i].discount.toString());
    this.totalramt +=  parseInt(this.OPD[i].refund.toString());
    this.totalnamt +=  parseInt(this.OPD[i].srvcTax.toString());
  
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
    this.Router.navigate(['homepage/opd-reportmaster/']);
  }
}
