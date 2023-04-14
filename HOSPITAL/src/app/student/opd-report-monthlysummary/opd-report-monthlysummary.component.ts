import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import { OPD } from '../../students';

@Component({
  selector: 'app-opd-report-monthlysummary',
  templateUrl: './opd-report-monthlysummary.component.html',
  styleUrls: ['./opd-report-monthlysummary.component.css']
})
export class OPDReportMonthlysummaryComponent implements OnInit {
  declare OPD : OPD[];
  uname = '';
  declare vrdt1:string;
  declare vrdt2:string;

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

    this._studentservice.gettableopdmonthsummary(routerParams["vrdt1"],routerParams["vrdt2"])
    .subscribe((data:OPD[]) => {
    this.OPD= data;
    });
    
   //call username 
   this.uname = this._studentservice.getUsername();
   if(this.uname == '')
   {
     this.Router.navigate(['']);
   }

  }

}

