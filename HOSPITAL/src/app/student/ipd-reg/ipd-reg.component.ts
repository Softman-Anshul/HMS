import { Component, Inject, OnInit, Optional } from '@angular/core';
import { StudentsService } from '../../students.service';
import { Router, ActivatedRoute } from '@angular/router';
import { City, Cityname, IPDPAYMENT, Ward } from '../../students';
import { consulant } from '../../students';
import { Students, OPD, department } from '../../students';
import { group, company } from '../../students';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { formatDate } from '@angular/common';
import { defaultConfirmData, needConfirmation } from 'src/app/confirm-dialog/confirm-dialog.decorator';

@Component({
  selector: 'app-ipd-reg',
  templateUrl: './ipd-reg.component.html',
  styleUrls: ['./ipd-reg.component.css']
})
export class IPDRegComponent implements OnInit {
  declare Cityname: City[];
  declare company: company[];
  declare consulant: consulant[];
  declare rconsulant: consulant[];
  declare department: department[];
  declare group: group[];
  declare OPD: OPD[];
  OPD1 = new OPD();
  dcmntNo = undefined;
  opdDate = undefined;
  dcmntType = undefined;
  declare search: string;
  Students = new Students();
  declare index: number;
  declare Ward: Ward[];
  declare room: Ward[];
  Ward1 = new Ward();
  Deposit = new IPDPAYMENT();
  uname = '';
  day = 0;
  ptype = "General"
  type = "OPD";
  isOpd = true;

  constructor(private _studentservice: StudentsService,
    private router: Router,
    private routes: ActivatedRoute,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
  ) {

    // let data = routes.snapshot.data
    if (data != undefined) {
      this.dcmntNo = data["OPD"]
      this.opdDate = data["OPD2"]
      this.dcmntType = data["OPD3"]

    }

  }

  ngOnInit(): void {
    //call username 
    this.uname = this._studentservice.getUsername();
    if (this.uname == '') {
      this.router.navigate(['']);
    }
    this.OPD1.uname = this.uname;
    this.Deposit.uname = this.uname;
    this.Ward1.uname = this.uname;

    //call company for f.years
    this._studentservice.getCompany()
      .subscribe((data: any) => {
        this.OPD1.Years = data[0].years;
        this.Deposit.Years = data[0].years;
        this.Ward1.Years = data[0].years;

      });
    this.OPD1.payment = "Y";
    this.OPD1.dctrPrscrptn = "NA";
    this.OPD1.nature = "IPD";
    this.OPD1.dcmntType = "IPD";

    //paymentmode
    this._studentservice.gettablegroup()
      .subscribe((data: group[]) => {
        this.group = data;
        this.OPD1.paymode = "CASH";
        this.Deposit.paymode = data[0].paymode;
      });
    //call Department
    this._studentservice.gettabledepart()
      .subscribe((data: department[]) => {
        this.department = data;
      });
    //call Ward
    this._studentservice.gettableward()
      .subscribe((data: any) => {
        this.Ward = data;
      });

    //call RConsultant
    this._studentservice.getopdrconsultant()
      .subscribe((data: any) => {
        this.rconsulant = data;
      });
    //call City
    this._studentservice.gettableCity()
      .subscribe((data: City[]) => {
        this.Cityname = data;
        this.OPD1.pntCity = this.Cityname[0].citynam
      });


    if (this.dcmntNo == undefined) {
      //call maxvchrno
      this._studentservice.opdgetmaxfileno()
        .subscribe((data: any) => {
          this.OPD1.dcmntNo = data;
          this.Ward1.ipdno = this.OPD1.dcmntNo;
          this.Deposit.ipdNo = this.OPD1.dcmntNo;
        });
      this.Deposit.reason = "Payment";
      //call Recno for payment
      this._studentservice.paymentrecno()
        .subscribe((data: any) => {
          this.Deposit.recno = data;
        });

      //call uhid
      this._studentservice.opdgetmaxuhid()
        .subscribe((data: any) => {
          this.OPD1.uhID = data;
          this.Ward1.uhid = this.OPD1.uhID;
          this.Deposit.uhID = this.OPD1.uhID;

        });
      //call date 
      this.OPD1.opdDate = formatDate(new Date(), 'yyyy-MM-dd', 'en_US').split('T')[0]
      this.OPD1.opdTime = new Date().toLocaleTimeString('en-US', { hour12: true, hour: "numeric", minute: "numeric" });
      this.Ward1.cdt = this.OPD1.opdDate;
      this.Deposit.ipdDate = this.OPD1.opdDate;
      this.Deposit.rectime = this.OPD1.opdTime;
    }
    else {
      if (this.dcmntType == undefined) {
        this._studentservice.getipdreg(this.dcmntNo, this.opdDate)
          .subscribe((data: any) => {
            this.OPD1 = data[0]
            this.OPD1.dcmntType = "IPD";

            this.Deposit.reason = "Payment";
            this.Ward1.uhid = this.OPD1.uhID;
            this.Deposit.uhID = this.OPD1.uhID;

            this._studentservice.opdgetmaxfileno()
              .subscribe((data: any) => {
                this.OPD1.dcmntNo = data;
                this.Ward1.ipdno = this.OPD1.dcmntNo;
                this.Deposit.ipdNo = this.OPD1.dcmntNo;
              });
            //call Recno for payment
            this._studentservice.paymentrecno()
              .subscribe((data: any) => {
                this.Deposit.recno = data;
              });

            this.selectdepartment();

            this.OPD1.opdDate = formatDate(new Date(), 'yyyy-MM-dd', 'en_US').split('T')[0]
            this.OPD1.opdTime = new Date().toLocaleTimeString('en-US', { hour12: true, hour: "numeric", minute: "numeric" });
            this.Ward1.cdt = this.OPD1.opdDate;
            this.Deposit.ipdDate = this.OPD1.opdDate;
            this.Deposit.rectime = this.OPD1.opdTime;

          })
      }
      else {
        this._studentservice.getipdreg(this.dcmntNo, this.opdDate)
          .subscribe((data: any) => {
            this.OPD1 = data[0]
            this.OPD1.dcmntType = "IPD";
          });


      }
    }
  }
  searchquery() {

    this._studentservice.getuhidsearch(this.search)
      .subscribe((data: any) => {
        this.OPD1 = data[0];

        //call maxvchrno
        this._studentservice.opdgetmaxfileno()
          .subscribe((data: any) => {
            this.OPD1.dcmntNo = data;

          });
        //call Department
        this._studentservice.gettabledepart()
          .subscribe((data: department[]) => {
            this.department = data;
          });
        //paymentmode
        this._studentservice.gettablegroup()
          .subscribe((data: group[]) => {
            this.group = data;
          });
        //
        this.OPD1.uname = this.uname;
        this.OPD1.payment = "Y";
        this.OPD1.dctrPrscrptn = "NA";
        this.OPD1.nature = "OPD";
        this.OPD1.dcmntType = "IPD";
        //call company for f.years
        this._studentservice.getCompany()
          .subscribe((data: any) => {
            this.OPD1.Years = data[0].years;
          });
        //call date 
        this.OPD1.opdDate = formatDate(new Date(), 'yyyy-MM-dd', 'en_US').split('T')[0]
        this.OPD1.opdTime = new Date().toLocaleTimeString('en-US', { hour12: true, hour: "numeric", minute: "numeric" });
        this.OPD1.isOldPnt = "N"
      },
        error => {
          alert('Wrong!..UHID not found');
        },
        () => { }
      );
  }
  selectdepartment() {
    //call Consultant
    this._studentservice.getopdconsultant(this.OPD1.caseType)
      .subscribe((data: any) => {
        this.consulant = data;

      });
  }
  selectWard() {
    //call Consultant
    this._studentservice.getwardroom(this.Ward1.category)
      .subscribe((data: any) => {
        this.room = data;
        this.Ward1.roomNo = this.room[0].roomNo;
        this.Ward1.Bedno = this.room[0].Bedno;

      });
  }
  populate() {
    if (this.OPD1.pntn == "Mr") {
      this.OPD1.pntSex = "Male"
      this.OPD1.pntg = "S/o"
      this.OPD1.agey = "Years"
    }
    if (this.OPD1.pntn == "Master") {
      this.OPD1.pntSex = "Male"
      this.OPD1.pntg = "C/o"
      this.OPD1.agey = "Years"
    }
    else if (this.OPD1.pntn == "Mrs" || this.OPD1.pntn == "B/o") {
      this.OPD1.pntSex = "Female"
      this.OPD1.pntg = "W/o"
      this.OPD1.agey = "Years"

    }
    else if (this.OPD1.pntn == "Miss") {
      this.OPD1.pntSex = "Female"
      this.OPD1.pntg = "D/o"
      this.OPD1.agey = "Years"

    }
    else if (this.OPD1.pntn == "Baby") {
      this.OPD1.pntSex = "Female"
      this.OPD1.pntg = "C/o"
      this.OPD1.agey = "Years"
    }
  }

  cancel(router: Router) {
    router.navigate(['homepage/ipdlist/']);
  }

  @needConfirmation()
  confirm() {
    let id = this.Deposit.recno;
    let dt = this.Deposit.ipdDate;
    let yrs = this.Deposit.Years;
    let dcmntno = this.OPD1.dcmntNo;
    let uhid = this.OPD1.uhID;
    this.router.navigate(['homepage/ipdreceipt/' + id, dt, yrs, dcmntno, uhid]);

  }

  onSubmit() {
    if (this.validation()) {
      const routerParams = this.routes.snapshot.params;
      this._studentservice.ipd_insert(this.OPD1)
        .subscribe(data => {
          this._studentservice.updateroominfo(this.Ward1)
            .subscribe(data => {

              this._studentservice.ipd_payment(this.Deposit)
                .subscribe(data => {
                  if (this.Deposit.advanceReceived == 0) {
                    alert("Thanks....Admit Patient")
                    window.location.reload();
                  }
                  else {
                    defaultConfirmData.cancel = this.cancel
                    defaultConfirmData.title = "Print Receipts"
                    defaultConfirmData.message = "Do you want to print receipts?"
                    this.confirm()
                  }

                });
            });
        });
    }
  }
  validation(): boolean {
    if (this.OPD1.pntn == "" || this.OPD1.pntn == undefined) {
      alert("Patient Title is mandatory");
      return false
    }
    if (this.OPD1.pntName == "" || this.OPD1.pntName == undefined) {
      alert("Patient Name is mandatory");
      return false
    }
    if (this.OPD1.pntAgeYrs == "" || this.OPD1.pntAgeYrs == undefined) {
      alert("Patient Age is mandatory");
      return false
    }
    if (this.OPD1.pntCity == "" || this.OPD1.pntCity == undefined) {
      alert("City is mandatory");
      return false
    }
    if (this.OPD1.caseType == "" || this.OPD1.caseType == undefined) {
      alert("Department is mandatory");
      return false
    }
    if (this.OPD1.dctrVisited == "" || this.OPD1.dctrVisited == undefined) {
      alert("Consultant is mandatory");
      return false
    }
    if (this.OPD1.isOldPnt == "" || this.OPD1.isOldPnt == undefined) {
      this.OPD1.isOldPnt = "Y";
    }
    if (this.OPD1.rfrdBy == "" || this.OPD1.rfrdBy == undefined) {
      this.OPD1.rfrdBy = "SELF";
    }
    if (this.OPD1.occupation == "" || this.OPD1.occupation == undefined) {
      this.OPD1.occupation = "NA";
    }
    if (this.OPD1.paymode == "" || this.OPD1.paymode == undefined) {
      this.OPD1.paymode = "CASH";
    }
    if (this.OPD1.PntType == "" || this.OPD1.PntType == undefined) {
      this.OPD1.PntType = "General";
    }
    if (this.OPD1.BloodGroup == "" || this.OPD1.BloodGroup == undefined) {
      this.OPD1.BloodGroup = "NA";
    }
    if (this.OPD1.dcmntType == "" || this.OPD1.dcmntType == undefined) {
      this.OPD1.dcmntType = "OPD";
    }
    if (this.OPD1.surgical == "" || this.OPD1.surgical == undefined) {
      this.OPD1.surgical = "Medical";
    }
    if (this.OPD1.cond == "" || this.OPD1.cond == undefined) {
      this.OPD1.cond = "Normal";
    }
    if (this.Ward1.category== "" || this.Ward1.category == undefined) {
      alert("Room Category is mandatory");
      return false
    }

    return true
  }

}

