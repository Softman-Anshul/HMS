import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee, salary, salarybreakup } from 'src/app/students';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-payroll-employee-reg',
  templateUrl: './payroll-employee-reg.component.html',
  styleUrls: ['./payroll-employee-reg.component.css']
})
export class PayrollEmployeeRegComponent {


  employee = new Employee();
  declare date: Date;
  uname = ''
  registration = true;
  salary = new Map<string, Number>();
  resourcesLoaded = true;

  constructor(private _studentservice: StudentsService,
    private routes: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.date = new Date();

    //call username 
    this.uname = this._studentservice.getUsername();
    if (this.uname == '') {
      this.router.navigate(['']);
    }

    const routerParams = this.routes.snapshot.params;
    let code = routerParams["id"];
    if (code != undefined) {
      this._studentservice.getEmployee(code)
        .subscribe((data: any) => {
          this.employee = data[0];
        });
    } else {
      this._studentservice.getMaxEmpCode()
        .subscribe((data: any) => {
          this.employee.Empcode = data[0]['empcode'];
          this.employee.dob = formatDate(new Date(), 'yyyy-MM-dd', 'en_US').split('T')[0];
          this.employee.doj = formatDate(new Date(), 'yyyy-MM-dd', 'en_US').split('T')[0];
          this.calculateAge();
          this.employee.isNewEmp = true;
        });
    }

    this._studentservice.getSalaryStructure()
      .subscribe((data: any[]) => {
        if (code != undefined) {
        this._studentservice.getSalaryBreakup(code)
          .subscribe((data1: salarybreakup[]) => {
            data.forEach(element => {
              data1.forEach(element1 => {
                if(element1.heading == element['stname']){
                  this.salary.set(element['stname'], element1.amt);
                }
              })
              if(data1.length <= 0){
                data.forEach(element => {
                  this.salary.set(element['stname'], 0);
                });
              }
            });
          });
        } else {
          data.forEach(element => {
            this.salary.set(element['stname'], 0);
          });
        }
      });


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


  calculateAge() {
    var dob = new Date(this.employee.dob);
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    this.employee.age = String(age);
  }

  salarychange(key: string, val: Number, event: any) {
    this.salary.set(key, event.target.value)
    let salary = 0;
    for (const [key, value] of this.salary.entries()) {
      salary = salary + parseInt(value.toString());
    };
    this.employee.salary = salary.toString();
  }

  onSubmit() {
    this.resourcesLoaded = false;
    this._studentservice.saveEmployee(this.employee).subscribe((data: any) => {

      let breakup: salarybreakup[] = [];
      for (const [key, value] of this.salary.entries()) {
        let b = new salarybreakup();
        b.empcode = this.employee.Empcode;
        b.heading = key;
        b.amt = value;
        breakup.push(b);
      }

      this._studentservice.saveSalary(breakup).subscribe((data: any) => {
        const routerParams = this.routes.snapshot.params;
        let code = routerParams["id"];
        this.resourcesLoaded = true;
        if (code != undefined) {
          alert("Employee Updated. Thanks!");
        } else {
          alert("Employee Added. Thanks!");
        }
        this.router.navigate(['/homepage/Employeemaster']);
      })
    }
    )
  }
}
