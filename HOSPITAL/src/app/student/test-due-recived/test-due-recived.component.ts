import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import { OPD,group, Students} from '../../students';

@Component({
  selector: 'app-test-due-recived',
  templateUrl: './test-due-recived.component.html',
  styleUrls: ['./test-due-recived.component.css']
})
export class TestDueRecivedComponent implements OnInit {
  Students = new Students();
  grandTotal = new Students();
  uname = '';
  declare group : group[];
  totalrecamt=0;
  totalrefund=0;
  totalnetamt=0;
   cdt = "";

  constructor(private _studentservice:StudentsService,
    private routes : ActivatedRoute,
    private Router :Router, 
    public dialogRef: MatDialogRef<TestDueRecivedComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {OPD:Students},
   ) {
    this.Students = data.OPD;
    }

  ngOnInit(): void {
    const routerParams = this.routes.snapshot.params;
  //  this.Deposit.rectime = new Date().toLocaleTimeString('en-US', { hour12: true, hour: "numeric",  minute: "numeric"});
  //  this.Deposit.reason = "Payment";

    this.Students.printdate = new Date().toISOString().split('T')[0];

   //call company for f.years
   this._studentservice.getCompany()
   .subscribe((data:any) => {
   this.Students.Years = data[0].years;
  });

   //paymentmode
 this._studentservice.gettablegroup()
 .subscribe((data:group[]) => {
 this.group = data;
 });

    //call username 
 this.uname = this._studentservice.getUsername();
 if(this.uname == '')
 {
   this.Router.navigate(['']);
 }

 this.Students.uname =  this.uname;

}
onNoClick(): void {
  this.dialogRef.close();
}
onsave(){
  this._studentservice.Test_due_recevied(this.Students)
  .subscribe(data => {

    var result = confirm("Print Receipts ?");
    if (result==true) {
    // this.Router.navigate(['ipdreceipt/' + id,dt,yrs,dcmntno,uhid]);
    this.dialogRef.close();
    }
    else
    {
    this.dialogRef.close();
    }
 });
}

public discount():void{
  // this.bill.discountAmt =  this.OPD.paydue - this.Deposit.advanceReceived;
}
}