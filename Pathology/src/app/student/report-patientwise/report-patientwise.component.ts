import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import { Students } from '../../students';

@Component({
  selector: 'app-report-patientwise',
  templateUrl: './report-patientwise.component.html',
  styleUrls: ['./report-patientwise.component.css']
})
export class ReportPatientwiseComponent implements OnInit {
  declare Students : Students[];
  uname = '';
  company="";
  add="";
  city="";
  phone="";
  profle="";
  declare fromdt:string;
  declare todt:string;

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
    this._studentservice.gettabledaycollection(routerParams["vrdt1"],routerParams["vrdt2"])
    .subscribe((data:Students[]) => {
    this.Students= data;
    });
    
   //call username 
   this.uname = this._studentservice.getUsername();
   if(this.uname == '')
   {
     this.Router.navigate(['']);
   }

  }

}

