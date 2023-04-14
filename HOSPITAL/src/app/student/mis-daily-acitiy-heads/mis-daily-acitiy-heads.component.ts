import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import { Students } from '../../students';
import { group } from '@angular/animations';

@Component({
  selector: 'app-mis-daily-acitiy-heads',
  templateUrl: './mis-daily-acitiy-heads.component.html',
  styleUrls: ['./mis-daily-acitiy-heads.component.css']
})
export class MisDailyAcitiyHeadsComponent implements OnInit {
  uname = '';
  declare fromdt:string;
  declare todt:string;
  declare paymode:string;
  declare Students : Students[];
  totalgamt=0;
  totaldamt=0;
  totalramt=0;
  totalnamt=0;
  totalbal=0;
  heading="";
  headingMap = new Map<string,boolean>();
  heading1="";
  groups = [];

  
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
    this.paymode  = routerParams["doc1"];

    this._studentservice.misheadsacticity(routerParams["vrdt1"],routerParams["vrdt2"],routerParams["doc1"])
    .subscribe((data:Students[]) => {
    this.Students= data;

    for(let i=0;i<this.Students.length;i++)
      {
        this.headingMap.set(this.Students[i].Reporttype.toString(),true);
        
      }

    for(let ii=0;ii<this.Students.length;ii++){
     this.totalgamt +=  parseInt(this.Students[ii].grandTotal.toString());
      this.totaldamt +=  parseInt(this.Students[ii].discountAmt.toString());
      this.totalramt +=  parseInt(this.Students[ii].refund.toString());
      this.totalbal +=  parseInt(this.Students[ii].balamt.toString());
      this.totalnamt +=  parseInt(this.Students[ii].recamt.toString());
    }

  });
  }

}