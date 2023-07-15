import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import { MEDICALCERT, OPD} from '../../students';

@Component({
  selector: 'app-opd-medicalcertificate-print',
  templateUrl: './opd-medicalcertificate-print.component.html',
  styleUrls: ['./opd-medicalcertificate-print.component.css']
})
export class OpdMedicalcertificatePrintComponent implements OnInit {
  OPD = new OPD();
  uname = '';
  declare cer :MEDICALCERT[]; 
  cer1 = new MEDICALCERT();
  
  constructor(private _studentservice:StudentsService,
    private routes : ActivatedRoute,
    private Router :Router, 
    ) {
      }

  ngOnInit(): void {
    const routerParams = this.routes.snapshot.params;
    //call username 
    this.uname = this._studentservice.getUsername();
    if(this.uname == '')
    {
      this.Router.navigate(['']);
    }
    this.cer1.recno = routerParams["id"];
    this.cer1.issuedt = routerParams["cerDate"]
    //certificate list
    this._studentservice.getmedicalcerbyrecno(this.cer1.recno,this.cer1.issuedt)
 .subscribe((data:any) => {
 this.cer1 = data[0];

 this._studentservice.getuhidsearch(this.cer1.uhID)
 .subscribe((data:any) => {
  this.OPD = data[0];
 });

 });
 

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
}
