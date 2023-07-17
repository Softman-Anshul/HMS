import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Labname, Students, testreport } from 'src/app/students';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-test-report',
  templateUrl: './test-report.component.html',
  styleUrls: ['./test-report.component.css']
})
export class TestReportComponent implements OnInit {

  uname = '';
  Students = new Students();

  constructor(private _studentservice: StudentsService,
    private routes: ActivatedRoute,
    private Router: Router) { }

  ngOnInit(): void {

    //call username 
    this.uname = this._studentservice.getUsername();
    if (this.uname == '') {
      this.Router.navigate(['']);
    }

    const routerParams = this.routes.snapshot.params;

    this._studentservice.gettablebyid(routerParams['id'])
      .subscribe((data: any) => {
        this.Students = data[0];

      });

  }

}
