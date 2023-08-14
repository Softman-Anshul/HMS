import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentsService } from '../../students.service';
import { Router } from '@angular/router';
import { Employee, OPD } from '../../students';
import { OpdrefundComponent } from '../OPD-refund/OPD-refund.component';
import { OpdpmodechangeComponent } from '../OPD-Pmodechange/OPD-Pmodechange.component';
import { OpddoctorchangeComponent } from '../OPD-Doctorchange/OPD-Doctorchange.component';
import { OPDEMRComponent } from '../opd-emr/opd-emr.component';
import { IPDRegComponent } from '../ipd-reg/ipd-reg.component';
import { OpdMedicalcertificateComponent } from '../opd-medicalcertificate/opd-medicalcertificate.component';
import { formatDate } from '@angular/common';
import { defaultConfirmData, needConfirmation } from 'src/app/confirm-dialog/confirm-dialog.decorator';

@Component({
  selector: 'app-payroll-empmaster',
  templateUrl: './payroll-empmaster.component.html',
  styleUrls: ['./payroll-empmaster.component.css']
})
export class PayrollEmpmasterComponent {

  declare Employees: Employee[];
  declare selected: Employee;

  Choice = "ALL";
  declare vrdt1: string;
  declare vrdt2: string;
  declare search: string;
  declare OPD: OPD[];
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
  declare showtest: boolean
  declare showadmit: boolean
  declare showmedical: boolean
  totalamt = 0;
  totaldis = 0;
  totalrefund = 0;
  totalbalamt = 0;
  totalrecamt = 0;
  resourcesLoaded = true;

  constructor(private _studentservice: StudentsService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    //call Date
    this.vrdt1 = formatDate(new Date(), 'yyyy-MM-dd', 'en_US').split('T')[0];
    this.vrdt2 = formatDate(new Date(), 'yyyy-MM-dd', 'en_US').split('T')[0];

    //call username 
    this.uname = this._studentservice.getUsername();
    if (this.uname == '') {

      this.router.navigate(['']);

    }

    this._studentservice.getAllEmployee()
      .subscribe((data: any) => {
        this.Employees = data;
      });

    //call permission
    this._studentservice.getuserpermission(this.uname)
      .subscribe(data => {
        this._studentservice.permission = data
        if (this._studentservice.checkPermission("Menu", "OPD", "inst")) {

          this.registration = JSON.parse(JSON.stringify(this._studentservice.permission))["OPD"]["Registration"]["inst"] == "Y";
          this.editregistration = JSON.parse(JSON.stringify(this._studentservice.permission))["OPD"]["Registration"]["edt"] == "Y";
          this.delregistration = JSON.parse(JSON.stringify(this._studentservice.permission))["OPD"]["Registration"]["del"] == "Y";

          this.showrecipts = JSON.parse(JSON.stringify(this._studentservice.permission))["OPD"]["Receipts"]["inst"] == "Y";

          this.showparcha = JSON.parse(JSON.stringify(this._studentservice.permission))["OPD"]["Parcha"]["inst"] == "Y";
          this.showrefund = JSON.parse(JSON.stringify(this._studentservice.permission))["OPD"]["Refund"]["inst"] == "Y";
          this.showpayment = JSON.parse(JSON.stringify(this._studentservice.permission))["OPD"]["Paymode Change"]["inst"] == "Y";
          this.showdoctor = JSON.parse(JSON.stringify(this._studentservice.permission))["OPD"]["Doctor Change"]["inst"] == "Y";
          this.showmedical = JSON.parse(JSON.stringify(this._studentservice.permission))["OPD"]["Medical Certificate"]["inst"] == "Y";

          this.showsearch = JSON.parse(JSON.stringify(this._studentservice.permission))["OPD"]["OPD Search"]["inst"] == "Y";

          this.showtest = JSON.parse(JSON.stringify(this._studentservice.permission))["OPD"]["Test Booking"]["inst"] == "Y";
          this.showadmit = JSON.parse(JSON.stringify(this._studentservice.permission))["OPD"]["Admit Patient"]["inst"] == "Y";
        }
        else {
          this.router.navigate(['/homepage/main'])
        }
      });

  }

  openDialogrefund(): void {
  }

  @needConfirmation()
  confirm(employee: Employee) {
    console.log(employee)
    this.resourcesLoaded = false;
    this._studentservice.deleteEmployee(employee)
      .subscribe(data => {
        this.resourcesLoaded = true;
        window.location.reload();
      })
  }

  @needConfirmation()
  confirm1(students: any) {
    this.resourcesLoaded = false;
    this._studentservice.deleteopd(students.dcmntNo, students.opdDate, students.dcmntType)
      .subscribe(data => {
        this.OPD = this.OPD.filter(u => u !== students);
        this.resourcesLoaded = true;
        window.location.reload();
      })
  }


  delete(employee: Employee): void {
    this.resourcesLoaded = false;
    defaultConfirmData.title = "Delete"
    defaultConfirmData.message = "Are you sure you want to delete?"
    this.resourcesLoaded = true;
    this.confirm(employee)
  }

  openDialogpmode(): void {
  }

  openDialogdoctor(): void {
  }

  newreg() {
    this.router.navigate(['/homepage/empreg/']);
  }

  EMR(dcmntNo: any, opdDate: any) {
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
        this.totalrefund = 0;
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
        this.totalrefund = 0;
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
    }
    else {
      if (JSON.parse(JSON.stringify(this.permission))["Backdate"]["opd_Edit"]["inst"] == "") {
        alert("You are not Authorized for backdate Edit Change")
      }
      else {
        this.router.navigate(['homepage/opdreg', { OPD: dcmntNo, OPD2: opdDate }]);
      }
    }
  }
  openDialogparcha() {
  }

  openDialogreceipts() {
  }

  addAttendance() {
    this.router.navigate(['/homepage/attendance/']);
  }

  edit(employee: Employee) {
    this.router.navigate(['/homepage/empreg/', { id: employee.Empcode }]);
  }

  generateSalary() {
    if(this.selected != null){
      this.router.navigate(['/homepage/salary/', { id: this.selected.Empcode }]);
    } else {
      this.router.navigate(['/homepage/salary/']);
    }
  }

  employeeSeperation() {
    if(this.selected.empstatus != "Seperated"){
      this.router.navigate(['/homepage/seperation/', { id: this.selected.Empcode }]);
    } else {
      alert("Employee already not working");
    }

  }

}
