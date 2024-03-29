import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentsService } from '../../students.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { IPDPAYMENT, OPD } from '../../students';
import { testmaster, Test } from '../../students';
import { billheading, billdetails } from '../../students';
import { formatDate } from '@angular/common';
import { defaultConfirmData, needConfirmation } from 'src/app/confirm-dialog/confirm-dialog.decorator';


@Component({
  selector: 'app-ipd-billing',
  templateUrl: './ipd-billing.component.html',
  styleUrls: ['./ipd-billing.component.css']
})
export class IPDBillingComponent implements OnInit {
  test = new Test();
  OPD = new OPD();
  uname = '';
  declare selected: billheading;
  declare testmaster: testmaster[];
  declare index: number;
  // Students = new Students();
  heads = new billheading();
  details = new billdetails();
  declare Details: IPDPAYMENT[];
  totalrecamt = 0;
  totalrefund = 0;
  totalnetamt = 0;
  declare testtype: string[];
  isTypeSelected = false;
  declare alltestmaster: testmaster[];
  dueAmount = 0;
  allowedSave = false;

  constructor(private _studentservice: StudentsService,
    private routes: ActivatedRoute,
    private Router: Router,
    public dialogRef: MatDialogRef<IPDBillingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { OPD: OPD },
  ) {
    this.OPD = data.OPD
    this.heads.dcmntNo = this.OPD.dcmntNo;
    this.heads.uhID = this.OPD.uhID;
    this.heads.roomno = String(this.OPD.roomNo)
    this.heads.bedno = String(this.OPD.Bedno)
    // this.heads.roomno = this.OPD.roomNo;
  }

  ngOnInit(): void {
    //call username 
    this.uname = this._studentservice.getUsername();
    if (this.uname == '') {
      this.Router.navigate(['']);
    }

    const routerParams = this.routes.snapshot.params;
    this.heads.uname = this.uname;

    //  call maxvchrno
    this._studentservice.ipdgetmaxvchrno()
      .subscribe((data: any) => {
        this.heads.vchrNo = data;
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


    this.heads.vchrDate = formatDate(new Date(), 'yyyy-MM-dd', 'en_US').split('T')[0];
    //call company for f.years
    this._studentservice.getCompany()
      .subscribe((data: any) => {
        this.OPD.Years = data[0].years;
        this.heads.Years = this.OPD.Years;
      });

    //call Test for Booking
    this._studentservice.gettabletestname()
      .subscribe((data: testmaster[]) => {
        this.testmaster = data;
      });


    //call save entry
    this._studentservice.getipdbilldetails(this.OPD.dcmntNo, this.OPD.uhID)
      .subscribe((data: any) => {

        if (data == undefined) {

        }
        else {
          this.heads.tests = data;
          this.heads.vchrNo = data[0].vchrNo;

          for (let i = 0; i < this.heads.tests.length; i++) {
            this.heads.grandTotal += parseInt(this.heads.tests[i].totalAmt.toString());
          }

          if (this.heads.tests.length > 0) {
            this.allowedSave = true;
          }

          this._studentservice.gettestduelistsum(this.OPD.dcmntNo, this.OPD.uhID)
            .subscribe((data1: any) => {
              if (data1 == null || data1.length <= 0) {
                this.dueAmount = 0;
              } else {
                this.dueAmount = 0;
                console.log(data1);
                for (let i = 0; i < data1.length; i++) {
                  this.dueAmount += parseInt(data1[i].balamt.toString());
                }
              }
            });
        }
      });


  }

  delete(item: any) {
    this.heads.tests.forEach((value: any, index: any) => {
      if (value.itmName == item) {
        this.heads.tests.splice(index, 1);

        this.heads.grandTotal = (this.heads.grandTotal - value.totalAmt)

        if (this.heads.tests.length < 1) {
          this.allowedSave = false;
        }
      }
    });
  }

  selectTest() {
    this.index = 0;
    for (let i = 0; i < this.testmaster.length; i++) {
      if (this.testmaster[i].chrgsName.includes(this.test.itmName)) {
        this.index = i;
        this.details.itmChrgs = Number(this.testmaster[this.index].chrgAmt)
        this.details.totalAmt = Number(this.testmaster[this.index].chrgAmt)
        this.details.itmQty = 1;
        this.details.Remark = 'Day';
        break;

      }
    }

  }

  public addItem(): void {
    this.heads.tests.push(this.details)
    if (this.heads.tests.length > 0) {
      this.allowedSave = true;
    }
    this.heads.grandTotal = (this.heads.grandTotal + this.details.totalAmt)
    this.details.itmName = this.test.itmName
    this.details = new billdetails()
    this.test.itmName = "";
    document.getElementById("ItemName")?.focus();
  }
  public getAmount(): void {
    this.details.totalAmt = this.details.itmQty * this.details.itmChrgs - this.details.itmDiscntPrsnt
  }
  public getAmountdp(): void {
    this.details.itmDiscntPrsnt = this.details.itmQty * this.details.itmChrgs * this.details.disp / 100;
    this.getAmount();
  }
  public getAmountdamt(): void {
    this.details.disp = 0;
    this.getAmount();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  moveUp(num: any) {
    if (num == 0) {
      return
    }
    var temp = this.heads.tests[num - 1];
    this.heads.tests[num - 1] = this.heads.tests[num];
    this.heads.tests[num] = temp;

  }
  moveDown(num: any) {
    if (num < this.heads.tests.length - 1) {
      var tmp = this.heads.tests[num + 1];
      this.heads.tests[num + 1] = this.heads.tests[num];
      this.heads.tests[num] = tmp;
    }
  }

  cancel(router: Router) {
    router.navigate(['/homepage/ipdlist']);
    window.location.reload();
  }

  @needConfirmation()
  confirm() {
    this.Router.navigate(['/homepage/ipdbill1/' + this.heads.dcmntNo, this.heads.uhID]);
    this.onNoClick();
  }

  onsave() {
    const routerParams = this.routes.snapshot.params;
    this._studentservice.createbilling(this.heads)
      .subscribe(data => {
        this._studentservice.createbillingdetails(this.heads)
          .subscribe(data => {
            defaultConfirmData.cancel = this.cancel
            defaultConfirmData.title = "Print Estimate Bill"
            defaultConfirmData.message = "Do you want to print Estimate Bill?"
            this.confirm()
          });
      });
  }

  updateTestMaster() {
    this.testmaster = [];
    for (let i = 0; i < this.alltestmaster.length; i++) {
      if (this.alltestmaster[i].type == this.test.chtype) {
        this.testmaster.push(this.alltestmaster[i])
      }
    }
  }

  check() {
    let tooltip = document.getElementById("tool-tip");
    if (tooltip != null) {
      tooltip.setAttribute("style", "display: block;")
    }
  }

}
