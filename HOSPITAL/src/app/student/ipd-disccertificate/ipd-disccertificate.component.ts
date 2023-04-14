import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import { OPD} from '../../students';
import {MatDialog} from '@angular/material/dialog';
import { DisccertificateLAMAComponent } from '../disccertificate-lama/disccertificate-lama.component';
import { DisccertificateDEATHComponent } from '../disccertificate-death/disccertificate-death.component';

@Component({
  selector: 'app-ipd-disccertificate',
  templateUrl: './ipd-disccertificate.component.html',
  styleUrls: ['./ipd-disccertificate.component.css']
})
export class IPDDisccertificateComponent implements OnInit {
  OPD = new OPD();
  uname = '';

 constructor(private _studentservice:StudentsService,
    public dialog: MatDialog,
    private router: Router,
    public dialogRef: MatDialogRef<IPDDisccertificateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {OPD:OPD},
   ) {
    this.OPD = data.OPD
    }

ngOnInit(): void {
}
lama(){
  let dcmntNo = this.OPD.dcmntNo;
  let uhID =   this.OPD.uhID;
  this.router.navigate(['lama/' , dcmntNo,uhID]);
  this.dialogRef.close();
}
death(){
  let dcmntNo = this.OPD.dcmntNo;
  let uhID =   this.OPD.uhID;
  this.router.navigate(['death/' , dcmntNo,uhID]);
  this.dialogRef.close();
}
reffer(){
  let dcmntNo = this.OPD.dcmntNo;
  let uhID =   this.OPD.uhID;
  this.router.navigate(['reffer/' , dcmntNo,uhID]);
  this.dialogRef.close();
}
}
