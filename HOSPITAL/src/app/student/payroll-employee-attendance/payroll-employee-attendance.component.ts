import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee, attend } from 'src/app/students';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-payroll-employee-attendance',
  templateUrl: './payroll-employee-attendance.component.html',
  styleUrls: ['./payroll-employee-attendance.component.css']
})
export class PayrollEmployeeAttendanceComponent {

  uname = ""
  month = 8
  year = 2023
  attendance: attend[] = [];
  resourcesLoaded = true;
  empMap = new Map<String, String>();

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

  }

  daysInMonth = (year: number, month: number) => new Date(year, month, 0).getDate();

  getAttendance() {
    this.resourcesLoaded = false;
    let totaldays = this.daysInMonth(this.year, this.month)
    this._studentservice.getAttendance(this.month, this.year, totaldays).subscribe((data: attend[]) => {
      this.attendance = data;
      data.sort((a,b) => a.empcode.localeCompare(b.empcode));
      this._studentservice.getAllEmployee().subscribe((data1: Employee[]) => {
        data1.forEach(element => {
          this.empMap.set(element.Empcode,element.staffname);
        });

        this.resourcesLoaded = true;
      })
    })
  }

  save() {
    this.resourcesLoaded = false;
    this._studentservice.saveAttendance(this.attendance).subscribe((data: any) => {
      this.resourcesLoaded = true;
      window.location.reload();
    })
  }
}
