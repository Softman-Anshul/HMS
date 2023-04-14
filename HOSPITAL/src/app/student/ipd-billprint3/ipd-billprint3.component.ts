import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import {Router, ActivatedRoute} from '@angular/router';
import { OPD,roomshift,IPDPAYMENT} from '../../students';
import { billheading,billdetails} from '../../students';

@Component({
  selector: 'app-ipd-billprint3',
  templateUrl: './ipd-billprint3.component.html',
  styleUrls: ['./ipd-billprint3.component.css']
})
export class IPDBillprint3Component implements OnInit {
  uname = '';
  company="";
  add="";
  city="";
  phone="";
  profle="";
  OPD = new OPD();
  heads = new billheading();
  details = new billdetails();
  Ward1 = new roomshift();
  heads1 = new billheading();
  billamt=0;

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

  const routerParams = this.routes.snapshot.params;
  let dcmntNo = routerParams["dcmntNo"];
  let uhID = routerParams["uhID"]
  let billno = routerParams["billno"];
  let yrs = routerParams["yrs"]

//call roomhistory
this._studentservice.getshifttable(dcmntNo,uhID)
.subscribe((data:any) => {
this.Ward1 = data[0];
}); 

//patient information
this._studentservice.getipdregRecp(dcmntNo,uhID)
.subscribe((data:any) => {
this.OPD = data[0];
});

 //call bill
 this._studentservice.getipdbillheadingdischarge(billno,yrs)
 .subscribe((data:any) => {
   this.heads1 = data[0];
   this.billamt = this.heads.grandTotal - this.heads1.discountAmt;
  });

this._studentservice.getipdbilldetailsdischarge(billno,yrs)
.subscribe((data:any) => {
this.heads.tests = data;

this.heads.vchrNo = data[0].vchrNo;

for(let i=0;i<this.heads.tests.length;i++){
  this.heads.grandTotal +=  parseInt(this.heads.tests[i].totalAmt.toString());
 }
 this.heads.paydue = this.heads.grandTotal - this.heads.adv - this.heads.discountAmt ;
});

}

printComponent() {
window.print();
}
}
