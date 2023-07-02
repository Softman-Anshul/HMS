import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import { Students,Test } from '../../students';


@Component({
  selector: 'app-recipts-bill',
  templateUrl: './Test_recipts-bill.component.html',
  styleUrls: ['./Test_recipts-bill.component.css']
})
export class ReciptsBillComponent implements OnInit {
  Students = new Students();
  declare testreport :Test[];
  uname = '';
  company="";
  add="";
  city="";
  phone="";
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
 this.profle = data[0].profle;

 });

const routerParams = this.routes.snapshot.params;
this._studentservice.gettablebyid(routerParams['id'])
.subscribe((data:any) => {
  this.Students = data[0];
this._studentservice.getTestdetails(this.Students.vchrNo,this.Students.vchrDate)
.subscribe((data:any) => {
this.testreport= data;
});
});

}
printthis(){
  window.print();
}
}
