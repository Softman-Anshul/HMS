import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentsService } from '../../students.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { OPD, IPDPAYMENT, group } from '../../students';
import { formatDate } from '@angular/common';
import { defaultConfirmData, needConfirmation } from 'src/app/confirm-dialog/confirm-dialog.decorator';

@Component({
  selector: 'app-ipd-payment',
  templateUrl: './ipd-payment.component.html',
  styleUrls: ['./ipd-payment.component.css']
})
export class IPDPaymentComponent implements OnInit {
  OPD = new OPD();
  uname = '';
  Deposit = new IPDPAYMENT();
  declare group: group[];
  declare Details: IPDPAYMENT[];
  totalrecamt = 0;
  totalrefund = 0;
  totalnetamt = 0;

  constructor(private _studentservice: StudentsService,
    private routes: ActivatedRoute,
    private Router: Router,
    public dialogRef: MatDialogRef<IPDPaymentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { OPD: OPD },
  ) {
    this.OPD = data.OPD
    this.Deposit.ipdNo = this.OPD.dcmntNo;
    this.Deposit.uhID = this.OPD.uhID;
    this.Deposit.narration = "Deposit";
  }


  ngOnInit(): void {
    const routerParams = this.routes.snapshot.params;
    this.Deposit.ipdDate = formatDate(new Date(), 'yyyy-MM-dd', 'en_US').split('T')[0]
    this.Deposit.rectime = new Date().toLocaleTimeString('en-US', { hour12: true, hour: "numeric", minute: "numeric" });
    this.Deposit.reason = "Payment";

    //call company for f.years
    this._studentservice.getCompany()
      .subscribe((data: any) => {
        this.OPD.Years = data[0].years;
        this.Deposit.Years = data[0].years;
      });

    //call Recno for payment
    this._studentservice.paymentrecno()
      .subscribe((data: any) => {
        this.Deposit.recno = data;
      });
    //paymentmode
    this._studentservice.gettablegroup()
      .subscribe((data: group[]) => {
        this.group = data;
        this.Deposit.paymode = data[0].paymode;
      });

    //call payment
    this._studentservice.getipdpaymentdetails(this.OPD.dcmntNo, this.OPD.uhID)
      .subscribe((data: IPDPAYMENT[]) => {
        this.Details = data;

        for (let i = 0; i < this.Details.length; i++) {
          this.totalrecamt += parseInt(this.Details[i].advanceReceived.toString());
          this.totalrefund += parseInt(this.Details[i].Refundpayment.toString());
        }
        this.totalnetamt = this.totalrecamt - this.totalrefund;
      });

    //call username 
    this.uname = this._studentservice.getUsername();
    if (this.uname == '') {
      this.Router.navigate(['']);
    }

    this.Deposit.uname = this.uname;

  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  cancel(router: Router) {
    window.location.reload();
  }

  @needConfirmation()
  confirm() {
    let id = this.Deposit.recno;
    let dt = this.Deposit.ipdDate;
    let yrs = this.Deposit.Years;
    let dcmntno = this.OPD.dcmntNo;
    let uhid = this.OPD.uhID;
    this.Router.navigate(['homepage/ipdreceipt/' + id, dt, yrs, dcmntno, uhid]);
    this.onNoClick();
  }

  onsave() {
    if (this.validation()) {
    this._studentservice.ipd_payment(this.Deposit)
      .subscribe(data => {

        defaultConfirmData.cancel = this.cancel
        defaultConfirmData.title = "Print Receipts"
        defaultConfirmData.message = "Do you want to print receipts?"
        this.confirm()

      });
    }
  }
  validation(): boolean {
    if (this.Deposit.advanceReceived == 0 || this.Deposit.advanceReceived == undefined) {
      alert("Amount is mandatory");
      return false
    }
    return true
  }
}
