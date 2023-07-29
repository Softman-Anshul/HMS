import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from '../../students.service';
import { MatDialog } from '@angular/material/dialog';
import { IpdDischargeControlComponent } from '../ipd-discharge-control/ipd-discharge-control.component';
import { MasterShiftTimingComponent } from '../master-shift-timing/master-shift-timing.component';
import { IPDDischargeCardTemplateComponent } from '../ipd-discharge-card-template/ipd-discharge-card-template.component';

@Component({
  selector: 'app-editt-student',
  templateUrl: './Menu-Master.component.html',
  styleUrls: ['./Menu-Master.component.css']
})
export class EdittStudentComponent implements OnInit {
  uname = ''
  declare permission: JSON
  declare ShowConsultant: boolean
  declare ShowrConsultant: boolean
  declare ShowDepartment: boolean
  declare Showpayment: boolean
  declare ShowOutsideLab: boolean
  declare ShowCity: boolean
  declare ShowCharges: boolean
  declare ShowPanel: boolean
  declare Showshift: boolean
  declare Showtestrate: boolean
  declare Showward: boolean

  Mobile = false;

  constructor(private router: Router,
    private _studentservice: StudentsService,
    public dialog: MatDialog) {
  }
  declare addForm: FormGroup;

  ngOnInit(): void {
    this.Mobile = this._studentservice.isMob();
    //call username 
    this.uname = this._studentservice.getUsername();
    if (this.uname == '') {
      this.router.navigate(['']);
    }

    //call permission
    if (this._studentservice.permission != undefined) {
      if (!this._studentservice.checkPermission("Menu", "Master", "inst")) {
        this.router.navigate([''])
      }
      this.ShowConsultant = JSON.parse(JSON.stringify(this._studentservice.permission))["Master"]["Consultant Master"]["inst"] == "Y";
      this.ShowrConsultant = JSON.parse(JSON.stringify(this._studentservice.permission))["Master"]["Referral Master"]["inst"] == "Y";
      this.ShowDepartment = JSON.parse(JSON.stringify(this._studentservice.permission))["Master"]["Department Master"]["inst"] == "Y";
      this.Showpayment = JSON.parse(JSON.stringify(this._studentservice.permission))["Master"]["Payment Mode"]["inst"] == "Y";
      this.ShowOutsideLab = JSON.parse(JSON.stringify(this._studentservice.permission))["Master"]["OutsideLab Master"]["inst"] == "Y";
      this.ShowCity = JSON.parse(JSON.stringify(this._studentservice.permission))["Master"]["City Master"]["inst"] == "Y";
      this.ShowCharges = JSON.parse(JSON.stringify(this._studentservice.permission))["Master"]["Charges Master"]["inst"] == "Y";
      this.ShowPanel = JSON.parse(JSON.stringify(this._studentservice.permission))["Master"]["Panel Master"]["inst"] == "Y";
      this.Showshift = JSON.parse(JSON.stringify(this._studentservice.permission))["Master"]["Shift Master"]["inst"] == "Y";
      this.Showtestrate = JSON.parse(JSON.stringify(this._studentservice.permission))["Master"]["Test Rate Change"]["inst"] == "Y";
      this.Showward = JSON.parse(JSON.stringify(this._studentservice.permission))["Master"]["Ward Master"]["inst"] == "Y";

    } else {
      this._studentservice.getuserpermission(this.uname)
        .subscribe(data => {
          this._studentservice.permission = data
          if (!this._studentservice.checkPermission("Menu", "Master", "inst")) {
            this.router.navigate(['/homepage/main'])
          }
          this.ShowConsultant = JSON.parse(JSON.stringify(this._studentservice.permission))["Master"]["Consultant Master"]["inst"] == "Y";
          this.ShowrConsultant = JSON.parse(JSON.stringify(this._studentservice.permission))["Master"]["Referral Master"]["inst"] == "Y";
          this.ShowDepartment = JSON.parse(JSON.stringify(this._studentservice.permission))["Master"]["Department Master"]["inst"] == "Y";
          this.Showpayment = JSON.parse(JSON.stringify(this._studentservice.permission))["Master"]["Payment Mode"]["inst"] == "Y";
          this.ShowOutsideLab = JSON.parse(JSON.stringify(this._studentservice.permission))["Master"]["OutsideLab Master"]["inst"] == "Y";
          this.ShowCity = JSON.parse(JSON.stringify(this._studentservice.permission))["Master"]["City Master"]["inst"] == "Y";
          this.ShowCharges = JSON.parse(JSON.stringify(this._studentservice.permission))["Master"]["Charges Master"]["inst"] == "Y";
          this.ShowPanel = JSON.parse(JSON.stringify(this._studentservice.permission))["Master"]["Panel Master"]["inst"] == "Y";
          this.Showshift = JSON.parse(JSON.stringify(this._studentservice.permission))["Master"]["Shift Master"]["inst"] == "Y";
          this.Showtestrate = JSON.parse(JSON.stringify(this._studentservice.permission))["Master"]["Test Rate Change"]["inst"] == "Y";
          this.Showward = JSON.parse(JSON.stringify(this._studentservice.permission))["Master"]["Ward Master"]["inst"] == "Y";
        });
    }


  };

  onSubmitconsultant() {
    this.router.navigate(['homepage/add']);
  }
  onSubmitrconsultant() {
    this.router.navigate(['homepage/radd']);
  }
  onSubmitd() {
    this.router.navigate(['homepage/testdepartment']);
  }

  onSubmitpaymode() {
    this.router.navigate(['homepage/testgroup']);
  }
  onSubmitCity() {
    this.router.navigate(['homepage/testcity']);
  }
  onSubmitLAB() {
    this.router.navigate(['homepage/Otherlab']);
  }
  onSubmitcharges() {
    this.router.navigate(['homepage/Charges']);
  }
  onSubmitpanel() {
    alert("Pending.....")
  }
  onSubmitshift() {
    alert("Pending.....")
  }
  onSubmittestrate() {
    this.router.navigate(['homepage/testratechange']);
  }
  onSubmitWard() {
    this.router.navigate(['homepage/Ward']);
  }
  disheading() {
    const dialogRef = this.dialog.open(IpdDischargeControlComponent, {
      height: '270px', width: '650px',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  shift() {
    const dialogRef = this.dialog.open(MasterShiftTimingComponent, {
      height: '470px', width: '650px',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  distemplate() {
    const dialogRef = this.dialog.open(IPDDischargeCardTemplateComponent, {
      height: '770px', width: '950px',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  gotoTestGroupMaster() {
    this.router.navigate(['homepage/testggroup']);
  }

  gotoTestMaster() {
    this.router.navigate(['homepage/test-master']);
  }

}
