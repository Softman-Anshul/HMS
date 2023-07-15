import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentsService } from '../../students.service';
import { Router } from '@angular/router';
import { OPD } from '../../students';
import { OpdrefundComponent } from '../OPD-refund/OPD-refund.component';
import { OpdpmodechangeComponent } from '../OPD-Pmodechange/OPD-Pmodechange.component';
import { OpddoctorchangeComponent } from '../OPD-Doctorchange/OPD-Doctorchange.component';
import { OPDEMRComponent } from '../opd-emr/opd-emr.component';
import { IPDRegComponent } from '../ipd-reg/ipd-reg.component';
import { OpdMedicalcertificateComponent } from '../opd-medicalcertificate/opd-medicalcertificate.component';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-opdlist',
  templateUrl: './OPD-List.component.html',
  styleUrls: ['./OPD-List.component.css']
})
export class OpdlistComponent implements OnInit {
  Choice = "ALL";
  declare vrdt1: string;
  declare vrdt2: string;
  declare search: string;
  declare OPD: OPD[];
  declare selected: OPD;
  count = 0;
  uname = ''
  declare permission: JSON
  declare registration: boolean
  declare showrecipts: boolean
  declare showparcha: boolean
  declare editregistration: boolean
  declare delregistration: boolean
  declare showrefund: boolean
  declare showpayment: boolean
  declare showdoctor: boolean
  declare showsearch: boolean
  totalamt = 0;
  totaldis = 0;
  totalrefund = 0;
  totalbalamt = 0;
  totalrecamt = 0;

  constructor(private _studentservice: StudentsService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    //call Date
    this.vrdt1 = formatDate(new Date(), 'yyyy-MM-dd', 'en_US').split('T')[0];
    this.vrdt2 = formatDate(new Date(), 'yyyy-MM-dd', 'en_US').split('T')[0];

    this._studentservice.getopd(this.vrdt1)
      .subscribe((data: OPD[]) => {
        this.OPD = data;
        for (let i = 0; i < this.OPD.length; i++) {
          this.totalamt += parseInt(this.OPD[i].amt.toString());
          this.totaldis += parseInt(this.OPD[i].discount.toString());
          this.totalrefund += parseInt(this.OPD[i].refund.toString());
          this.totalrecamt += parseInt(this.OPD[i].srvcTax.toString());
        }
      });

    //call username 
    this.uname = this._studentservice.getUsername();
    if (this.uname == '') {
      this.router.navigate(['']);
    }


    //call permission
    if (this._studentservice.permission != undefined) {
      if (!this._studentservice.checkPermission("Master", "Consultant Master", "inst")) {
        this.router.navigate([''])
      }
      this.registration = JSON.parse(JSON.stringify(this._studentservice.permission))["OPD"]["Registration"]["inst"] == "Y";
      //  this.editregistration = JSON.parse(JSON.stringify(this.permission))["OPD"]["Registration"]["edt"] == "Y";
      this.delregistration = JSON.parse(JSON.stringify(this._studentservice.permission))["OPD"]["Registration"]["del"] == "Y";
      this.showrecipts = JSON.parse(JSON.stringify(this._studentservice.permission))["OPD"]["Receipts"]["inst"] == "Y";
      this.showparcha = JSON.parse(JSON.stringify(this._studentservice.permission))["OPD"]["Parcha"]["inst"] == "Y";
      this.showrefund = JSON.parse(JSON.stringify(this._studentservice.permission))["OPD"]["Refund"]["inst"] == "Y";
      this.showpayment = JSON.parse(JSON.stringify(this._studentservice.permission))["OPD"]["Paymode Change"]["inst"] == "Y";
      this.showdoctor = JSON.parse(JSON.stringify(this._studentservice.permission))["OPD"]["Doctor Change"]["inst"] == "Y";
      this.showsearch = JSON.parse(JSON.stringify(this._studentservice.permission))["OPD"]["OPD Search"]["inst"] == "Y";

    } else {
      this._studentservice.getuserpermission(this.uname)
        .subscribe(data => {
          this._studentservice.permission = data
          if (!this._studentservice.checkPermission("Master", "Consultant Master", "inst") || !this._studentservice.checkPermission("Menu", "Master", "inst")) {
            this.router.navigate(['/homepage/main'])
          }
          this.registration = JSON.parse(JSON.stringify(this._studentservice.permission))["OPD"]["Registration"]["inst"] == "Y";
          //  this.editregistration = JSON.parse(JSON.stringify(this.permission))["OPD"]["Registration"]["edt"] == "Y";
          this.delregistration = JSON.parse(JSON.stringify(this._studentservice.permission))["OPD"]["Registration"]["del"] == "Y";
          this.showrecipts = JSON.parse(JSON.stringify(this._studentservice.permission))["OPD"]["Receipts"]["inst"] == "Y";
          this.showparcha = JSON.parse(JSON.stringify(this._studentservice.permission))["OPD"]["Parcha"]["inst"] == "Y";
          this.showrefund = JSON.parse(JSON.stringify(this._studentservice.permission))["OPD"]["Refund"]["inst"] == "Y";
          this.showpayment = JSON.parse(JSON.stringify(this._studentservice.permission))["OPD"]["Paymode Change"]["inst"] == "Y";
          this.showdoctor = JSON.parse(JSON.stringify(this._studentservice.permission))["OPD"]["Doctor Change"]["inst"] == "Y";
          this.showsearch = JSON.parse(JSON.stringify(this._studentservice.permission))["OPD"]["OPD Search"]["inst"] == "Y";

        });
    }
  }
  openDialogrefund(): void {
    if (this.selected.opdDate == formatDate(new Date(), 'yyyy-MM-dd', 'en_US').split('T')[0]) {
      const dialogRef = this.dialog.open(OpdrefundComponent, {
        height: '550px', width: '650px',
        data: { OPD: this.selected },
      });

      dialogRef.afterClosed().subscribe(result => {
      });
    }
    else {
      if (JSON.parse(JSON.stringify(this.permission))["Backdate"]["opd_Refund"]["inst"] == "") {
        alert("You are not Authorized for backdate Refund ")
      }
      else {
        const dialogRef = this.dialog.open(OpdrefundComponent, {
          height: '550px', width: '650px',
          data: { OPD: this.selected },
        });

        dialogRef.afterClosed().subscribe(result => {
        });
      }
    }
  }
  delete(students: any): void {
    if (students.opdDate == formatDate(new Date(), 'yyyy-MM-dd', 'en_US').split('T')[0]) {
      var result = confirm("Want to delete?");
      if (result == true) {
        this._studentservice.deleteopd(students.dcmntNo, students.opdDate, students.dcmntType)
          .subscribe(data => {
            this.OPD = this.OPD.filter(u => u !== students);
          })
      }
    }
    else {
      if (JSON.parse(JSON.stringify(this.permission))["Backdate"]["opd_Delete"]["inst"] == "") {
        alert("You are not Authorized for backdate delete")
      }
      else {
        var result = confirm("Want to delete?");
        if (result == true) {
          this._studentservice.deleteopd(students.dcmntNo, students.opdDate, students.dcmntType)
            .subscribe(data => {
              this.OPD = this.OPD.filter(u => u !== students);
              window.location.reload();
            })
        }
      }
    }
  }
  openDialogpmode(): void {
    if (this.selected.opdDate == formatDate(new Date(), 'yyyy-MM-dd', 'en_US').split('T')[0]) {
      const dialogRef = this.dialog.open(OpdpmodechangeComponent, {
        height: '550px', width: '650px',
        data: { OPD: this.selected },
      });

      dialogRef.afterClosed().subscribe(result => {
      });
    }
    else {
      if (JSON.parse(JSON.stringify(this.permission))["Backdate"]["opd_paymodechange"]["inst"] == "") {
        alert("You are not Authorized for backdate paymode Change")
      }
      else {
        const dialogRef = this.dialog.open(OpdpmodechangeComponent, {
          height: '550px', width: '650px',
          data: { OPD: this.selected },
        });

        dialogRef.afterClosed().subscribe(result => {
        });
      }
    }


  }
  openDialogdoctor(): void {
    if (this.selected.opdDate == formatDate(new Date(), 'yyyy-MM-dd', 'en_US').split('T')[0]) {
      const dialogRef = this.dialog.open(OpddoctorchangeComponent, {
        height: '550px', width: '650px',
        data: { OPD: this.selected },
      });

      dialogRef.afterClosed().subscribe(result => {
      });
    }
    else {
      if (JSON.parse(JSON.stringify(this.permission))["Backdate"]["opd_Doctorchange"]["inst"] == "") {
        alert("You are not Authorized for backdate Consultant Change")
      }
      else {
        const dialogRef = this.dialog.open(OpddoctorchangeComponent, {
          height: '550px', width: '650px',
          data: { OPD: this.selected },
        });

        dialogRef.afterClosed().subscribe(result => {
        });
      }
    }
  }
  newreg() {

    this.router.navigate(['homepage/opdreg']);
    // const dialogRef = this.dialog.open(OpdregComponent, {
    //   height:'650px', width: '1500px',
    //   data: {OPD:undefined},
    // });

    // dialogRef.afterClosed().subscribe(result => {
    // });
  }
  EMR(dcmntNo: any, opdDate: any) {
    // let id1 = dcmntNo;
    // let dt1 = opdDate;
    // let ty1 =  "OPD";
    // this.router.navigate(['/homepage/parcha/' , {id1: id1, dt1: dt1,ty1:ty1}]);
    const dialogRef = this.dialog.open(OPDEMRComponent, {
      height: '650px', width: '1500px',
      data: { dcmntNo, opdDate },
    });
  }
  testbooking(dcmntNo: any, uhId: any) {
    let id = dcmntNo;
    let dt = uhId;
    let ty = "OPD";
    this.router.navigate(['/homepage/newbooking/', { id: id, dt: dt, ty: ty }]);
  }
  // admitpatient(dcmntNo:any,opdDate:any){
  //  let id = dcmntNo;
  //  let dt = opdDate;
  //  let ty =  "OPD";
  //  this.router.navigate(['/homepage/newbooking/' , {id: id, dt: dt,ty:ty}]);
  //  }
  admitpatient(dcmntNo: any, opdDate: any) {
    let id = dcmntNo;
    let dt = opdDate;
    let ty = "OPD";
    const dialogRef = this.dialog.open(IPDRegComponent, {
      height: '650px', width: '1500px',
      data: { OPD: dcmntNo, OPD2: opdDate, OPD3: undefined },
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  searchquery() {
    this._studentservice.opdsearch(this.search, this.vrdt1, this.vrdt2, this.Choice)
      .subscribe((data: OPD[]) => {
        this.OPD = data;
        this.totalamt = 0;
        this.totaldis = 0;
        this.totalrefund=0;
        this.totalrecamt = 0;
        for (let i = 0; i < this.OPD.length; i++) {
          this.totalamt += parseInt(this.OPD[i].amt.toString());
          this.totaldis += parseInt(this.OPD[i].discount.toString());
          this.totalrefund += parseInt(this.OPD[i].refund.toString());
          this.totalrecamt += parseInt(this.OPD[i].srvcTax.toString());
        }
      });
  }
  searchdirect() {
    this._studentservice.opdsearch(this.search, this.vrdt1, this.vrdt2, 'Direct')
      .subscribe((data: OPD[]) => {
        this.OPD = data;
        this.totalamt = 0;
        this.totaldis = 0;
        this.totalrefund=0;
        this.totalrecamt = 0;
        for (let i = 0; i < this.OPD.length; i++) {
          this.totalamt += parseInt(this.OPD[i].amt.toString());
          this.totaldis += parseInt(this.OPD[i].discount.toString());
          this.totalrefund += parseInt(this.OPD[i].refund.toString());
          this.totalrecamt += parseInt(this.OPD[i].srvcTax.toString());
        }
      });
  }
  onEdit(dcmntNo: any, opdDate: any): void {
    if (opdDate == formatDate(new Date(), 'yyyy-MM-dd', 'en_US').split('T')[0]) {
      this.router.navigate(['homepage/opdreg', { OPD: dcmntNo, OPD2: opdDate }]);

      // const dialogRef = this.dialog.open(OpdregComponent, {
      //   height:'650px', width: '1500px',
      //   data: {OPD:dcmntNo,OPD2:opdDate},
      // });
      // dialogRef.afterClosed().subscribe(result => {
      // });
    }
    else {
      if (JSON.parse(JSON.stringify(this.permission))["Backdate"]["opd_Edit"]["inst"] == "") {
        alert("You are not Authorized for backdate Edit Change")
      }
      else {
        this.router.navigate(['homepage/opdreg', { OPD: dcmntNo, OPD2: opdDate }]);

        // const dialogRef = this.dialog.open(OpdregComponent, {
        //   height:'650px', width: '1500px',
        //   data: {OPD:dcmntNo,OPD2:opdDate},
        // });
        // dialogRef.afterClosed().subscribe(result => {
        // });
      }
    }
  }
  openDialogparcha() {
    this.router.navigate(['opdparcha/' + this.selected.dcmntNo, this.selected.opdDate]);
  }

  openDialogreceipts() {
    this.router.navigate(['opdreceipt/' + this.selected.dcmntNo, this.selected.opdDate]);

  }
  Medicalcerficate() {
    const dialogRef = this.dialog.open(OpdMedicalcertificateComponent, {
      height: '550px', width: '750px',
      data: { OPD: this.selected },
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  edit(students: OPD) {
    console.log(students)
    let id = students.dcmntNo;
    let dt = students.opdDate;
    let type = students.dcmntType;
    let ty = "edit";
    this.router.navigate(['/homepage/opdreg/', { id: id, dt: dt, ty: ty, type: type }]);
  }

}
