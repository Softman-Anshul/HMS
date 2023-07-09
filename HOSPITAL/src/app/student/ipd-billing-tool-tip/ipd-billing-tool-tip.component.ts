import { Component, Input, OnInit } from '@angular/core';
import { OPD, Students } from '../../students';
import { StudentsService } from '../../students.service';

@Component({
  selector: 'app-ipd-billing-tool-tip',
  templateUrl: './ipd-billing-tool-tip.component.html',
  styleUrls: ['./ipd-billing-tool-tip.component.css']
})
export class IpdBillingToolTipComponent implements OnInit {

  @Input() x = '';
  @Input() y = '';
  OPD: Students[] = [];
  @Input() hoverDcmntNo = '';
  @Input() hoverUhID = '';
  @Input() flag = false;

  totalBalAmount = 0;
  totalBillAmount = 0;


  constructor(private _studentservice: StudentsService) { }

  ngOnInit(): void { }

  ngOnChanges() {
    this._studentservice.gettestduelistsum(this.hoverDcmntNo, this.hoverUhID)
      .subscribe((data: any) => {
        this.OPD = data
        if (this.OPD == null || this.OPD.length <= 0) {
          let tooltip = document.getElementById("tool-tip");
          if (tooltip != null) {
            tooltip.style.display = 'none';
          }
        } else {
          this.totalBalAmount = 0;
          this.totalBillAmount = 0;
          for (let i = 0; i < this.OPD.length; i++) {
            this.totalBillAmount += parseInt(this.OPD[i].billamt.toString());
            this.totalBalAmount += parseInt(this.OPD[i].balamt.toString());
          }
        }

      });
  }

  close() {
    let tooltip = document.getElementById("tool-tip");
    if (tooltip != null) {
      tooltip.style.display = 'none';
    }
  }

  transfer() { }

}
