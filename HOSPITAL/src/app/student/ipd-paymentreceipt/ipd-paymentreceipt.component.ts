import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import {Router, ActivatedRoute} from '@angular/router';
import { IPDPAYMENT, OPD, Ward} from '../../students';

@Component({
  selector: 'app-ipd-paymentreceipt',
  templateUrl: './ipd-paymentreceipt.component.html',
  styleUrls: ['./ipd-paymentreceipt.component.css']
})
export class IPDPaymentreceiptComponent implements OnInit {
  OPD = new OPD();
  payment = new IPDPAYMENT();
  Ward1 = new Ward();
  uname = '';
  company="";
  add="";
  city="";
  phone="";
  profle="";
  email = "";
  website= "";

  constructor(private _studentservice:StudentsService,
    private routes : ActivatedRoute,
    private Router :Router, 
   ) {}

  ngOnInit(): void {
 const routerParams = this.routes.snapshot.params;
    // this.payment.recno = routerParams["id"];
    // this.payment.ipdDate = routerParams["dt"];

    this._studentservice.getipdregRecp(routerParams["dcmntno"],routerParams["uhid"])
    .subscribe((data:any) => {
    this.OPD = data[0];
    });

    this._studentservice.getipdregRecppayadmit(routerParams["id"],routerParams["dt"])
    .subscribe((data:any) => {
    this.payment = data[0];
    });
    
    this._studentservice.getwardbyipdno(routerParams["dcmntno"],routerParams["uhid"])
    .subscribe((data:any) => {
    this.Ward1 = data[0];
    });

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
  
    //call username 
 this.uname = this._studentservice.getUsername();
 if(this.uname == '')
 {
   this.Router.navigate(['']);
 }

}
printComponent() {
  const element = document.getElementById("print")
  if (element != null) {
    let body = document.createElement("body")
    body.appendChild(element)
    document.body = body;
    window.print();
    window.location.reload()
  }
}

amount(){
  return this._studentservice.numberToText(this.payment.advanceReceived)
}
Ipdlist(){
  this.Router.navigate(['homepage/ipdlist/']);
}
}