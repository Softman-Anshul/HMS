import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Students, testgroup, testreport } from '../../students';
import { __values } from 'tslib';
import { MatDialog } from '@angular/material/dialog';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ResultinterpetComponent } from '../resultinterpet/resultinterpet.component';
import { ResultcommentComponent } from '../resultcomment/resultcomment.component';
import { Editor } from 'ngx-editor';
import { defaultConfirmData, needConfirmation } from 'src/app/confirm-dialog/confirm-dialog.decorator';

@Component({
  selector: 'app-testreport',
  templateUrl: './testreport.component.html',
  styleUrls: ['./testreport.component.css']
})
export class TestreportComponent implements OnInit {
  //declare Students : Students[];
  Students = new Students();
  declare testreport: testreport[];
  declare selected: Students;
  labTestWord = new Map<string, string[]>([]);
  uname = '';
  declare editor: Editor;
  url = '';
  showQr = false;

  constructor(private _studentservice: StudentsService,
    private routes: ActivatedRoute,
    public dialog: MatDialog,
    private Router: Router
  ) {
    this._studentservice.getuploadPath().subscribe((data: any) => {
      this.url = data["url"];
    })

  }

  declare group: testgroup[];
  declare groups: testgroup[];

  config: AngularEditorConfig = {
    spellcheck: true,
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    showToolbar: false,
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
  };



  ngOnInit(): void {

    //call username 
    this.uname = this._studentservice.getUsername();
    if (this.uname == '') {
      this.Router.navigate(['']);
    }

    this._studentservice.getAllTestGroups()
      .subscribe((data: testgroup[]) => {
        this.group = data;
        this.groups = [];
      });

    const routerParams = this.routes.snapshot.params;
    this._studentservice.getlabtestword()
      .subscribe((data: any) => {
        for (var value in data) {
          this.labTestWord.set(value, data[value])
        }
      });

    this._studentservice.gettablebyid(routerParams['id']).subscribe((data: any) => {
      this.Students = data[0];

      this._studentservice.getresulttable(this.Students.vchrNo, this.Students.vchrDate).subscribe((data: any) => {
        this.testreport = data;

        this.group.forEach(grp => {
          for (let i = 0; i < this.testreport.length; i++) {
            if (this.testreport[i].testgroup == grp.group_name && this.testreport[i].labid == 0) {
              this.groups.push(grp);
              break;
            }
          };
        });

        //call value from lab_test_subvalue
        this._studentservice.gettablevaluebyid(this.Students.vchrNo, this.Students.vchrDate).subscribe((data: any) => {
          for (let i = 0; i < this.testreport.length; i++) {
            let element = this.testreport[i];
            if (JSON.parse(JSON.stringify(data))[element.testname.trim()] != undefined) {
              element.value = JSON.parse(JSON.stringify(data))[element.testname.trim()]['value'];
              element.interpet = data[element.testname.trim()]['interpet'];
              element.comments = data[element.testname.trim()]['comments'];
            }
            this.valueCheck(i);
          };
        });
      });
    });
  }

  viewResult(report: testreport): boolean {
    if (((report.subgroup.toLowerCase() == "yes") || report.Ipet == "Y") || report.Wordcode != "") {
      return false
    } else {
      return true
    }
  }

  addNewItem(data: any) { }

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

  printReport() {

    const classes = document.getElementsByClassName("enterValue")

    for (let i = 0; i < classes.length; i++) {
      let e = classes.item(i)
      if (e != null) {
        e.setAttribute("style", "border:0px;" + e.getAttribute("style"))
      }
    }

    const dclasses = document.getElementsByClassName("tbd")

    for (let i = 0; i < dclasses.length; i++) {
      let e = dclasses.item(i)
      if (e != null) {
        e.setAttribute("style", "display:none")
      }
    }

    const element = document.getElementById("print")
    if (element != null) {
      let body = document.createElement("body")
      body.appendChild(element)
      document.body = body;
      this._studentservice.uploadReport(document.documentElement.innerHTML, this.url).subscribe((data: any) => {
      })
      window.print();
      window.location.reload()
    }
  }

  cancel(router: Router) {
    router.navigate(['homepage/Pathology']);
  }

  @needConfirmation()
  confirm() {
    this.printReport()
  }


  save() {
    this.Students.report = this.testreport
    if (this.validate()) {
      this._studentservice.savereport(this.Students)
        .subscribe(data => {
          defaultConfirmData.cancel = this.cancel
          defaultConfirmData.title = "Print"
          defaultConfirmData.message = "Do you want to print?"
          this.confirm()
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


  removeTest(test: testreport) {
    if (test.subgroup.toLowerCase() == "yes") {
      if (test.Heading == "MH") {
        test.isDeleted = true;
        this.testreport.forEach(element => {
          if (element.testid == test.testid && !element.isDeleted) {
            this.removeTest(element)
          }
        });
      } else {
        test.isDeleted = true;
        this.testreport.forEach(element => {
          if (element.testid == test.testmasterid) {
            this.removeTest(element)
          }
        });
      }
    } else {
      test.isDeleted = true
    }
  }


  deleteTest(i: number) {
    this.removeTest(this.testreport[i]);
  }

  valueCheck(i: number) {
    let report = this.testreport[i];
    let normalValues = report.normalvalue.split("-")
    if (normalValues.length == 2) {
      if (parseInt(report.value) < parseInt(normalValues[0])) {
        report.isNormal = false;
      } else if (parseInt(report.value) > parseInt(normalValues[1])) {
        report.isNormal = false;
      } else {
        report.isNormal = true;
      }

    } else if (normalValues.length == 1) {
      if (report.value != report.normalvalue) {
        console.log("not normal")
        report.isNormal = false;
      } else {
        report.isNormal = true;
      }
    } else {
      report.isNormal = true;
    }
  }

}
