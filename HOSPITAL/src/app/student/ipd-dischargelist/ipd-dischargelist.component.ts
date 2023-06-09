import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentsService } from '../../students.service';
import { Router } from '@angular/router';
import { billheading, OPD, Students } from '../../students';
import { IPDPaymentdetailsComponent } from '../ipd-paymentdetails/ipd-paymentdetails.component';
import { IpdDueListComponent } from '../ipd-due-list/ipd-due-list.component';
import { IpdMlcComponent } from '../ipd-mlc/ipd-mlc.component';

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
      });
  }
  bill2() {
    let billno = this.selected.vchrNo;
    let yrs = this.selected.Years;
    let dcmntNo = this.selected.dcmntNo;
    let uhID = this.selected.uhID;
    this.router.navigate(['ipdbill2/' + billno, yrs, dcmntNo, uhID]);
  }
  bill3() {
    let billno = this.selected.vchrNo;
    let yrs = this.selected.Years;
    let dcmntNo = this.selected.dcmntNo;
    let uhID = this.selected.uhID;
    this.router.navigate(['ipdbill3/' + billno, yrs, dcmntNo, uhID]);
  }
  bill4() {
    let billno = this.selected.vchrNo;
    let yrs = this.selected.Years;
    let dcmntNo = this.selected.dcmntNo;
    let uhID = this.selected.uhID;
    this.router.navigate(['ipdbill4/' + billno, yrs, dcmntNo, uhID]);
  }
  searchquery() {
    this._studentservice.ipdsearch_discharge(this.search, this.vrdt1, this.vrdt2, this.Choice)
      .subscribe((data: OPD[]) => {
        this.OPD = data;
      });
  }
  searchdirect() {
    this._studentservice.ipdsearch_discharge(this.search, this.vrdt1, this.vrdt2, 'Direct')
      .subscribe((data: OPD[]) => {
        this.OPD = data;
      });
  }
  paymentdetails() {
    const dialogRef = this.dialog.open(IPDPaymentdetailsComponent, {
      height: '650px', width: '650px',
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
        height: '500px', width: '650px',
        data: { OPD: students },
      });

      dialogRef.afterClosed().subscribe(result => {
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
    this.router.navigate(['sticker/', dcmntNo, dt]);
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

  edit(students: any) {
    this.router.navigate(['/homepage/ipdedita/',students.vchrNo,students.dcmntNo,students.uhID,students.opdDate]);
  }
}
