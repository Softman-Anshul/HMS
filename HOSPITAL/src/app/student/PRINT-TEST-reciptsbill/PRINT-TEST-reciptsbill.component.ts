import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Students, Test } from '../../students';


@Component({
  selector: 'app-recipts-bill',
  templateUrl: './PRINT-TEST-reciptsbill.component.html',
  styleUrls: ['./PRINT-TEST-reciptsbill.component.css']
})
export class ReciptsBillComponent implements OnInit {
  Students = new Students();
  declare testreport: Test[];
  uname = '';
  company = "";
  add = "";
  city = "";
  phone = "";
  profle = "";



  constructor(private _studentservice: StudentsService,
    private routes: ActivatedRoute,
    private Router: Router,
  ) {
  }

  public innerWidth: any;


  ngOnInit(): void {
    const routerParams = this.routes.snapshot.params;
    this._studentservice.gettablebyid(routerParams['id'])
      .subscribe((data: any) => {
        this.Students = data[0];

        this._studentservice.getTestdetails(this.Students.vchrNo, this.Students.vchrDate)
          .subscribe((data: any) => {
            this.testreport = data;
          });

      });

    //call company
    this._studentservice.getCompany()
      .subscribe((data: any) => {
        this.company = data[0].Comp_nam;
        this.add = data[0].Comp_add;
        this.city = data[0].Comp_city;
        this.phone = data[0].Comp_Phon;
        this.profle = data[0].profle;

      });

    //call username 
    this.uname = this._studentservice.getUsername();
    if (this.uname == '') {
      this.Router.navigate(['']);
    }


  }
  printComponent() {
    const element = document.getElementById("print")
    if (element != null) {
      let body = document.createElement("body")
      body.appendChild(element)
      document.body = body;
      window.print();
      window.location.reload()
    }
  }
  testlist() {
    this.Router.navigate(['homepage/list/']);
  }
}
