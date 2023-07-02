import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import { Students } from '../../students';


@Component({
  selector: 'app-report-doctorcollection',
  templateUrl: './report-doctorcollection.component.html',
  styleUrls: ['./report-doctorcollection.component.css']
})
export class ReportDoctorcollectionComponent implements OnInit {
  declare Students : Students[];
  uname = '';
  company="";
  add="";
  city="";
  phone="";
  profle="";
  declare fromdt:string;
  declare todt:string;
  declare doctor:string;
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
    this.doctor = routerParams["doctor"];
    this._studentservice.gettabledaycollectiondoctor(routerParams["vrdt1"],routerParams["vrdt2"],routerParams["doctor"])
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

