import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import { Students } from '../../students';

@Component({
  selector: 'app-report-PageHeading',
  templateUrl: './report-PageHeading.component.html',
  styleUrls: ['./report-PageHeading.component.css']
})
export class ReportPpageheadingComponent implements OnInit {
  declare Students : Students[];
  uname = '';
  company="";
  add="";
  city="";
  phone="";
  email="";
  website="";
  profle="";

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
     this.email = data[0].email;
     this.website = data[0].website;
     this.profle = data[0].profle;
     });
 
  }

}
