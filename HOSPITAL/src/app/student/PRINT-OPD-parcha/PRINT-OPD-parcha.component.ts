import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import {Router, ActivatedRoute} from '@angular/router';
import { OPD} from '../../students';
import { consulant } from '../../students';

@Component({
  selector: 'app-opdparcha',
  templateUrl: './PRINT-OPD-parcha.component.html',
  styleUrls: ['./PRINT-OPD-parcha.component.css']
})
export class OpdparchaComponent implements OnInit {
  OPD = new OPD();
  declare consulant : consulant;
  uname = '';
  company="";
  add="";
  city="";
  phone="";
  profle="";
  doctor="";

  constructor(private _studentservice:StudentsService,
    private routes : ActivatedRoute,
    private Router :Router, 
   ) {}

  ngOnInit(): void {
    const routerParams = this.routes.snapshot.params;
    this._studentservice.getopdregRecp(routerParams["id"],routerParams["opdDate"])
    .subscribe((data:any) => {
    this.OPD = data[0];
    this.doctor = this.OPD.dctrVisited;

    this._studentservice.getconsultantbyname(this.doctor)
    .subscribe((data:consulant[]) => {
      this.consulant = data[0];
      console.log(data)
    });


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
opdlist(){
  this.Router.navigate(['homepage/opdlist/']);
}
}
