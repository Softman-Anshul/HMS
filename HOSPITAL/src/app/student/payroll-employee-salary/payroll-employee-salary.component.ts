import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { salary, salarybreakup, salaryvalue, allsalary } from 'src/app/students';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-payroll-employee-salary',
  templateUrl: './payroll-employee-salary.component.html',
  styleUrls: ['./payroll-employee-salary.component.css']
})

export class PayrollEmployeeSalaryComponent {
  uname = ""
  month = 8
  year = 2023
  empcode = ""
  resourcesLoaded = true;
  empsalary = new salary();
  finalsalary: salarybreakup[] = [];
  finaldeductions: salarybreakup[] = [];
  total = 0;
  allemp = false;
  allsalary = new Map<string, PayrollEmployeeSalaryComponent>();
  allheaders = new Set<string>();
  empname = "";

  constructor(private _studentservice: StudentsService,
    private routes: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    //call username 
    this.uname = this._studentservice.getUsername();
    if (this.uname == '') {
      this.router.navigate(['']);
    }

    let currdate = new Date();
    this.month = currdate.getMonth() + 1;
    this.year = currdate.getFullYear()

    const routerParams = this.routes.snapshot.params;
    this.empcode = routerParams["id"];
    if (this.empcode != undefined && this.empcode != "") {
    } else {
      this.allemp = true;
    }

  }

  daysInMonth = (year: number, month: number) => new Date(year, month, 0).getDate();


  generateSalary() {
    if (this.allemp) {
      this.generateSalaryForAll();
    } else {
      this.generateSalaryForOne();
    }
  }

  generateSalaryForAll() {
    this.resourcesLoaded = false;
    let maxDay = this.daysInMonth(this.year, this.month);
    this._studentservice.getAllSalary(this.month, this.year, maxDay).subscribe((data: Map<string, salary>) => {
      let temp = "";
      for (const [key, value] of Object.entries(data)) {
        temp = key;
        let c = new PayrollEmployeeSalaryComponent(this._studentservice, this.routes, this.router);
        let s = value;
        if (s != null && s != undefined) {
          c.empsalary = s;
          this.allsalary.set(key, c);
        }
        if (c.empsalary.value.length <= 0) {
          this.calculateSalary(c);
        } else {
          this.calculateSalaryBasedOnValue(c);
        }
      }
      let d = this.allsalary.get(temp);
      if(d != null && d != undefined){
        for (let i = 0; i < d.finalsalary.length; i++) {
          this.allheaders.add(d.finalsalary[i].heading)
        }  
        for (let i = 0; i < d.finaldeductions.length; i++) {
          this.allheaders.add(d.finaldeductions[i].heading)
        }
      }
    });
  }

  generateSalaryForOne() {
    this.resourcesLoaded = false;
    this._studentservice.getSalary(this.month, this.year, this.empcode).subscribe((data: salary) => {
      if (data.attend.length <= 0) {
        this.resourcesLoaded = true;
        alert("Attendance not generated");
        window.location.reload();
      } else {
        this.empsalary = data;
        if (this.empsalary.value.length <= 0) {
          this.calculateSalary(this);
        } else {
          this.calculateSalaryBasedOnValue(this);
        }
      }
    })
  }

  calculateSalaryBasedOnValue(obj: PayrollEmployeeSalaryComponent) {
    obj.empname = obj.empsalary.employee[0].staffname;
    obj.empsalary.value.forEach(element => {
      let b = new salarybreakup();
      b.amt = element.amt;
      b.heading = element.heading;
      b.empcode = obj.empcode;
      if (element.type == "S") {
        obj.total = obj.total + Number(b.amt);
        obj.finalsalary.push(b);
      } else {
        obj.total = obj.total - Number(b.amt);
        obj.finaldeductions.push(b);
      }
    });
    this.calculateFinalTotal(obj)
    this.resourcesLoaded = true;
  }

  calculateSalary(obj: PayrollEmployeeSalaryComponent) {
    obj.empname = obj.empsalary.employee[0].staffname;
    let leave = 0;
    Object.values(obj.empsalary.attend[0]).forEach(val => {
      if (val == 'A') {
        leave++;
      }
    });

    leave = leave - Number(obj.empsalary.employee[0].leaveallow);
    if (leave < 0) {
      leave = 0;
    }

    let double = 0;
    Object.values(obj.empsalary.attend[0]).forEach(val => {
      if (val == 'D') {
        double++;
      }
    });

    let half = 0;
    Object.values(obj.empsalary.attend[0]).forEach(val => {
      if (val == 'H') {
        half++;
      }
    });


    for (let i = 0; i < obj.empsalary.breakup.length; i++) {
      let b = new salarybreakup();
      b.heading = obj.empsalary.breakup[i].heading;
      b.amt = Number(obj.empsalary.breakup[i].amt.toString()) * (30 - leave) / 30;
      obj.total = obj.total + Number(b.amt);
      obj.finalsalary.push(b);
    }

    let b = new salarybreakup();
    b.heading = "Overtime";
    for (let i = 0; i < obj.empsalary.breakup.length; i++) {
      b.amt = Number(b.amt) + Number(obj.empsalary.breakup[i].amt.toString()) * double / 30;
    }
    obj.total = obj.total + Number(b.amt);
    obj.finalsalary.push(b);

    let beforededuction = obj.total;

    for (let i = 0; i < obj.empsalary.deductions.length; i++) {
      let b = new salarybreakup();
      b.heading = obj.empsalary.deductions[i].decname;
      b.amt = 0;
      obj.total = obj.total - Number(b.amt);
      obj.finaldeductions.push(b);
    }

    if (Number(obj.empsalary.employee[0].esic) > 0) {
      let b = new salarybreakup();
      b.heading = "ESIC";
      b.amt = Number(beforededuction) * Number(obj.empsalary.employee[0].esic) / 100;
      obj.total = obj.total - Number(b.amt);
      obj.finaldeductions.push(b);
    }

    if (Number(obj.empsalary.employee[0].pfper) > 0) {
      let b = new salarybreakup();
      b.heading = "PF";
      b.amt = Number(beforededuction) * Number(obj.empsalary.employee[0].pfper) / 100;
      obj.total = obj.total - Number(b.amt);
      obj.finaldeductions.push(b);
    }

    let b1 = new salarybreakup();
    b1.heading = "Other Deduction";
    for (let i = 0; i < obj.empsalary.breakup.length; i++) {
      b1.amt = Number(b1.amt) + Number(obj.empsalary.breakup[i].amt.toString()) * half / 60;
    }
    obj.total = obj.total - Number(b1.amt);
    obj.finaldeductions.push(b1);

    this.resourcesLoaded = true;
    this.calculateFinalTotal(obj)
  }

  calculateFinalTotal(obj: PayrollEmployeeSalaryComponent) {
    obj.total = 0;
    obj.finalsalary.forEach(element => {
      obj.total = obj.total + Number(element.amt);
    });
    obj.finaldeductions.forEach(element => {
      obj.total = obj.total - Number(element.amt);
    });
    obj.total = Math.round(obj.total);
  }

  save() {

    this.resourcesLoaded = false;

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
      this.resourcesLoaded = true;
      alert("Salary Saved...Thanks!");
      this.router.navigate(['/homepage/Employeemaster']);
    })
  }

}
