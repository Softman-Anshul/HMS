import { Component, OnInit } from '@angular/core';
import { StudentsService } from './../../students.service';
import { Router } from '@angular/router';
import {group,consulant,OPD } from '../../students';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-mis-master',
  templateUrl: './mis-master.component.html',
  styleUrls: ['./mis-master.component.css']
})
export class MisMasterComponent implements OnInit {
  uname = '';
  Mobile = false;
  declare vrdt1:string;
  declare vrdt2:string;
  declare choice:string;
  declare choice1:string;
  editable: boolean = false; 
  SelectedFieldList =["PaymentMode","Head Wise Details","Head Wise Daily","Head Wise Monthly"];
  declare group : group[];
  declare rconsulant: consulant[];
  OPD1 = new OPD();
  declare list : string[];

  constructor(private _studentservice:StudentsService,
    private router: Router) { }

  ngOnInit(): void {
    this.Mobile = this._studentservice.isMob();
    this.list = [];
    this.vrdt1 =formatDate(new Date(), 'yyyy-MM-dd', 'en_US').split('T')[0];
    this.vrdt2 = formatDate(new Date(), 'yyyy-MM-dd', 'en_US').split('T')[0];

    //call RConsultant
    this._studentservice.getopdrconsultant()
      .subscribe((data: any) => {
        this.rconsulant = data;
      });

          //call username 
        this.uname = this._studentservice.getUsername();
         //call username 
         this.uname = this._studentservice.getUsername();
         if(this.uname == '')
         {
           this.router.navigate(['']);
         }
         this._studentservice.gettablegroup()
         .subscribe((data:group[]) => {
          this.list = [];
          data.forEach(element => {
            this.list.push(element.paymode);
          });
         });

    
  }
  changedata(){
     if(this.choice == "PaymentMode")
         {
         this._studentservice.gettablegroup()
         .subscribe((data:group[]) => {
          this.list = [];
          data.forEach(element => {
            this.list.push(element.paymode);
          });
         });
        }
        else if(this.choice == "Head Wise Details" || this.choice == "Head Wise Daily" 
        || this.choice == "Head Wise Monthly" ){
        this._studentservice.gettabletesthead()
        .subscribe((data:any[]) => {
          this.list = [];
          data.forEach(element => {
            this.list.push(element["type"]);
          });
    });       
       }
  }
  dchangedata(){
    if(this.choice == "Consulant")
        {
        this._studentservice.gettablegroup()
        .subscribe((data:group[]) => {
         this.list = [];
         data.forEach(element => {
           this.list.push(element.paymode);
         });
        });
       }
 }
  dailyreport(vrdt1:any,vrdt2:any,choice:any,choice1:any){
    let dt = this.vrdt1;
    let dt2 = this.vrdt2;
    let doc = this.choice;
    let doc1 = this.choice1;
  if(doc == undefined)
  {
   alert("Sorry ! Please Select Choice")
  }
  else
  {
    if(doc == "Details")
    {
      this.router.navigate(['/homepage/dailyacitivy-details/' + dt,dt2]);
    }
    else if(doc == "PaymentMode")
    {
      this.router.navigate(['/homepage/dailyacitivy-Paymode/' + dt,dt2,doc1]);
    }
    else if(doc == "Summary")
    {
      this.router.navigate(['/homepage/dailyacitivy-Summary/' + dt,dt2]);
    }
    else if(doc == "Head Wise Details")
    {
      this.router.navigate(['/homepage/dailyacitivy-Heads/' + dt,dt2,doc1]);
    }
    else if(doc == "Head Wise Daily")
    {
     this.router.navigate(['/homepage/dailyacitivy-Headsday/' + dt,dt2,doc1]);
    }
    else if(doc == "Head Wise Monthly")
    {
     this.router.navigate(['/homepage/dailyacitivy-Headssummonth/' + dt,dt2,doc1]);
    }
  }
}


}
