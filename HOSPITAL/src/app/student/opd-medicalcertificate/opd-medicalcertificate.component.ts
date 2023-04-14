import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import { MEDICALCERT, OPD} from '../../students';

@Component({
  selector: 'app-opd-medicalcertificate',
  templateUrl: './opd-medicalcertificate.component.html',
  styleUrls: ['./opd-medicalcertificate.component.css']
})
export class OpdMedicalcertificateComponent implements OnInit {
  OPD = new OPD();
  uname = '';
  declare cer :MEDICALCERT[]; 
  cer1 = new MEDICALCERT();
  declare selected:MEDICALCERT;
  
  constructor(private _studentservice:StudentsService,
    private routes : ActivatedRoute,
    private Router :Router, 
    public dialogRef: MatDialogRef<OpdMedicalcertificateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {OPD:OPD},
   ) {
    this.OPD = data.OPD
    }

  ngOnInit(): void {
    const routerParams = this.routes.snapshot.params;
 //call username 
 this.uname = this._studentservice.getUsername();
 if(this.uname == '')
 {
   this.Router.navigate(['']);
 }

this.cer1.uhID = this.OPD.uhID;

    //call company for f.years
    this._studentservice.getCompany()
    .subscribe((data:any) => {
    this.cer1.years = data[0].years;
    });
        //Max certificate No 
        this._studentservice.getmaxcertno()
        .subscribe((data:any) => {
        this.cer = data;
        this.cer1.recno = data;
        });

        this.cer1.issuedt = new Date().toISOString().split('T')[0];
        this.cer1.fromdt = new Date().toISOString().split('T')[0];
        this.cer1.todt = "";
        this.cer1.dutyfrom = new Date().toISOString().split('T')[0];
        this.cer1.uname = this.uname

    //call username 
 this.uname = this._studentservice.getUsername();
 if(this.uname == '')
 {
   this.Router.navigate(['']);
 }
//certificate list
 this._studentservice.getmedicalcer()
 .subscribe((data:any) => {
 this.cer = data;
 });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onsave(){
    this._studentservice.medicalcerinsert(this.cer1)
   .subscribe(data => {
    var result = confirm("Print Receipts ?");
    if (result==true) {
      let id = this.cer1.recno;
      let cerDate = this.cer1.issuedt;
      this.Router.navigate(['MedicalCert_print/' + id,cerDate]);
      this.dialogRef.close();
    }
    else{
      this.onNoClick();
      window.location.reload();
      }
   });

  }
  deleter(recno:any,issuedt:any){
    var result = confirm("Want to delete?");
    if (result==true) {
      this._studentservice.medicalcerdelete(recno,issuedt)
    .subscribe(data => {
      window.location.reload();
    }) 
   } 
   else 
   {
     () => {} 
   }
  }

  print(recno:any,issuedt:any){
    this.Router.navigate(['MedicalCert_print/' + recno,issuedt]);
    this.dialogRef.close();
  }
}
