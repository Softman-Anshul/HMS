import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import { OPD } from '../../students';

@Component({
  selector: 'app-opd-report-usercollection',
  templateUrl: './opd-report-usercollection.component.html',
  styleUrls: ['./opd-report-usercollection.component.css']
})
export class OPDReportUsercollectionComponent implements OnInit {
  declare OPD : OPD[];
  uname = '';
  declare fromdt:string;
  declare todt:string;
  declare user:string;
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
    this.fromdt = routerParams["vrdt1"];
    this.todt = routerParams["vrdt2"];
    this.user = routerParams["nuname"];
    this._studentservice.gettabledayopdcollectionuser(routerParams["vrdt1"],routerParams["vrdt2"],routerParams["nuname"])
    .subscribe((data:OPD[]) => {
    this.OPD= data;

    for(let i=0;i<this.OPD.length;i++){
      this.totalgamt +=  parseInt(this.OPD[i].amt.toString());
      this.totaldamt +=  parseInt(this.OPD[i].discount.toString());
      this.totalramt +=  parseInt(this.OPD[i].refund.toString());
      this.totalnamt +=  parseInt(this.OPD[i].srvcTax.toString());
    
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
