import { Component, Inject, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import {Router, ActivatedRoute} from '@angular/router';
import { OPD} from '../../students';

@Component({
  selector: 'app-opdrecipts',
  templateUrl: './PRINT-OPD-recipts.component.html',
  styleUrls: ['./PRINT-OPD-recipts.component.css']
})
export class OpdreciptsComponent implements OnInit {
  OPD = new OPD();
  uname = '';
  company="";
  add="";
  city="";
  phone="";
  profle="";

  constructor(private _studentservice:StudentsService,
    private routes : ActivatedRoute,
    private Router :Router, 
   ) {}


  ngOnInit(): void {
    const routerParams = this.routes.snapshot.params;
    this._studentservice.getopdregRecp(routerParams["id"],routerParams["opdDate"])
    .subscribe((data:any) => {
    this.OPD = data[0];
    console.log(data);
    });

    //call company
    this._studentservice.getCompany()
    .subscribe((data:any) => {
    this.company = data[0].Comp_nam;
    this.add = data[0].Comp_add;
    this.city = data[0].Comp_city;
    this.phone = data[0].Comp_Phon;
    this.profle = data[0].profle;

    });
  
    //call username 
 this.uname = this._studentservice.getUsername();
 if(this.uname == '')
 {
   this.Router.navigate(['']);
 }

}
printComponent() {
  window.print();
}

 amount(){
    return this._studentservice.numberToText(this.OPD.srvcTax)
  }
  opdlist(){
    this.Router.navigate(['homepage/opdlist/']);
  }
}