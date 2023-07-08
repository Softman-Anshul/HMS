import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import {Router, ActivatedRoute} from '@angular/router';
import { OPD,Ward,IPDPAYMENT} from '../../students';
import { billheading,billdetails} from '../../students';


@Component({
  selector: 'app-ipd-billprint1',
  templateUrl: './ipd-billprint1.component.html',
  styleUrls: ['./ipd-billprint1.component.css']
})
export class IPDBillprint1Component implements OnInit {
  uname = '';
  company="";
  add="";
  city="";
  phone="";
  profle="";
  OPD = new OPD();
  heads = new billheading();
  details = new billdetails();
  Ward = new Ward();
  declare Details : IPDPAYMENT[];
  totalrecamt=0;
  totalrefund=0;
  totaladvance=0;
  balamount=0;

  constructor(private _studentservice:StudentsService,
    private routes : ActivatedRoute,
    private Router :Router, 
   ) {}

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

      //bill details load
      const routerParams = this.routes.snapshot.params;
      let dcmntNo = routerParams["dcmntNo"];
      let uhID = routerParams["uhID"]
  this._studentservice.getipdbilldetails(dcmntNo,uhID)
  .subscribe((data:any) => {
  this.heads.tests = data;
  for(let i=0;i<this.heads.tests.length;i++){
    this.heads.grandTotal +=  parseInt(this.heads.tests[i].totalAmt.toString());
   }
});

     //call payment
     this._studentservice.getipdpaymentdetails(dcmntNo,uhID)
     .subscribe((data:IPDPAYMENT[]) => {
     this.Details= data;
   
     for(let i=0;i<this.Details.length;i++){
      this.totalrecamt +=  parseInt(this.Details[i].advanceReceived.toString());
      this.totalrefund +=  parseInt(this.Details[i].Refundpayment.toString());
     }
     this.totaladvance = this.totalrecamt - this.totalrefund;
     this.balamount = this.heads.grandTotal - this.totaladvance;
   });
   
    //patient information
    this._studentservice.getipdregRecp(dcmntNo,uhID)
    .subscribe((data:any) => {
    this.OPD = data[0];
    });

    //call roomhistory
 this._studentservice.getwardbyipdno(dcmntNo,uhID)
 .subscribe((data:any) => {
 this.Ward = data[0];
 }); 

  }
  
  printComponent() {
    window.print();
  }
  Ipdlist(){
    this.Router.navigate(['homepage/ipdlist/']);
  }
}
