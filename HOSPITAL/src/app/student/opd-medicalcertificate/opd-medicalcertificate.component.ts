import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentsService } from '../../students.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { MEDICALCERT, OPD } from '../../students';
import { formatDate } from '@angular/common';
import { defaultConfirmData, needConfirmation } from 'src/app/confirm-dialog/confirm-dialog.decorator';

@Component({
  selector: 'app-opd-medicalcertificate',
  templateUrl: './opd-medicalcertificate.component.html',
  styleUrls: ['./opd-medicalcertificate.component.css']
})
export class OpdMedicalcertificateComponent implements OnInit {
  OPD = new OPD();
  uname = '';
  declare cer: MEDICALCERT[];
  cer1 = new MEDICALCERT();
  declare selected: MEDICALCERT;

  constructor(private _studentservice: StudentsService,
    private routes: ActivatedRoute,
    private Router: Router,
    public dialogRef: MatDialogRef<OpdMedicalcertificateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { OPD: OPD },
  ) {
    this.OPD = data.OPD
  }

  ngOnInit(): void {
    const routerParams = this.routes.snapshot.params;
    //call username 
    this.uname = this._studentservice.getUsername();
    if (this.uname == '') {
      this.Router.navigate(['']);
    }

    this.cer1.uhID = this.OPD.uhID;

    //call company for f.years
    this._studentservice.getCompany()
      .subscribe((data: any) => {
        this.cer1.years = data[0].years;
      });
    //Max certificate No 
    this._studentservice.getmaxcertno()
      .subscribe((data: any) => {
        this.cer = data;
        this.cer1.recno = data;
      });

    this.cer1.issuedt = formatDate(new Date(), 'yyyy-MM-dd', 'en_US').split('T')[0]
    this.cer1.fromdt = formatDate(new Date(), 'yyyy-MM-dd', 'en_US').split('T')[0]
    this.cer1.todt = "";
    this.cer1.dutyfrom = formatDate(new Date(), 'yyyy-MM-dd', 'en_US').split('T')[0]
    this.cer1.uname = this.uname

    //call username 
    this.uname = this._studentservice.getUsername();
    if (this.uname == '') {
      this.Router.navigate(['']);
    }
    //certificate list
    this._studentservice.getmedicalcer(this.OPD.uhID)
      .subscribe((data: any) => {
        this.cer = data;
      });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  cancel(router: Router) {
    window.location.reload();
  }

  @needConfirmation()
  confirm() {
    let id = this.cer1.recno;
    let cerDate = this.cer1.issuedt;
    this.Router.navigate(['homepage/MedicalCert_print/' + id, cerDate]);
    this.dialogRef.close();
  }



  onsave() {
    this._studentservice.medicalcerinsert(this.cer1)
      .subscribe(data => {
        defaultConfirmData.cancel = this.cancel
        defaultConfirmData.title = "Print Bill"
        defaultConfirmData.message = "Do you want to print bill?"
        this.confirm()
      });
  }

  @needConfirmation()
  confirm1(recno: any, issuedt: any) {
    this._studentservice.medicalcerdelete(recno, issuedt)
      .subscribe(data => {
        window.location.reload();
      })
  }

  deleter(recno: any, issuedt: any) {
    defaultConfirmData.cancel = this.cancel
    defaultConfirmData.title = "Delete"
    defaultConfirmData.message = "Are you sure you want to delete?"
    this.confirm1(recno,issuedt)
  }

  print(recno: any, issuedt: any) {
    this.Router.navigate(['homepage/MedicalCert_print/' + recno, issuedt]);
    this.dialogRef.close();
  }
}
