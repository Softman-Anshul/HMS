import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import { OPD,IPDPAYMENT, Students } from 'src/app/students';
import { IPDPaymentmodechangeComponent } from '../ipd-paymentmodechange/ipd-paymentmodechange.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-dueamount-list',
  templateUrl: './Test_due_list.component.html',
  styleUrls: ['./Test_due_list.component.css']
})
export class DueamountListComponent implements OnInit {
  OPD = new OPD();
  OPD2 = new OPD();
  OPD3 = new OPD();
  uname = '';
  Deposit = new Students();
  declare Details : Students[];
  totalrecamt=0;
  totalrefund=0;
  totalnetamt=0;
  declare selected:IPDPAYMENT;

  constructor( private _studentservice:StudentsService,
    private routes : ActivatedRoute,
    private Router :Router, 
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<DueamountListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {dcmntNo:any,uhID:any},
   ) {
    this.Deposit.dcmntNo = data.dcmntNo;
    this.Deposit.uhID = data.uhID;
    }

  ngOnInit(): void {
  //call username 
      this.uname = this._studentservice.getUsername();
      if(this.uname == '')
      {
        this.Router.navigate(['']);
      }
   
       const routerParams = this.routes.snapshot.params;
       this._studentservice.gettestduelist(this.Deposit.dcmntNo,this.Deposit.uhID)
       .subscribe((data:any[]) => {
       this.Details= data;

       for(let i=0;i<this.Details.length;i++){
        this.totalrecamt +=  parseInt(this.Details[i].billamt.toString());
        this.totalrefund +=  parseInt(this.Details[i].balamt.toString());
       }
       this.totalnetamt = this.totalrecamt - this.totalrefund;
    });


     }
    
     onClick(): void {
      this.dialogRef.close();
     }
     
    onprint(): void {
      window.print();
    }
   }
   
