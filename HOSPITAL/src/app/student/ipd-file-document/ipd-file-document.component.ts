import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import { OPD,IPDPAYMENT,group} from '../../students';

@Component({
  selector: 'app-ipd-file-document',
  templateUrl: './ipd-file-document.component.html',
  styleUrls: ['./ipd-file-document.component.css']
})
export class IpdFileDocumentComponent implements OnInit {
  OPD = new OPD();
  uname = '';


  constructor(private _studentservice:StudentsService,
    private routes : ActivatedRoute,
    private Router :Router, 
    public dialogRef: MatDialogRef<IpdFileDocumentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {OPD:OPD},
   ) {
    this.OPD = data.OPD
    }

  ngOnInit(): void {
  }
  admitticket(){
    let dcmntNo = this.OPD.dcmntNo;
  let dt =   this.OPD.opdDate;
  this.Router.navigate(['/homepage/admitticket/' , dcmntNo,dt]);
  this.dialogRef.close();
  }
  genconsent(){
  let dcmntNo = this.OPD.dcmntNo;
  let dt =   this.OPD.opdDate;
  this.Router.navigate(['/homepage/genconsent/' , dcmntNo,dt]);
  this.dialogRef.close();
  }
  package(){
    let dcmntNo = this.OPD.dcmntNo;
    let dt =   this.OPD.opdDate;
    this.Router.navigate(['/homepage/package/' , dcmntNo,dt]);
    this.dialogRef.close();
  }
  bloodconsent(){
    let dcmntNo = this.OPD.dcmntNo;
    let dt =   this.OPD.opdDate;
    this.Router.navigate(['/homepage/bloodconsent/' , dcmntNo,dt]);
    this.dialogRef.close();

  }
}
