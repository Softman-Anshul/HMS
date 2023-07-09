import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentsService } from '../../students.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { department, OPD } from '../../students';
import { consulant } from '../../students';

@Component({
  selector: 'app-ipd-risk',
  templateUrl: './ipd-risk.component.html',
  styleUrls: ['./ipd-risk.component.css']
})
export class IpdRiskComponent implements OnInit {
  OPD = new OPD();
  uname = '';
  declare consulant: consulant[];
  declare department: department[];
  doctor = '';
  normal = false;
  risk = false;
  hrisk = false;

  constructor(private _studentservice: StudentsService,
    private routes: ActivatedRoute,
    private Router: Router,
    public dialogRef: MatDialogRef<IpdRiskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { OPD: OPD },
  ) {
    this.OPD = data.OPD
  }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    let value = "";
    if (this.normal) {
      value = "Normal";
    }
    else if (this.risk) {
      value = "Risk";
    }
    else if (this.hrisk) {
      value = "HighRisk";
    }

    this._studentservice.ipdstatuschange(this.OPD.uhID, this.OPD.dcmntNo, value)
      .subscribe(data => {
        alert('Thanks');
        this.onNoClick();
        // this.Router.navigate(['/homepage/list?']);
        window.location.reload();
      });
  }
}
