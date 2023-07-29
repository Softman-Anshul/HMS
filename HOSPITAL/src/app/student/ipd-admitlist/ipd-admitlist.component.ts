import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentsService } from '../../students.service';
import { Router } from '@angular/router';
import { IPDRegComponent } from '../ipd-reg/ipd-reg.component';
import { OPD, Students } from '../../students';
import { IPDPaymentComponent } from '../ipd-payment/ipd-payment.component';
import { IPDPaymentdetailsComponent } from '../ipd-paymentdetails/ipd-paymentdetails.component';
import { IPDRoomshiftingComponent } from '../ipd-roomshifting/ipd-roomshifting.component';
import { IPDBillingComponent } from '../ipd-billing/ipd-billing.component';
import { IPDBilldischargeComponent } from '../ipd-billdischarge/ipd-billdischarge.component';
import { DueamountListComponent } from '../Test_due_list/Test_due_list.component';
import { IpdFileDocumentComponent } from '../ipd-file-document/ipd-file-document.component';
import { IpdRegEditComponent } from '../ipd-reg-edit/ipd-reg-edit.component';
import { IpdMlcComponent } from '../ipd-mlc/ipd-mlc.component';
import { IpdDoctorchangeComponent } from '../ipd-doctorchange/ipd-doctorchange.component';
import { IpdDischargecardComponent } from '../ipd-dischargecard/ipd-dischargecard.component';
import { IPDDisccertificateComponent } from '../ipd-disccertificate/ipd-disccertificate.component';
import { IpdRiskComponent } from '../ipd-risk/ipd-risk.component';
import { OpdslipaComponent } from '../PRINT-OPD-SLIP/PRINT-OPD-SLIP.component';

@Component({
  selector: 'app-ipd-admitlist',
  templateUrl: './ipd-admitlist.component.html',
  styleUrls: ['./ipd-admitlist.component.css']
})

export class IPDADMITLISTComponent implements OnInit {
  Choice = "ALL";
  declare vrdt1: string;
  declare vrdt2: string;
  declare search: string;
  declare OPD: OPD[];
  declare Ward: OPD[];
  declare selected: OPD;
  declare bal: Students[];
  mouseX = "";
  mouseY = "";
  hoverDcmntNo = "";
  hoverUhID = "";

  constructor(private _studentservice: StudentsService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    //call Date
    this.vrdt1 = new Date().toISOString().split('T')[0];
    this.vrdt2 = new Date().toISOString().split('T')[0];

     this._studentservice.getipdadmit()
    .subscribe((data:OPD[]) => {
      this.OPD= data;
  });

  }
  loaddata(students: any, event: any) {
    this.mouseX = event.clientX + 10;
    this.mouseY = event.clientY;
    this.hoverDcmntNo = students.dcmntNo;
    this.hoverUhID = students.uhID;
  }
  newreg() {

    this.router.navigate(['homepage/ipdreg']);

    // const dialogRef = this.dialog.open(IPDRegComponent, {
    //   height:'650px', width: '1500px',
    //   data: {OPD:undefined},
    // });

    // dialogRef.afterClosed().subscribe(result => {
    // });
  }
  edit(dcmntNo: any, uhID: any) {
    let id = dcmntNo;
    let dt = uhID;
    let ty = "IPD";
    const dialogRef = this.dialog.open(IpdRegEditComponent, {
      height: '450px', width: '1500px',
      data: { OPD: dcmntNo, OPD2: uhID, OPD3: ty },
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  payment() {
    const dialogRef = this.dialog.open(IPDPaymentComponent, {
      height: '550px', width: '850px',
      data: { OPD: this.selected },

    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  testbooking() {
    let id = this.selected.dcmntNo;
    let dt = this.selected.uhID;
    let ty = "IPD";
    this.router.navigate(['/homepage/newbooking/', { id: id, dt: dt, ty: ty }]);
  }
  paymentdetails() {
    const dialogRef = this.dialog.open(IPDPaymentdetailsComponent, {
      height: '650px', width: '750px',
      data: { OPD: this.selected },
      
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  billing() {
    this.hideTooltip()
    const dialogRef = this.dialog.open(IPDBillingComponent, {
      height: '750px', width: '950px',
      data: { OPD: this.selected },
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  billdischarge() {
    const dialogRef = this.dialog.open(IPDBilldischargeComponent, {
      height: '750px', width: '950px',
      data: { OPD: this.selected },
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  roomshifting() {
    const dialogRef = this.dialog.open(IPDRoomshiftingComponent, {
      height: '550px', width: '850px',
      data: { OPD: this.selected },
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  searchquery() {
    this._studentservice.ipdsearch(this.search, this.Choice)
      .subscribe((data: OPD[]) => {
        this.OPD = data;
      });
  }
  searchdirect() {
    this._studentservice.ipdsearch(this.search, 'Direct')
      .subscribe((data: OPD[]) => {
        this.OPD = data;
      });
  }
  Dueamt(dcmntNo: any, uhID: any) {
    const dialogRef = this.dialog.open(DueamountListComponent, {
      height: '750px', width: '650px',
      data: { dcmntNo, uhID },
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  Document() {
    const dialogRef = this.dialog.open(IpdFileDocumentComponent, {
      height: '550px', width: '650px',
      data: { OPD: this.selected },
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  MLC() {
    const dialogRef = this.dialog.open(IpdMlcComponent, {
      height: '750px', width: '950px',
      data: { OPD: this.selected },
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  sticker() {
    let dcmntNo = this.selected.dcmntNo;
    let dt = this.selected.opdDate;
    this.router.navigate(['/homepage/sticker/', dcmntNo, dt]);
  }
  emercer() {
    let dcmntNo = this.selected.dcmntNo;
    let dt = this.selected.opdDate;
    this.router.navigate(['/homepage/emer_certificate/', dcmntNo, dt]);

  }
  doctorchange(): void {
    const dialogRef = this.dialog.open(IpdDoctorchangeComponent, {
      height: '550px', width: '650px',
      data: { OPD: this.selected },
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  fullpayment() {
    let uhID = this.selected.uhID;
    
    this.router.navigate(['fullpayment/', uhID]);
  }
  dischargecard(): void {
    const dialogRef = this.dialog.open(IpdDischargecardComponent, {
      height: '750px', width: '950px',
      data: { OPD: this.selected },
    });

    dialogRef.afterClosed().subscribe(result => {
    });

  }

  gatepass() {
    let dcmntNo = this.selected.dcmntNo;
    let dt = this.selected.opdDate;
    let uhID = this.selected.uhID;
    this.router.navigate(['homepage/gatepass/', dcmntNo, dt, uhID]);
  }
  reportrec() {
    let dcmntNo = this.selected.dcmntNo;
    let dt = this.selected.opdDate;
    let uhID = this.selected.uhID;
    this.router.navigate(['homepage/reportrec/', dcmntNo, dt, uhID]);
  }

  hideTooltip() {
    let tooltip = document.getElementById("tooltip");
    if (tooltip != null) {
      tooltip.style.display = 'none';
    }
  }
  paymentstatus() {
    // const dialogRef = this.dialog.open(IpdPaymentStatusComponent, {
    //   height:'650px', width: '1150px',
    //       data: {OPD:this.selected},
    // });

    // dialogRef.afterClosed().subscribe(result => {
    // });
    this.router.navigate(['homepage/paymentstatus/']);
  }
  discertificate() {
    const dialogRef = this.dialog.open(IPDDisccertificateComponent, {
      height: '150px', width: '550px',
      data: { OPD: this.selected },
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

    statuschange(students:any): void {
      const dialogRef = this.dialog.open(IpdRiskComponent, {
        height:'250px', width: '250px',
            data: {OPD:students},
      });
    
      dialogRef.afterClosed().subscribe(result => {
      });
      
      }
}
