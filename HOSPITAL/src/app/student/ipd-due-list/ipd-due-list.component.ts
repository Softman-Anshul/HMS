import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentsService } from '../../students.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { OPD, IPDPAYMENT, group, billheading } from '../../students';
import { formatDate } from '@angular/common';
import { defaultConfirmData, needConfirmation } from 'src/app/confirm-dialog/confirm-dialog.decorator';

@Component({
  selector: 'app-ipd-due-list',
  templateUrl: './ipd-due-list.component.html',
  styleUrls: ['./ipd-due-list.component.css']
})
export class IpdDueListComponent implements OnInit {
  OPD = new OPD();
  uname = '';
  Deposit = new IPDPAYMENT();
  declare group: group[];
  declare Details: IPDPAYMENT[];
  bill = new billheading();
  totalrecamt = 0;
  totalrefund = 0;
  totalnetamt = 0;
  resourcesLoaded = true;

  constructor(private _studentservice: StudentsService,
    private routes: ActivatedRoute,
    private Router: Router,
    public dialogRef: MatDialogRef<IpdDueListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { OPD: OPD },
  ) {
    this.OPD = data.OPD
    this.Deposit.ipdNo = this.OPD.dcmntNo;
    this.Deposit.uhID = this.OPD.uhID;
    this.Deposit.narration = "Due Deposit";
    this.Deposit.paymode = "CASH";

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

    this._studentservice.paymentrecno()
      .subscribe((data: any) => {
        this.Deposit.recno = data;
      });

    //paymentmode
    this._studentservice.gettablegroup()
      .subscribe((data: group[]) => {
        this.group = data;
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
    window.location.reload()
  }

  @needConfirmation()
  confirm() {
    let id = this.Deposit.recno;
    let dt = this.Deposit.ipdDate;
    let yrs = this.Deposit.Years;
    let dcmntno = this.OPD.dcmntNo;
    let uhid = this.OPD.uhID;
    this.Router.navigate(['homepage/ipdreceipt/' + id, dt, yrs, dcmntno, uhid]);

  }

  validation(){
    if(Number(this.Deposit.advanceReceived) + Number(this.Deposit.Refundpayment) != Number(this.OPD._dueamt)) {
      return false;
    }
    return true;
  }

  onsave() {
    this.resourcesLoaded = false;
    if (this.validation()) {
      this._studentservice.ipd_dueupdate(this.Deposit)
        .subscribe(data => {
          this._studentservice.ipd_payment(this.Deposit)
            .subscribe(data => {
              defaultConfirmData.cancel = this.cancel
              defaultConfirmData.title = "Print Receipts"
              defaultConfirmData.message = "Do you want to print receipts?"
              this.resourcesLoaded = true;
              this.confirm()
            });
        });
    } else {
      this.resourcesLoaded = true;
      alert("Total Payment is greater than due amount")
    }
  }

  public discount(): void {
    // this.bill.discountAmt =  this.OPD.paydue - this.Deposit.advanceReceived;
  }
}
