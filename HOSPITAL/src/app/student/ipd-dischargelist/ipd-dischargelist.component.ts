import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentsService } from '../../students.service';
import { Router } from '@angular/router';
import { billheading, OPD, Students } from '../../students';
import { IPDPaymentdetailsComponent } from '../ipd-paymentdetails/ipd-paymentdetails.component';
import { IpdDueListComponent } from '../ipd-due-list/ipd-due-list.component';
import { IpdMlcComponent } from '../ipd-mlc/ipd-mlc.component';
import { IpdDischargecardComponent } from '../ipd-dischargecard/ipd-dischargecard.component';

@Component({
  selector: 'app-ipd-discharge',
  templateUrl: './ipd-dischargelist.component.html',
  styleUrls: ['./ipd-dischargelist.component.css']
})
export class IPDDISCHARGEComponent implements OnInit {
  Choice = "ALL";
  declare vrdt1: string;
  declare vrdt2: string;
  declare OPD: OPD[];
  OPD1 = new OPD();
  declare selected: OPD;
  declare search: string;

  billamt = 0;
  dueamt=0;

  uname = ''
  declare permission: JSON
  declare showbillprint: boolean
  declare showbilladvance: boolean
  declare showbillpdetails: boolean
  declare showpaymentdetails : boolean
  declare showcertificate: boolean
  declare showmlc: boolean
  declare showgatepass: boolean
  declare showecert: boolean
  declare showsticker: boolean
  declare showdischargecard: boolean
  declare showfullpayment: boolean
  declare showsearch: boolean
  declare showduerec: boolean
  declare showedit: boolean


  constructor(private _studentservice: StudentsService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    //call Date
    this.vrdt1 = new Date().toISOString().split('T')[0];
    this.vrdt2 = new Date().toISOString().split('T')[0];

    this._studentservice.getipddischarge(this.vrdt1)
      .subscribe((data: OPD[]) => {
        this.OPD = data;

        for (let i = 0; i < this.OPD.length; i++) {
          this.billamt += parseInt(this.OPD[i].grandTotal.toString());
          this.dueamt += parseInt(this.OPD[i].paydue.toString());
         
        }
      });

 //call username 
 this.uname = this._studentservice.getUsername();
 if (this.uname == '') {
   
   this.router.navigate(['']);
   
 }
//call permission
this._studentservice.getuserpermission(this.uname)
.subscribe(data => {
 this._studentservice.permission = data
 if (this._studentservice.checkPermission("Menu", "IPD Discharge", "inst") ) {

  this.showbillprint = JSON.parse(JSON.stringify(this._studentservice.permission))["IPD Discharge"]["Bill Print"]["inst"] == "Y";
  this.showbilladvance = JSON.parse(JSON.stringify(this._studentservice.permission))["IPD Discharge"]["Bill Print Advance"]["inst"] == "Y";
  this.showbillpdetails = JSON.parse(JSON.stringify(this._studentservice.permission))["IPD Discharge"]["Bill Print Details"]["inst"] == "Y";
  this.showpaymentdetails = JSON.parse(JSON.stringify(this._studentservice.permission))["IPD Discharge"]["Payment Details"]["inst"] == "Y";
  this.showcertificate = JSON.parse(JSON.stringify(this._studentservice.permission))["IPD Discharge"]["Discharge Certificate"]["inst"] == "Y";
  this.showmlc = JSON.parse(JSON.stringify(this._studentservice.permission))["IPD Discharge"]["MLC"]["inst"] == "Y";
  this.showgatepass = JSON.parse(JSON.stringify(this._studentservice.permission))["IPD Discharge"]["GatePass"]["inst"] == "Y";
  this.showecert = JSON.parse(JSON.stringify(this._studentservice.permission))["IPD Discharge"]["Emergency Certificate"]["inst"] == "Y";
  this.showsticker = JSON.parse(JSON.stringify(this._studentservice.permission))["IPD Discharge"]["Sticker"]["inst"] == "Y";
  this.showdischargecard = JSON.parse(JSON.stringify(this._studentservice.permission))["IPD Discharge"]["Discharge Card"]["inst"] == "Y";
  this.showfullpayment = JSON.parse(JSON.stringify(this._studentservice.permission))["IPD Discharge"]["Full Payment"]["inst"] == "Y";
  this.showsearch = JSON.parse(JSON.stringify(this._studentservice.permission))["IPD Discharge"]["Search"]["inst"] == "Y";
  this.showduerec = JSON.parse(JSON.stringify(this._studentservice.permission))["IPD Discharge"]["Due Receive"]["inst"] == "Y";
  this.showedit = JSON.parse(JSON.stringify(this._studentservice.permission))["IPD Discharge"]["IPD Edit"]["inst"] == "Y";

  
 }
 else{
   this.router.navigate(['/homepage/main'])
 }
});

  }
  bill2() {
    let billno = this.selected.vchrNo;
    let yrs = this.selected.Years;
    let dcmntNo = this.selected.dcmntNo;
    let uhID = this.selected.uhID;
    this.router.navigate(['/homepage/ipdbill2/' + billno, yrs, dcmntNo, uhID]);
  }
  bill3() {
    let billno = this.selected.vchrNo;
    let yrs = this.selected.Years;
    let dcmntNo = this.selected.dcmntNo;
    let uhID = this.selected.uhID;
    this.router.navigate(['/homepage/ipdbill3/' + billno, yrs, dcmntNo, uhID]);
  }
  bill4() {
    let billno = this.selected.vchrNo;
    let yrs = this.selected.Years;
    let dcmntNo = this.selected.dcmntNo;
    let uhID = this.selected.uhID;
    this.router.navigate(['/homepage/ipdbill4/' + billno, yrs, dcmntNo, uhID]);
  }
  searchquery() {
    this._studentservice.ipdsearch_discharge(this.search, this.vrdt1, this.vrdt2, this.Choice)
      .subscribe((data: OPD[]) => {
        this.OPD = data;
        this.billamt = 0;
        this.dueamt=0;
        for (let i = 0; i < this.OPD.length; i++) {
          this.billamt += parseInt(this.OPD[i].grandTotal.toString());
          this.dueamt += parseInt(this.OPD[i].paydue.toString());
         
        }
      });
  }
  emercer() {
    let dcmntNo = this.selected.dcmntNo;
    let dt = this.selected.opdDate;
    this.router.navigate(['/homepage/emer_certificate/', dcmntNo, dt]);

  }
  searchdirect() {
    this._studentservice.ipdsearch_discharge(this.search, this.vrdt1, this.vrdt2, 'Direct')
      .subscribe((data: OPD[]) => {
        this.OPD = data;
        this.OPD = data;
        this.billamt = 0;
        this.dueamt=0;
        for (let i = 0; i < this.OPD.length; i++) {
          this.billamt += parseInt(this.OPD[i].grandTotal.toString());
          this.dueamt += parseInt(this.OPD[i].paydue.toString());
         
        }
      });
  }
  paymentdetails() {
    const dialogRef = this.dialog.open(IPDPaymentdetailsComponent, {
      height: '650px', width: '850px',
      data: { OPD: this.selected },
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  Dueamt(students: any) {
    if (students.paydue = 0) {
      alert("Sorry ! Due Balance is Zero ")
    }
    else {
      const dialogRef = this.dialog.open(IpdDueListComponent, {
        height: '500px', width: '750px',
        data: { OPD: students },
      });

      dialogRef.afterClosed().subscribe(result => {
        window.location.reload();
      });
    }
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
  certificate() {
    if (String(this.selected.Status) == "L.A.M.A.") {
      let dcmntNo = this.selected.dcmntNo;
      let uhID = this.selected.uhID;
      this.router.navigate(['lama/', dcmntNo, uhID]);
    }
    else if (String(this.selected.Status) == "Expired") {
      let dcmntNo = this.selected.dcmntNo;
      let uhID = this.selected.uhID;
      this.router.navigate(['death/', dcmntNo, uhID]);
    }
    else if (String(this.selected.Status) == "Reffered") {
      let dcmntNo = this.selected.dcmntNo;
      let uhID = this.selected.uhID;
      this.router.navigate(['reffer/', dcmntNo, uhID]);
    }
    else {
      alert("Sorry ! No need for Certificate")
    }
  }
  gatepass() {
    let dcmntNo = this.selected.dcmntNo;
    let dt = this.selected.opdDate;
    let uhID = this.selected.uhID;
    this.router.navigate(['homepage/gatepass/', dcmntNo, dt, uhID]);
  }
  dischargecard(): void {
    const dialogRef = this.dialog.open(IpdDischargecardComponent, {
      height: '750px', width: '950px',
      data: { OPD: this.selected },
    });

    dialogRef.afterClosed().subscribe(result => {
    });

  }

  fullpayment() {
    let uhID = this.selected.uhID;
    this.router.navigate(['fullpayment/', uhID]);
  }
  
  edit(students: any) {
    this.router.navigate(['/homepage/ipdedita/',students.vchrNo,students.dcmntNo,students.uhID,students.opdDate]);
  }
}
