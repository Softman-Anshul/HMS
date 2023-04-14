import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import { Students } from '../../students';

@Component({
  selector: 'app-report-usercollectiony',
  templateUrl: './report-usercollectiony.component.html',
  styleUrls: ['./report-usercollectiony.component.css']
})
export class ReportUsercollectionyComponent implements OnInit {
  declare Students : Students[];
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
    this._studentservice.gettabledaycollectionuser(routerParams["vrdt1"],routerParams["vrdt2"],routerParams["nuname"])
    .subscribe((data:Students[]) => {
    this.Students= data;

    for(let i=0;i<this.Students.length;i++){
      this.totalgamt +=  parseInt(this.Students[i].grandTotal.toString());
      this.totaldamt +=  parseInt(this.Students[i].discountAmt.toString());
      this.totalramt +=  parseInt(this.Students[i].refund.toString());
      this.totalnamt +=  parseInt(this.Students[i].recamt.toString());
    
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
