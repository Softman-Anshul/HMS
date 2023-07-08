import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Students, testreport } from './../../students';
import { __values } from 'tslib';
import { ResultcommentComponent } from '../resultcomment/resultcomment.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ResultinterpetComponent } from '../resultinterpet/resultinterpet.component';
import { EditorComponent } from '../editor/editor.component';
import { Labname } from 'src/app/students';

@Component({
  selector: 'app-testresult',
  templateUrl: './testresult.component.html',
  styleUrls: ['./testresult.component.css']
})
export class TestresultComponent implements OnInit {
  uname = '';
  Students = new Students();
  declare testreport: testreport[];
  declare selected: Students;
  labTestWord = new Map<string, string[]>([]);
  declare labname: Labname[];

  constructor(private _studentservice: StudentsService,
    private routes: ActivatedRoute,
    public dialog: MatDialog,
    private Router: Router
  ) { }

  ngOnInit(): void {

    this._studentservice.gettablelabname()
      .subscribe((data: Labname[]) => {
        this.labname = data;
      });


    //call username 
    this.uname = this._studentservice.getUsername();
    if (this.uname == '') {
      this.Router.navigate(['']);
    }

    const routerParams = this.routes.snapshot.params;
    this._studentservice.getlabtestword()
      .subscribe((data: any) => {
        for (var value in data) {
          this.labTestWord.set(value, data[value])
        }
      });

    this._studentservice.gettablebyid(routerParams['id'])
      .subscribe((data: any) => {
        this.Students = data[0];

        this._studentservice.getresulttable(this.Students.vchrNo, this.Students.vchrDate)
          .subscribe((data: any) => {
            this.testreport = data;


            //call value from lab_test_subvalue
            this._studentservice.gettablevaluebyid(this.Students.vchrNo, this.Students.vchrDate)
              .subscribe((data: any) => {
                this.testreport.forEach(element => {
                  if (JSON.parse(JSON.stringify(data))[element.testname] != undefined) {
                    element.value = JSON.parse(JSON.stringify(data))[element.testname]['value'];
                    element.interpet = JSON.parse(JSON.stringify(data))[element.testname]['interpet'];
                    element.comments = JSON.parse(JSON.stringify(data))[element.testname]['comments'];
                  }
                });
              });
          });
      });

  }
  openDialogI(index: number): void {
    const dialogRef = this.dialog.open(ResultinterpetComponent, {
      height: '550PX', width: '750px',
      data: { testreport: this.testreport[index], i: index },
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe(result => {
      this.testreport[result.i] = result.report
    });;
  }
  openDialogC(index: number): void {
    const dialogRef = this.dialog.open(ResultcommentComponent, {
      height: '550PX', width: '750px',
      data: { testreport: this.testreport[index], i: index },
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe(result => {
      this.testreport[result.i] = result.report
    });;
  }

  viewResult(report: testreport): boolean {
    if (((report.subgroup.toLowerCase() == "yes") || report.Ipet == "Y") || report.Wordcode != "") {
      return false
    } else {
      return true
    }
  }

  onSubmit() {
    this.Students.report = this.testreport
    if (this.validate()) {
      this._studentservice.savereport(this.Students)
        .subscribe(data => {
          var result = confirm("Want to PRINT?");
          if (result == true) {
            this.Router.navigate(['listreport/' + this.Students.vchrNo]);
          }
          else {
            this.Router.navigate(['homepage/list']);
          }
        });;
    }
  }

  validate(): boolean {
    for (let i = 0; i < this.testreport.length; i++) {
      if (this.testreport[i].total > 0) {
        let total = 0;
        for (let j = i + 1; j < this.testreport.length; j++) {
          if (this.testreport[i].testcode == this.testreport[j].testcode) {
            total = total + Number(this.testreport[j].value);
          }
        }
        // if(total > this.testreport[i].total){
        //   alert("Value of " + this.testreport[i].testname + " greater than " + this.testreport[i].total);
        //   return false
        // }
      }
    }
    return true
  }

  validateValue(report: any, event: any) {

    let total = Number(event);
    let testName = '';
    let maxTotal = 0;
    let checkTotal = false;
    for (let i = 0; i < this.testreport.length; i++) {
      if (this.testreport[i].testid == report.testid && this.testreport[i].testname != report.testname) {
        if (this.testreport[i].total > 0) {
          checkTotal = true;
          maxTotal = this.testreport[i].total;
          testName = this.testreport[i].testname;
        }
        total = total + Number(this.testreport[i].value)
      }
    };
    // if(checkTotal && total > Number(maxTotal)){
    //   alert("Value of " + testName + " greater than " + maxTotal);
    // }
  }

}
