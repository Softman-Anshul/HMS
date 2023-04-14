import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import { Router } from '@angular/router';
import {OPD,Students } from '../../students';

@Component({
  selector: 'app-dashboard',
  templateUrl: './Menu-Dashboard.component.html',
  styleUrls: ['./Menu-Dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  declare OPD : OPD[];
  declare Students : Students[];
  opdcount=0;
  opdtotal=0;
  testcount=0;
  testtotal=0;
  ipdcounta=0;
  ipdcountd=0;
  declare vrdt1:string;
  
  constructor(private _studentservice:StudentsService,
    private router: Router) { }

  ngOnInit(): void {
    this.vrdt1 = new Date().toISOString().split('T')[0];

    //count OPD 
    this._studentservice.getopd(this.vrdt1)
    .subscribe((data:OPD[]) => {
      this.OPD= data;
      for(let i=0; i < this.OPD.length; i++){
        this.opdcount = this.opdcount+1;
        this.opdtotal += Number(this.OPD[i].srvcTax);
      }
      });
      //count ipd admit
      this._studentservice.getipdadmit()
    .subscribe((data:OPD[]) => {
      this.OPD= data;
      for(let i=0; i < this.OPD.length; i++){
        this.ipdcounta = this.ipdcounta+1;
        
      }
      });
       //count ipd Discharge
       this._studentservice.getipddischarge(this.vrdt1)
       .subscribe((data:OPD[]) => {
         this.OPD= data;
         for(let i=0; i < this.OPD.length; i++){
           this.ipdcountd = this.ipdcounta+1;
         }
         });
      //count Test 
      this._studentservice.gettable(this.vrdt1)
      .subscribe((data:Students[]) => {
        this.Students= data;
        for(let ii=0; ii < this.Students.length; ii++){
          this.testcount = this.testcount+1;
          this.testtotal += Number(this.Students[ii].recamt);
        }
      });
  }

}
