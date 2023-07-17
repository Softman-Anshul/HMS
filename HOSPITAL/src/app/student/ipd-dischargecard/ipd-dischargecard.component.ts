import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentsService } from '../../students.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { OPD } from '../../students';
import { discard } from '../../students';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { docClick } from '@syncfusion/ej2-angular-richtexteditor';
import { disheading, discardtemp } from '../../students';
import { defaultConfirmData, needConfirmation } from 'src/app/confirm-dialog/confirm-dialog.decorator';

@Component({
  selector: 'app-ipd-dischargecard',
  templateUrl: './ipd-dischargecard.component.html',
  styleUrls: ['./ipd-dischargecard.component.css']
})
export class IpdDischargecardComponent implements OnInit {

  OPD = new OPD();
  uname = '';
  discard = new discard();
  stuserid = '';
  imageSrc: string | undefined;
  imageSrc1: string | undefined;
  imageSrc2: string | undefined;
  declare disheading: disheading[];
  disheading1 = new disheading();
  declare discardtemp: discardtemp[];
  declare index: string;


  constructor(private _studentservice: StudentsService,
    private routes: ActivatedRoute,
    private Router: Router,
    private https: HttpClient,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<IpdDischargecardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { OPD: OPD },
  ) {
    this.OPD = data.OPD
    this.discard.uhid = this.OPD.uhID;
    this.discard.ipdno = this.OPD.dcmntNo;
  }

  loginForm = new FormGroup({
    selectedtext: new FormControl()
  });
  ngOnInit(): void {
    //call username 
    this.uname = this._studentservice.getUsername();
    if (this.uname == '') {
      this.Router.navigate(['']);
    }

    const routerParams = this.routes.snapshot.params;
    this.discard.uname = this.uname;

    //CALL Heading
    this._studentservice.getdischargeheading()
      .subscribe((data: disheading[]) => {
        this.disheading1 = data[0];
      });



    //CALL tempname Heading
    this._studentservice.getdischargetempheading()
      .subscribe((data: any) => {
        this.discardtemp = data;
      });

    //call maxcardno
    this._studentservice.maxdiscardno()
      .subscribe((data: any) => {
        this.discard.cardno = data;

        //Load Data
        this._studentservice.dischargecardload(this.discard.ipdno, this.discard.uhid)
          .subscribe((data: any) => {
            this.discard = data[0];
            this.discard.ipdno = this.OPD.dcmntNo;
            this.discard.uhid = this.OPD.uhID;
            this.discard.cardno = data[0].cardno;
          });
      });

    this.discard.carddate = new Date().toISOString().split('T')[0];
    this.discard.opdrationdt = new Date().toISOString().split('T')[0];
    //call company for f.years
    this._studentservice.getCompany()
      .subscribe((data: any) => {
        this.OPD.Years = data[0].years;
        this.discard.Years = this.OPD.Years;

      });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  cancel(router: Router) {
    router.navigate(['homepage/ipdlist/']);
  }

  @needConfirmation()
  confirm() {
    let ipdno = this.discard.ipdno;
    let uhid = this.discard.uhid;
    let dt = this.OPD.opdDate;
    let category = this.OPD.category;
    let roomNo = this.OPD.roomNo;
    let Bedno = this.OPD.Bedno;
    this.Router.navigate(['/homepage/dischargereport/' + ipdno, uhid, dt, category, roomNo, Bedno]);
    this.onNoClick();
  }

  onsave() {
    let e_one = document.getElementById("editor-one")
    if (e_one != null) {
      this.discard.one = e_one.innerHTML;
    }
    let e_two = document.getElementById("editor-two")
    if (e_two != null) {
      this.discard.two = e_two.innerHTML;
    }
    let e_three = document.getElementById("editor-three")
    if (e_three != null) {
      this.discard.three = e_three.innerHTML;
    }
    let e_four = document.getElementById("editor-four")
    if (e_four != null) {
      this.discard.four = e_four.innerHTML;
    }
    let e_five = document.getElementById("editor-five")
    if (e_five != null) {
      this.discard.five = e_five.innerHTML;
    }
    let e_six = document.getElementById("editor-six")
    if (e_six != null) {
      this.discard.six = e_six.innerHTML;
    }
    let e_seven = document.getElementById("editor-seven")
    if (e_seven != null) {
      this.discard.seven = e_seven.innerHTML;
    }
    const routerParams = this.routes.snapshot.params;
    this._studentservice.dischargecardinsert(this.discard)
      .subscribe(data => {
          defaultConfirmData.cancel = this.cancel
          defaultConfirmData.title = "Print Report"
          defaultConfirmData.message = "Do you want to print reports?"
          this.confirm()
      });
  }

  selectedFile(arg0: string, selectedFile: any, name: any) {
    throw new Error('Method not implemented.');
  }
  bold(selectedtext: any): void {
    if (selectedtext == "a") {
      alert("A")
    }
    else {
      alert("others")
    }
  }
  selectTemp(event: any) {

    this.index = event.target.value;
    this._studentservice.dischargetempload(this.index)
      .subscribe((data: discardtemp[]) => {
        this.discard.ipdno = this.OPD.dcmntNo;
        this.discard.uhid = this.OPD.uhID;
        this.discard.carddate = new Date().toISOString().split('T')[0];
        this.discard.opdrationdt = new Date().toISOString().split('T')[0];
        let e_one = document.getElementById("editor-one")
        if (e_one != null) {
          e_one.innerHTML = data[0].one;
        }
        let e_two = document.getElementById("editor-two")
        if (e_two != null) {
          e_two.innerHTML = data[0].two;
        }
        let e_three = document.getElementById("editor-three")
        if (e_three != null) {
          e_three.innerHTML = data[0].three;
        }
        let e_four = document.getElementById("editor-four")
        if (e_four != null) {
          e_four.innerHTML = data[0].four;
        }
        let e_five = document.getElementById("editor-five")
        if (e_five != null) {
          e_five.innerHTML = data[0].five;
        }
        let e_six = document.getElementById("editor-six")
        if (e_six != null) {
          e_six.innerHTML = data[0].six;
        }
        let e_seven = document.getElementById("editor-seven")
        if (e_seven != null) {
          e_seven.innerHTML = data[0].seven;
        }
        let e_eight = document.getElementById("editor-eight")
        if (e_eight != null) {
          e_eight.innerHTML = data[0].eight;
        }
        let e_nine = document.getElementById("editor-nine")
        if (e_nine != null) {
          e_nine.innerHTML = data[0].nine;
        }
        let e_ten = document.getElementById("editor-ten")
        if (e_ten != null) {
          e_ten.innerHTML = data[0].ten;
        }
      });

  }
}
