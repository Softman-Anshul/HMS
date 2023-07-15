import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import { OPD,IPDPAYMENT } from 'src/app/students';
import { IPDPaymentmodechangeComponent } from '../ipd-paymentmodechange/ipd-paymentmodechange.component';
import {MatDialog} from '@angular/material/dialog';
import { window } from 'rxjs';

@Component({
  selector: 'app-ipd-paymentdetails',
  templateUrl: './ipd-paymentdetails.component.html',
  styleUrls: ['./ipd-paymentdetails.component.css']
})
export class IPDPaymentdetailsComponent implements OnInit {
  OPD = new OPD();
  OPD2 = new OPD();
  OPD3 = new OPD();
  uname = '';
  Deposit = new IPDPAYMENT();
  declare Details : IPDPAYMENT[];
  totalrecamt=0;
  totalrefund=0;
  totalnetamt=0;
  declare time :string;
  declare selected:IPDPAYMENT;

  constructor( private _studentservice:StudentsService,
    private routes : ActivatedRoute,
    private Router :Router, 
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<IPDPaymentdetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {OPD:OPD},
   ) {
    this.OPD = data.OPD
    this.Deposit.ipdNo = this.OPD.dcmntNo;
    this.Deposit.uhID = this.OPD.uhID;
    }
  ngOnInit(): void {
      //call username 
      this.uname = this._studentservice.getUsername();
      if(this.uname == '')
      {
        this.Router.navigate(['']);
      }
     

       const routerParams = this.routes.snapshot.params;
       this._studentservice.getipdpaymentdetails(this.OPD.dcmntNo,this.OPD.uhID)
       .subscribe((data:IPDPAYMENT[]) => {
       this.Details= data;

       for(let i=0;i<this.Details.length;i++){
        this.totalrecamt +=  parseInt(this.Details[i].advanceReceived.toString());
        this.totalrefund +=  parseInt(this.Details[i].Refundpayment.toString());
       }
       this.totalnetamt = this.totalrecamt - this.totalrefund;
    });


     }
    
     onClick(): void {
      this.dialogRef.close();
     }
     onpaymode(): void {
      const dialogRef = this.dialog.open(IPDPaymentmodechangeComponent, {
        height:'550px', width: '650px',
        data: {OPD:this.selected.recno,OPD1:this.selected.ipdDate,OPD2:this.OPD.dcmntNo,OPD3:this.OPD.uhID},
      });
  
      dialogRef.afterClosed().subscribe(result => {
      });
    }
    onprint(): void {
      let id = this.selected.recno;
      let dt =   this.selected.ipdDate;
      let yrs = this.selected.Years;
      let dcmntno = this.OPD.dcmntNo;
      let uhid = this.OPD.uhID;
      this.Router.navigate(['homepage/ipdreceipt/' + id,dt,yrs,dcmntno,uhid]);

      this.dialogRef.close();
    }
    onNoClick(): void {
      this.dialogRef.close();
    }
    ondelete(): void {
      this.time = new Date().toLocaleTimeString('en-US', { hour12: true, hour: "numeric", minute: "numeric" });
      let id = this.selected.recno;
      let dt =   this.selected.ipdDate;
      var result = confirm("Want to delete?");
        if (result == true) {
          this._studentservice.deleterecipts(id,dt,this.uname,this.time)
            .subscribe(data => {
              alert("Delete Record....Thanks")
              this.onNoClick();
              this.Router.navigate(['homepage/ipdlist/']);
            })
        }
        else{
          this.onNoClick();
        }
      }
     
    
   }
   
