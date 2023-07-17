import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Students } from '../../students';
import { StudentsService } from '../../students.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RefundComponent } from '../TEST-Refund/TEST-Refund.component';
import { TestdetailsComponent } from '../TEST-Testdetails/TEST-Testdetails.component';
import { TestPmodechangeComponent } from '../test-pmodechange/test-pmodechange.component';
import { TestDueRecivedComponent } from '../test-due-recived/test-due-recived.component';
import { formatDate } from '@angular/common';
import { defaultConfirmData, needConfirmation } from 'src/app/confirm-dialog/confirm-dialog.decorator';


export interface DialogData { Vno: string; }

@Component({
  selector: 'app-list-student',
  templateUrl: './Test-List.component.html',
  styleUrls: ['./Test-List.component.css']
})
export class ListStudentComponent implements OnInit {

  declare Students: Students[];
  declare selected: Students;
  declare index: number;
  Choice = "ALL";
  declare search: string;
  declare vrdt1: string;
  declare vrdt2: string;
  key = '';
  uname = ''
  declare permission: JSON
  declare shownewbooking: boolean
  declare editbooking: boolean
  declare deletebooking: boolean
  declare paymode: boolean
  declare Receiptsbooking: boolean
  declare Billingbooking: boolean
  declare Refundbooking: boolean
  totalamt = 0;
  totaldis = 0;
  totalrefund = 0;
  totalbalamt = 0;
  totalrecamt = 0;

  constructor(private _studentservice: StudentsService,
    private router: Router,
    public dialog: MatDialog) { }
  declare addForm: FormGroup;


  ngOnInit() {

    //call Date
    this.vrdt1 = formatDate(new Date(), 'yyyy-MM-dd', 'en_US').split('T')[0];
    this.vrdt2 = formatDate(new Date(), 'yyyy-MM-dd', 'en_US').split('T')[0];

    this._studentservice.gettable(this.vrdt1)
      .subscribe((data: Students[]) => {
        this.Students = data;
        for (let i = 0; i < this.Students.length; i++) {
          this.totalamt += parseInt(this.Students[i].grandTotal.toString());
          this.totaldis += parseInt(this.Students[i].discountAmt.toString());
          this.totalrefund += parseInt(this.Students[i].refund.toString());
          this.totalbalamt += parseInt(this.Students[i].balamt.toString());
          this.totalrecamt += parseInt(this.Students[i].recamt.toString());
        }
      });

    //call username 
    this.uname = this._studentservice.getUsername();
    if (this.uname == '') {
      this.router.navigate(['']);
    }

    //call permission    
    this._studentservice.getuserpermission(this.uname)
      .subscribe(data => {
        this.permission = data
        this.shownewbooking = JSON.parse(JSON.stringify(this.permission))["TestBooking"]["Booking"]["inst"] == "Y";
        // this.editbooking    = JSON.parse(JSON.stringify(this.permission))["TestBooking"]["Booking"]["edt"] == "Y";
        // this.deletebooking  = JSON.parse(JSON.stringify(this.permission))["TestBooking"]["Booking"]["del"] == "Y";
        this.paymode = JSON.parse(JSON.stringify(this.permission))["TestBooking"]["Paymode"]["inst"] == "Y";
        this.Refundbooking = JSON.parse(JSON.stringify(this.permission))["TestBooking"]["Refund"]["inst"] == "Y";
        this.Receiptsbooking = JSON.parse(JSON.stringify(this.permission))["TestBooking"]["Receipts"]["inst"] == "Y";
        this.Billingbooking = JSON.parse(JSON.stringify(this.permission))["TestBooking"]["Billing"]["inst"] == "Y";

        //check key
        this._studentservice.getCompany()
          .subscribe((data: any) => {
            this.key = data[0].Comp_key;
            var dd = this.key.charAt(0) + this.key.charAt(7);
            var MM = this.key.charAt(12) + this.key.charAt(21);
            var yyyy = this.key.charAt(24) + this.key.charAt(6);
            var sdt = new Date(Date.parse(20 + yyyy + "-" + MM + "-" + dd));
            var cdt = new Date();
            if (sdt > cdt) {
              this.shownewbooking = false;
              this.editbooking = false;
              this.deletebooking = false;
            }

          });

      });


  }

  alterbooking() {
    if (this.selected.vchrDate == formatDate(new Date(), 'yyyy-MM-dd', 'en_US').split('T')[0]) {
      this.router.navigate(['/homepage/samplebill']);
    }
    else {
      if (JSON.parse(JSON.stringify(this.permission))["Backdate"]["Test_Edit"]["inst"] == "") {
        alert("You are not Authorized for backdate alter Test")
      }
      else {
        this.router.navigate(['/homepage/samplebill']);
      }
    }
  }
  newbooking() {
    this.router.navigate(['/homepage/newbooking']);
  }

  @needConfirmation()
  confirm(students: any) {
    this._studentservice.deletebooking(students.vchrNo, students.vchrDate)
      .subscribe(data => {
        this.Students = this.Students.filter(u => u !== students);
        window.location.reload();
      })
  }


  @needConfirmation()
  confirm1(students: any) {
    this._studentservice.deletebooking(students.vchrNo, students.vchrDate)
      .subscribe(data => {
        this.Students = this.Students.filter(u => u !== students);
      })
  }



  delete(students: any): void {
    if (students.vchrDate == formatDate(new Date(), 'yyyy-MM-dd', 'en_US').split('T')[0]) {
      defaultConfirmData.title = "Delete"
      defaultConfirmData.message = "Are you sure you want to delete?"
      this.confirm(students)
    }
    else {
      if (JSON.parse(JSON.stringify(this.permission))["Backdate"]["Test_Delete"]["inst"] == "") {
        alert("You are not Authorized for backdate delete")
      }
      else {
        defaultConfirmData.title = "Delete"
        defaultConfirmData.message = "Are you sure you want to delete?"
        this.confirm1(students)
      }
    }
  }
  printPageb() {
    this.router.navigate(['/homepage/receiptsb/' + this.selected.vchrNo]);
  }
  printPage() {
    this.router.navigate(['/homepage/receipts/' + this.selected.vchrNo]);
  }
  searchquery() {
    this._studentservice.gettablesearch(this.search, this.vrdt1, this.vrdt2, this.Choice)
      .subscribe((data: Students[]) => {
        this.Students = data;

        this.totalamt = 0;
        this.totaldis = 0;
        this.totalrefund = 0;
        this.totalbalamt = 0;
        this.totalrecamt = 0;
        for (let i = 0; i < this.Students.length; i++) {
          this.totalamt += parseInt(this.Students[i].grandTotal.toString());
          this.totaldis += parseInt(this.Students[i].discountAmt.toString());
          this.totalrefund += parseInt(this.Students[i].refund.toString());
          this.totalbalamt += parseInt(this.Students[i].balamt.toString());
          this.totalrecamt += parseInt(this.Students[i].recamt.toString());
        }

      });
  }
  directquery() {
    this._studentservice.gettablesearch(this.search, this.vrdt1, this.vrdt2, 'Direct')
      .subscribe((data: Students[]) => {
        this.Students = data;

        this.totalamt = 0;
        this.totaldis = 0;
        this.totalrefund = 0;
        this.totalbalamt = 0;
        this.totalrecamt = 0;
        for (let i = 0; i < this.Students.length; i++) {
          this.totalamt += parseInt(this.Students[i].grandTotal.toString());
          this.totaldis += parseInt(this.Students[i].discountAmt.toString());
          this.totalrefund += parseInt(this.Students[i].refund.toString());
          this.totalbalamt += parseInt(this.Students[i].balamt.toString());
          this.totalrecamt += parseInt(this.Students[i].recamt.toString());
        }
      });

  }
  openDialog(): void {
    if (this.selected.vchrDate == formatDate(new Date(), 'yyyy-MM-dd', 'en_US').split('T')[0]) {
      const dialogRef = this.dialog.open(RefundComponent, {
        height: '550px', width: '650px',
        data: { students: this.selected },
      });

      dialogRef.afterClosed().subscribe(result => {
      });
    }
    else {
      if (JSON.parse(JSON.stringify(this.permission))["Backdate"]["Test_Refund"]["inst"] == "") {
        alert("You are not Authorized for backdate Refund ")
      }
      else {
        const dialogRef = this.dialog.open(RefundComponent, {
          height: '550px', width: '650px',
          data: { students: this.selected },
        });

        dialogRef.afterClosed().subscribe(result => {
        });
      }
    }
  }

  openDialogpay(): void {
    if (this.selected.vchrDate == formatDate(new Date(), 'yyyy-MM-dd', 'en_US').split('T')[0]) {
      const dialogRef = this.dialog.open(TestPmodechangeComponent, {
        height: '550px', width: '650px',
        data: { students: this.selected },
      });

      dialogRef.afterClosed().subscribe(result => {
      });
    }
    else {
      if (JSON.parse(JSON.stringify(this.permission))["Backdate"]["Test_paymodechange"]["inst"] == "") {
        alert("You are not Authorized for backdate Paymode Change ")
      }
      else {
        const dialogRef = this.dialog.open(TestPmodechangeComponent, {
          height: '550px', width: '650px',
          data: { students: this.selected },
        });

        dialogRef.afterClosed().subscribe(result => {
        });
      }
    }
  }

  testdetails(): void {
    const dialogRef = this.dialog.open(TestdetailsComponent, {
      height: '400px', width: '400px',
      data: { students: this.selected },
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  onEdit(student: any): void {
    let id = student.vchrNo;
    let dt = student.vchrDate;
    let ty = "edit";
    this.router.navigate(['/homepage/newbooking/', { id: id, dt: dt, ty: ty }]);
  }
  Dueamt(students: any) {
    const dialogRef = this.dialog.open(TestDueRecivedComponent, {
      height: '500px', width: '650px',
      data: { OPD: students },
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}



