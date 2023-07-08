import { Component, Inject, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import { Router, ActivatedRoute } from '@angular/router';
import { City } from '../../students';
import { consulant } from '../../students';
import { Students, OPD, department } from '../../students';
import { group, company } from '../../students';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-opdreg',
  templateUrl: './OPD-Reg.component.html',
  styleUrls: ['./OPD-Reg.component.css']
})
export class OpdregComponent implements OnInit {
  declare Cityname: City[];
  declare company: company[];
  declare consulant: consulant[];
  declare rconsulant: consulant[];
  declare department: department[];
  declare group: group[];
  declare OPD: OPD[];
  OPD1 = new OPD();
  dcmntNo = new OPD();
  opdDate = new OPD();
  declare search: string;
  Students = new Students();
  declare index: number;
  uname = '';
  day = 0;
  ptype = "OPD"
  isOpd = true;
  ty = '';
  type = "";

  constructor(private _studentservice: StudentsService,
    private router: Router,
    private routes: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.typeChange();
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
    } else {
      this._studentservice.getuserpermission(this.uname)
        .subscribe(data => {
          this._studentservice.permission = data
          if (!this._studentservice.checkPermission("Master", "Consultant Master", "inst") || !this._studentservice.checkPermission("Menu", "Master", "inst")) {
            this.router.navigate(['/homepage/main'])
          }
          if(JSON.parse(JSON.stringify(this._studentservice.permission))["OPD"]["Registration"]["inst"] != "Y") {
            this.router.navigate(['/homepage/main'])
          }
        });
    }

    const routerParams = this.routes.snapshot.params;
    this.dcmntNo = routerParams['id']
    this.opdDate = routerParams['dt']
    this.ty = routerParams['ty']
    this.type = routerParams['type']
    this.OPD1.uname = this.uname;
    //call company for f.years
    this._studentservice.getCompany()
      .subscribe((data: any) => {
        this.OPD1.Years = data[0].years;
      });
    this.OPD1.payment = "Y";
    this.OPD1.dctrPrscrptn = "NA";
    this.OPD1.nature = "OPD";

    //paymentmode
    this._studentservice.gettablegroup()
      .subscribe((data: group[]) => {
        this.group = data;
      });
    //call Department
    this._studentservice.gettabledepart()
      .subscribe((data: department[]) => {
        this.department = data;
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
      });
    if (this.dcmntNo == undefined) {
      //call maxvchrno
      this._studentservice.opdgetmaxvchrno()
        .subscribe((data: any) => {
          this.OPD1.dcmntNo = data;
        });
      //call uhid
      this._studentservice.opdgetmaxuhid()
        .subscribe((data: any) => {
          this.OPD1.uhID = data;
        });
      //call date 
      this.OPD1.opdDate = new Date().toISOString().split('T')[0];
      this.OPD1.opdTime = new Date().toLocaleTimeString('en-US', { hour12: true, hour: "numeric", minute: "numeric" });
    }
    else {
      this._studentservice.getopdreg(this.dcmntNo, this.opdDate, this.type)
        .subscribe((data: any) => {
          this.OPD1 = data[0]
          //call Consultant
          this._studentservice.getopdconsultant(this.OPD1.caseType)
            .subscribe((data: any) => {
              this.consulant = data;
            });

          if (this.OPD1.nature == "Emergency") {
            this.isOpd = false;
          }

        })
    }
    this.OPD1.pntn = "Mr"
    this.OPD1.paymode = "CASH"
    this.OPD1.PntType = "General"
    this.populate()

  }
  searchquery() {
    //call date 
    this._studentservice.getuhidsearch(this.search)
      .subscribe((data: OPD[]) => {
        console.log(data)
        this.OPD1 = data[0];
        this.selectdepartment()
        this.OPD1.opdDate = new Date().toISOString().split('T')[0];
        this.OPD1.opdTime = new Date().toLocaleTimeString('en-US', { hour12: true, hour: "numeric", minute: "numeric" });
        if (this.OPD1.dcmntType = 'OPD') {
          console.log(this.OPD1.expiryDate)
          console.log(this.OPD1.opdDate)
          if (this.OPD1.expiryDate > this.OPD1.opdDate) {
            this.OPD1.amt = 0;
            this.OPD1.disp = 0;
            this.OPD1.discount = 0;
            this.OPD1.srvcTax = 0;
            this.OPD1.nature = "Follow";
            this.OPD1.payment = "Y";
            this.OPD1.dctrPrscrptn = "NA";
            this.OPD1.isOldPnt = "N"
            this.OPD1.dcmntType = 'OPD';
            alert("Before Due Date")
          }
          else {
            this.OPD1.dctrVisited = "";
            this.OPD1.caseType = "";
          }
        }
        this.OPD1.payment = "Y";
        this.OPD1.dctrPrscrptn = "NA";
        this.OPD1.isOldPnt = "N"
        this.OPD1.dcmntType = 'OPD';
        this.OPD1.PntType = "General";
        this.OPD1.paymode = "CASH";

        //call maxvchrno
        this._studentservice.opdgetmaxvchrno()
          .subscribe((data: any) => {
            this.OPD1.dcmntNo = data;
          });
        //call company for f.years
        this._studentservice.getCompany()
          .subscribe((data: any) => {
            this.OPD1.Years = data[0].years;
          });
        this.OPD1.uname = this.uname;
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
        this.consultantChange(null)
      });
  }

  consultantChange(event: any) {
    if (this.OPD1.nature == "Follow") {
      return
    }
    let doc = this.OPD1.dctrVisited
    if (event != null) {
      doc = event.target.value
    }
    for (let i = 0; i < this.consulant.length; i++) {
      if (this.consulant[i].dctName == doc) {
        let expiry = new Date(this.OPD1.opdDate);
        this.OPD1.amt = this.consulant[i].opdcharges
        this.OPD1.srvcTax = this.consulant[i].opdcharges
        if (!this.isOpd) {
          this.OPD1.amt = this.consulant[i].Emergency
          this.OPD1.srvcTax = this.consulant[i].Emergency
        }
        this.day = this.consulant[i].validday - 1
        expiry.setDate(expiry.getDate() + this.day);
        this.OPD1.expiryDate = expiry.toISOString().split('T')[0];
        this.OPD1.parcha = this.consulant[i].Parcha;

        //call maxvchrno
        this._studentservice.opdgetmaxsno(this.consulant[i].dctName, this.OPD1.opdDate)
          .subscribe((data: any) => {
            this.OPD1.sno = data;
          });
      }
    }
  }
  public getNetAmount(event: any): void {
    this.OPD1.srvcTax = this.OPD1.amt - event
    this.OPD1.disp = 0;
  }

  public getNetAmountByPercent(event: any): void {
    this.OPD1.discount = (this.OPD1.amt * event) / 100;
    this.OPD1.srvcTax = this.OPD1.amt * (100 - event) / 100
  }
  populate() {
    if (this.OPD1.pntn == "Mr") {
      this.OPD1.pntSex = "Male"
      this.OPD1.pntg = "S/o"
      this.OPD1.agey = "Years"
    }
    if (this.OPD1.pntn == "Mst") {
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
  onSubmit() {
    if (this.validation()) {
      this._studentservice.opd_insert(this.OPD1)
        .subscribe(data => {
          var result = confirm("Print Receipts ?");
          if (result == true) {
            let id = this.OPD1.dcmntNo;
            let opdDate = this.OPD1.opdDate;
            this.router.navigate(['opdreceipt/' + id, opdDate]);
          }
          else {
            this.router.navigate(['homepage/opdlist/']);
          }
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
    if (this.OPD1.agey == "" || this.OPD1.agey == undefined) {
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
    if (this.OPD1.nature == "" || this.OPD1.nature == undefined) {
      this.OPD1.nature = "OPD";
    }
    return true
  }

  typeChange() {
    this.OPD1.nature = "Emergency";
    if (this.isOpd) {
      this.OPD1.nature = "OPD";
    }
    if (this.OPD1.dctrVisited != "") {
      this.consultantChange(null)
    }
  }

}

