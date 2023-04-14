import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import { OPD} from '../../students';
import { group,IPDPAYMENT } from '../../students';

@Component({
  selector: 'app-ipd-paymentmodechange',
  templateUrl: './ipd-paymentmodechange.component.html',
  styleUrls: ['./ipd-paymentmodechange.component.css']
})
export class IPDPaymentmodechangeComponent implements OnInit {
  OPD = new OPD();
  OPD1 = new OPD();
  OPD2 = new OPD();
  OPD3 = new OPD();
  uname = '';
  declare group : group[];
  payment = new IPDPAYMENT();

  constructor(private _studentservice:StudentsService,
    private routes : ActivatedRoute,
    private Router :Router, 
    public dialogRef: MatDialogRef<IPDPaymentmodechangeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {OPD:OPD,OPD1:OPD,OPD2:OPD,OPD3:OPD},
   ) {
    this.OPD = data.OPD
    this.OPD1 = data.OPD1
    this.OPD2 = data.OPD2
    this.OPD3 = data.OPD3

    }

  ngOnInit(): void {
    const routerParams = this.routes.snapshot.params;
    //paymentmode
    this._studentservice.gettablegroup()
    .subscribe((data:group[]) => {
    this.group = data;
    });
// patient details like pntname,age etc
    this._studentservice.getipdregRecp(this.OPD2,this.OPD3)
    .subscribe((data:any) => {
    this.OPD = data[0];
    });
  //for paitnet payment 
    this._studentservice.getipdregRecppayadmit(this.OPD,this.OPD1)
    .subscribe((data:any) => {
    this.payment = data[0];
    });

    //call username 
 this.uname = this._studentservice.getUsername();
 if(this.uname == '')
 {
   this.Router.navigate(['']);
 }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onsave(){
    this._studentservice.ipdpaymentmodechange(this.payment.recno,this.payment.ipdDate,this.payment.paymode)
   .subscribe(data => {
    alert('Records Saved...Thanks');
    this.onNoClick();
   window.location.reload();
   });

  }
}