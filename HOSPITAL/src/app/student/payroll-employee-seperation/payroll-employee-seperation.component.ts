import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { salarybreakup, salaryvalue, seperate } from 'src/app/students';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-payroll-employee-seperation',
  templateUrl: './payroll-employee-seperation.component.html',
  styleUrls: ['./payroll-employee-seperation.component.css']
})
export class PayrollEmployeeSeperationComponent {
  declare lwd: string;
  uname = ''
  registration = true;
  salary = new Map<string, Number>();
  resourcesLoaded = true;
  month = 8
  year = 2023
  empcode = ""
  seperation = new seperate();
  finalsalary: salarybreakup[] = [];
  finaldeductions: salarybreakup[] = [];
  total = 0;

  constructor(private _studentservice: StudentsService,
    private routes: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.lwd = formatDate(new Date(), 'yyyy-MM-dd', 'en_US').split('T')[0];

    //call username 
    this.uname = this._studentservice.getUsername();
    if (this.uname == '') {
      this.router.navigate(['']);
    }

    const routerParams = this.routes.snapshot.params;
    this.empcode = routerParams["id"];
    if (this.empcode != undefined) {
    } else {
      this.router.navigate(['']);
    }

    //call permission
    // this._studentservice.getuserpermission(this.uname)
    // .subscribe(data => {
    //   this._studentservice.permission = data
    //   if (this._studentservice.checkPermission("Menu", "OPD", "inst") ) {

    //    this.registration = JSON.parse(JSON.stringify(this._studentservice.permission))["OPD"]["Registration"]["inst"] == "Y";
    //   }
    //   else{
    //     this.router.navigate(['/homepage/main'])
    //   }
    // });
  }

  getSeperation() {
    let currdate = new Date(this.lwd);
    this.month = currdate.getMonth() + 1;
    this.year = currdate.getFullYear()

    this._studentservice.getEmployeeSeperation(this.month, this.year, currdate.getDate(), this.empcode).subscribe((data: seperate) => {
      this.seperation = data;
      if (this.seperation.value.length <= 0) {
        this.calculateSalary();
      } else {
        this.calculateSalaryBasedOnValue();
      }
    })
  }

  calculateSalaryBasedOnValue() {
    this.seperation.value.forEach(element => {
      let b = new salarybreakup();
      b.amt = element.amt;
      b.heading = element.heading;
      b.empcode = this.empcode;
      if (element.type == "S") {
        this.total = this.total + Number(b.amt);
        this.finalsalary.push(b);
      } else {
        this.total = this.total - Number(b.amt);
        this.finaldeductions.push(b);
      }
    });
    this.resourcesLoaded = true;
  }

  calculateSalary() {
    let date = new Date(this.lwd);
    let leave = 0;
    Object.values(this.seperation.attend[0]).forEach(val => {
      if (val == 'A') {
        leave++;
      }
    });

    leave = leave - Number(this.seperation.employee[0].leaveallow);
    if (leave < 0) {
      leave = 0;
    }

    let double = 0;
    Object.values(this.seperation.attend[0]).forEach(val => {
      if (val == 'D') {
        double++;
      }
    });

    let half = 0;
    Object.values(this.seperation.attend[0]).forEach(val => {
      if (val == 'H') {
        half++;
      }
    });


    for (let i = 0; i < this.seperation.breakup.length; i++) {
      let b = new salarybreakup();
      b.heading = this.seperation.breakup[i].heading;
      b.amt = Number(this.seperation.breakup[i].amt.toString()) * (date.getDate() - leave) / 30;
      this.total = this.total + Number(b.amt);
      this.finalsalary.push(b);
    }

    let b = new salarybreakup();
    b.heading = "Overtime";
    for (let i = 0; i < this.seperation.breakup.length; i++) {
      b.amt = Number(b.amt) + Number(this.seperation.breakup[i].amt.toString()) * double / 30;
    }
    this.total = this.total + Number(b.amt);
    this.finalsalary.push(b);

    let beforededuction = this.total;

    for (let i = 0; i < this.seperation.deductions.length; i++) {
      let b = new salarybreakup();
      b.heading = this.seperation.deductions[i].decname;
      b.amt = 0;
      this.total = this.total - Number(b.amt);
      this.finaldeductions.push(b);
    }

    if (Number(this.seperation.employee[0].esic) > 0) {
      let b = new salarybreakup();
      b.heading = "ESIC";
      b.amt = Number(beforededuction) * Number(this.seperation.employee[0].esic) / 100;
      this.total = this.total - Number(b.amt);
      this.finaldeductions.push(b);
    }

    if (Number(this.seperation.employee[0].pfper) > 0) {
      let b = new salarybreakup();
      b.heading = "PF";
      b.amt = Number(beforededuction) * Number(this.seperation.employee[0].pfper) / 100;
      this.total = this.total - Number(b.amt);
      this.finaldeductions.push(b);
    }

    if (Number(this.seperation.employee[0].pfper) > 0) {
      let b = new salarybreakup();
      b.heading = "Other Deduction";
      for (let i = 0; i < this.seperation.breakup.length; i++) {
        b.amt = Number(b.amt) + Number(this.seperation.breakup[i].amt.toString()) * half / 60;
      }
      this.total = this.total - Number(b.amt);
      this.finaldeductions.push(b);
    }


    this.resourcesLoaded = true;

    this.calculateFinalTotal()
  }

  calculateFinalTotal() {
    this.total = 0;
    this.finalsalary.forEach(element => {
      this.total = this.total + Number(element.amt);
    });
    this.finaldeductions.forEach(element => {
      this.total = this.total - Number(element.amt);
    });
    this.total = Math.round(this.total);
  }

  save() {
    this.resourcesLoaded = false;
    this._studentservice.saveAttendance(this.seperation.attend).subscribe((data: any) => {
      let val: salaryvalue[] = [];

      this.finalsalary.forEach(element => {
        let v = new salaryvalue();
        v.amt = element.amt;
        v.empcode = this.empcode;
        v.mon = this.month;
        v.years = this.year;
        v.type = 'S';
        v.heading = element.heading;
        val.push(v);
      });

      this.finaldeductions.forEach(element => {
        let v = new salaryvalue();
        v.amt = element.amt;
        v.empcode = this.empcode;
        v.mon = this.month;
        v.years = this.year;
        v.type = 'D';
        v.heading = element.heading;
        val.push(v);
      });

      this._studentservice.saveSalaryValue(val).subscribe((data: any) => {
        this.seperation.employee[0].doend = this.lwd;
        this.seperation.employee[0].empstatus = "Seperated";
        this._studentservice.saveEmployee(this.seperation.employee[0]).subscribe((data: any) => {
          this.resourcesLoaded = true;
          alert("Record Saved...Thanks!");
          this.router.navigate(['/homepage/Employeemaster']);
        });
      })
    })
  }
}
