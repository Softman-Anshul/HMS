import { Component, OnInit } from '@angular/core';
import { StudentsService } from './../../students.service';
import { Router } from '@angular/router';
import { group, consulant, OPD,login1 } from '../../students';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-mis-master',
  templateUrl: './mis-master.component.html',
  styleUrls: ['./mis-master.component.css']
})
export class MisMasterComponent implements OnInit {
  uname = '';
  Mobile = false;
  declare vrdt1: string;
  declare vrdt2: string;
  declare choice: string;
  declare choice1: string;

  declare choice2: string;
  declare choice3: string;
  declare choice4: string;
  declare choice5: string;

  declare user: string;
  list: string[] = [];
  list1: string[] = [];
  list2: string[] = [];
  list3: string[] = [];

  editable: boolean = false;
  SelectedFieldList = ["PaymentMode", "Head Wise Details", "Head Wise Daily", "Head Wise Monthly"];
  declare group: group[];
  declare rconsulant: consulant[];
  OPD1 = new OPD();
  declare showdailyactivityreport: boolean
  declare showdailyactivitydoctor: boolean
  declare login1 : login1[];

  constructor(private _studentservice: StudentsService,
    private router: Router) { }

  ngOnInit(): void {
    this.Mobile = this._studentservice.isMob();
    this.list = [];
    this.vrdt1 = formatDate(new Date(), 'yyyy-MM-dd', 'en_US').split('T')[0];
    this.vrdt2 = formatDate(new Date(), 'yyyy-MM-dd', 'en_US').split('T')[0];

    //call RConsultant
    this._studentservice.getopdrconsultant()
      .subscribe((data: any) => {
        this.rconsulant = data;
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
        if (this._studentservice.checkPermission("Menu", "MIS", "inst")) {

          this.showdailyactivityreport = JSON.parse(JSON.stringify(this._studentservice.permission))["MIS Reports"]["Daily Activity Report"]["inst"] == "Y";
          this.showdailyactivitydoctor = JSON.parse(JSON.stringify(this._studentservice.permission))["MIS Reports"]["Daily Activity Consultant"]["inst"] == "Y";

        }
        else {
          this.router.navigate(['/homepage/main'])
        }

      });

    this._studentservice.gettablegroup()
      .subscribe((data: group[]) => {
        this.list = [];
        data.forEach(element => {
          this.list.push(element.paymode);
        });
      });

  }
  changedata() {
      this._studentservice.gettableUser()
      .subscribe((data:login1[]) => {
        this.list3 = [];
        data.forEach(element => {
          this.list3.push(element.stuserid);
        });
    });
    if (this.choice == "PaymentMode") {
      this._studentservice.gettablegroup()
        .subscribe((data: group[]) => {
          this.list = [];
          data.forEach(element => {
            this.list.push(element.paymode);
          });
        });
    }
    else if (this.choice == "Head Wise Details" || this.choice == "Head Wise Daily"
      || this.choice == "Head Wise Monthly") {
      this._studentservice.gettabletesthead()
        .subscribe((data: any[]) => {
          this.list = [];
          data.forEach(element => {
            this.list.push(element["type"]);
          });
        });
    }
  }
  changedata_Consulant() {
    this.list1 = [];
    if (this.choice2 == "Consulant") {
      this._studentservice.gettableconsultant()
        .subscribe((data: any) => {
          data.forEach((element: { dctName: string; }) => {
            this.list1.push(element.dctName);
          });
        });
    }
    else if (this.choice2 == "ALL") {
      this.choice3 = "ALL"
      // this.list1.push("ALL")
    }
  }
  changedata1() {
    this.list2 = []
    if (this.choice4 == "PaymentMode") {
      this._studentservice.gettablegroup()
        .subscribe((data: group[]) => {
          this.list2 = [];
          data.forEach(element => {
            this.list2.push(element.paymode);
          });
          this.choice5 = this.list2[0];
        });
    }
    else if (this.choice4 == "Details") {
      this.list2.push("All");
      this.choice5 = this.list2[0];
    }
    else if (this.choice4 == "Head Wise Summary") {
      this.list2.push("All");

      this.choice5 = this.list2[0];
    }
    else if (this.choice4 == "Summary") {
      this.list2.push("All");

      this.choice5 = this.list2[0];
    }
    else if (this.choice4 == "Head Wise Details" || this.choice4 == "Head Wise Daily"
      || this.choice4 == "Head Wise Monthly") {
      this._studentservice.gettabletesthead()
        .subscribe((data: any[]) => {
          this.list2 = [];
          data.forEach(element => {
            this.list2.push(element["type"]);
          });
          this.choice5 = this.list2[0];
        });
    }
  }


  dailyreport(vrdt1: any, vrdt2: any, choice: any, choice1: any) {
    let dt = this.vrdt1;
    let dt2 = this.vrdt2;
    let doc = this.choice; //Select Item
    let doc1 = this.choice1; //Heads
    let doc5 = this.user; 
    if(doc5 == undefined)
    {
      doc5 = "ALL";
    }
    if (doc == undefined) {
      alert("Sorry ! Please Select Choice")
    }
    else {
      if (doc == "Details") {
        this.router.navigate(['/homepage/dailyacitivy-details/' + dt, dt2,doc5]);
      }
      else if (doc == "PaymentMode") {
        this.router.navigate(['/homepage/dailyacitivy-Paymode/' + dt, dt2, doc1,doc5]);
      }
      else if (doc == "Summary") {
        this.router.navigate(['/homepage/dailyacitivy-Summary/' + dt, dt2,doc5]);
      }
      else if (doc == "Head Wise Details") {
        this.router.navigate(['/homepage/dailyacitivy-Heads/' + dt, dt2, doc1,doc5]);
      }
      else if (doc == "Head Wise Daily") {
        this.router.navigate(['/homepage/dailyacitivy-Headsday/' + dt, dt2, doc1,doc5]);
      }
      else if (doc == "Head Wise Monthly") {
        this.router.navigate(['/homepage/dailyacitivy-Headssummonth/' + dt, dt2, doc1,doc5]);
      }
      else if (doc == "Monthly Summary All Heads") {
        this.router.navigate(['/homepage/dailyacitivy-monthsummaryallheads/' + dt, dt2,doc5]);
      }
    }
  }

  dailyreport_consultant(vrdt1: any, vrdt2: any, choice2: any, choice3: any, choice4: any, choice5: any) {
    let dt = this.vrdt1;
    let dt2 = this.vrdt2;
    let doc = this.choice2; // All or consultant
    let doc1 = this.choice3; // Consultant names
    let doc2 = this.choice4; //Details, select item
    let doc3 = this.choice5; // Heads
    if (doc == undefined || doc2 == undefined) {
      alert("Sorry ! Please Select Choice")
    }
    else {
      if (doc == "ALL") {
        if (doc2 == "Details") {
          if (doc3 == "All") {
            this.router.navigate(['/homepage/dailyacitivy-details-consultant/' + dt, dt2, doc1]);
          }
        }
      }
      if (doc2 == "Head Wise Summary") {
        if (doc3 == "All") {
          this.router.navigate(['/homepage/dailyacitivy-HeadSummary-consultant/' + dt, dt2, doc1]);
        }
      }
      else if (doc2 == "Summary") {
        if (doc3 == "All") {
          this.router.navigate(['/homepage/dailyacitivy-Summary-consultant/' + dt, dt2, doc1]);
        }
      }

      //for consultant wise Reports
      if (doc == "Consulant") {
        if (doc2 == "Details") {
          if (doc3 == "All") {
            this.router.navigate(['/homepage/dailyacitivy-details-consultant/' + dt, dt2, doc1]);
          }
        }
      }
    }
  }
}
