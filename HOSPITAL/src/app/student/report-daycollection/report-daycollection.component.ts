import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import { Students } from '../../students';
import { window } from 'rxjs';


@Component({
  selector: 'app-report-daycollection',
  templateUrl: './report-daycollection.component.html',
  styleUrls: ['./report-daycollection.component.css']
})
export class ReportDaycollectionComponent implements OnInit {
  declare Students : Students[];
  uname = '';
  declare fromdt:string;
  declare todt:string;
  
  company="";
  add="";
  city="";
  phone="";
  profle="";
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
   
    //call company
    this._studentservice.getCompany()
    .subscribe((data:any) => {
    this.company = data[0].Comp_nam;
    this.add = data[0].Comp_add;
    this.city = data[0].Comp_city;
    this.phone = data[0].Comp_Phon;
    this.profle = data[0].profle;
    });
   
    const routerParams = this.routes.snapshot.params;
    this.fromdt = routerParams["vrdt1"];
    this.todt = routerParams["vrdt2"];
    this._studentservice.gettabledaycollection(routerParams["vrdt1"],routerParams["vrdt2"])
    .subscribe((data:Students[]) => {
    this.Students= data;
    
    for(let i=0;i<this.Students.length;i++){
      this.totalgamt +=  parseInt(this.Students[i].grandTotal.toString());
      this.totaldamt +=  parseInt(this.Students[i].discountAmt.toString());
      this.totalramt +=  parseInt(this.Students[i].refund.toString());
      this.totalnamt +=  parseInt(this.Students[i].recamt.toString());
    
     }
    });
    
   

  }
printthis(){
}
}
