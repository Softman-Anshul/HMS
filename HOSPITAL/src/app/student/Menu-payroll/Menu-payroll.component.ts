import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from '../../students.service';

@Component({
  selector: 'app-control-payroll',
  templateUrl: './Menu-payroll.component.html',
  styleUrls: ['./Menu-payroll.component.css']
})
export class ControlPayrollComponent {
  Mobile = false;

  constructor(private router: Router,
    private _studentservice: StudentsService,
    ) {
  }

  ngOnInit(): void {
    
    

  }
EmplyeeMaster()
  {
    this.router.navigate(['homepage/Employeemaster']);
  }
}
  