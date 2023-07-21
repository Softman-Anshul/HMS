import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentsService } from '../../students.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { department, OPD } from '../../students';
import { consulant } from '../../students';

@Component({
  selector: 'app-opddoctorchange',
  templateUrl: './OPD-Doctorchange.component.html',
  styleUrls: ['./OPD-Doctorchange.component.css']
})
export class OpddoctorchangeComponent implements OnInit {
  OPD = new OPD();
  uname = '';
  declare consulant: consulant[];
  declare department: department[];
  doctor = '';

  constructor(private _studentservice: StudentsService,
    private routes: ActivatedRoute,
    private Router: Router,
    public dialogRef: MatDialogRef<OpddoctorchangeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { OPD: OPD },
  ) {
    this.OPD = data.OPD
    this.doctor = this.OPD.dctrVisited;
  }
  ngOnInit(): void {
    //call Department
    this._studentservice.gettabledepart()
      .subscribe((data: department[]) => {
        this.department = data;
        this.OPD.caseType = this.department[0].caseType;
        this.selectdepartment()
      });
    const routerParams = this.routes.snapshot.params;
    //call username 
    this.uname = this._studentservice.getUsername();
    if (this.uname == '') {
      this.Router.navigate(['']);
    }
  }
  selectdepartment() {
    //call Consultant
    this._studentservice.getopdconsultant(this.OPD.caseType)
      .subscribe((data: any) => {
        this.consulant = data;
        this.OPD.dctrVisited = this.consulant[0].dctName;
      });
  }
  consultantChange(event: any) {
    for (let i = 0; i < this.consulant.length; i++) {
      if (this.consulant[i].dctName == event.target.value) {
        this.OPD.amt = this.consulant[i].opdcharges
        this.OPD.srvcTax = this.consulant[i].opdcharges
        // this.OPD.discount = 0;
        // this.OPD.refund=0;
      }
    }
  }

  public getNetAmountByPercent(event: any): void {
    this.OPD.srvcTax = this.OPD.amt - this.OPD.refund - event;
  }
  public getNetAmountByPercentr(event: any): void {
    this.OPD.srvcTax = this.OPD.amt - this.OPD.discount - event;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onsave() {
    if (this.validation()) {
      this._studentservice.opddoctorchange(this.OPD)
        .subscribe(data => {
          alert('Records Saved...Thanks');
          this.onNoClick();
          // this.Router.navigate(['/homepage/list?']);
          window.location.reload();
        });
    }
  }

  validation(): boolean {
    if (this.OPD.caseType == "" || this.OPD.caseType == undefined) {
      alert("Department is mandatory");
      return false
    }
    if (this.OPD.dctrVisited == "" || this.OPD.dctrVisited == undefined) {
      alert("Consultant is mandatory");
      return false
    }

    return true
  }
}
