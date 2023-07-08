import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component, OnInit} from '@angular/core';
import { Students } from '../../students';
import { StudentsService } from '../../students.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { RefundComponent } from '../TEST-Refund/TEST-Refund.component';
import { TestdetailsComponent } from '../TEST-Testdetails/TEST-Testdetails.component';
import { TestPmodechangeComponent } from '../test-pmodechange/test-pmodechange.component';
import { TestDueRecivedComponent } from '../test-due-recived/test-due-recived.component';


export interface DialogData {Vno: string;}

@Component({
  selector: 'app-list-student',
  templateUrl: './Test-List.component.html',
  styleUrls: ['./Test-List.component.css']
})
export class ListStudentComponent implements OnInit {
   
declare Students : Students[];
declare selected : Students;
declare index:number;
Choice="ALL";
declare search:string;
declare vrdt1:string;
declare vrdt2:string;
key = '';
uname = ''
declare permission : JSON
declare shownewbooking : boolean
declare editbooking : boolean
declare deletebooking : boolean
declare paymode : boolean
declare Receiptsbooking : boolean
declare Billingbooking : boolean
declare Refundbooking : boolean

constructor(private _studentservice:StudentsService,
  private router: Router,
  public dialog: MatDialog) { }
  declare addForm: FormGroup;


  ngOnInit() {
        
    //call Date
    this.vrdt1 = new Date().toISOString().split('T')[0];
    this.vrdt2 = new Date().toISOString().split('T')[0];

    this._studentservice.gettable(this.vrdt1)
    .subscribe((data:Students[]) => {
      this.Students= data;
    });
    
   //call username 
   this.uname = this._studentservice.getUsername();
   if(this.uname == '')
   {
     this.router.navigate(['']);
   }
        
    //call permission    
    this._studentservice.getuserpermission(this.uname)
        .subscribe(data => {
          this.permission = data
          this.shownewbooking = JSON.parse(JSON.stringify(this.permission))["TestBooking"]["Booking"]["inst"] == "Y";
          // this.editbooking    = JSON.parse(JSON.stringify(this.permission))["TestBooking"]["Booking"]["edt"] == "Y";
          // this.deletebooking  = JSON.parse(JSON.stringify(this.permission))["TestBooking"]["Booking"]["del"] == "Y";
          this.paymode        = JSON.parse(JSON.stringify(this.permission))["TestBooking"]["Paymode"]["inst"] == "Y";
          this.Refundbooking  = JSON.parse(JSON.stringify(this.permission))["TestBooking"]["Refund"]["inst"] == "Y";
          this.Receiptsbooking= JSON.parse(JSON.stringify(this.permission))["TestBooking"]["Receipts"]["inst"] == "Y";
          this.Billingbooking = JSON.parse(JSON.stringify(this.permission))["TestBooking"]["Billing"]["inst"] == "Y";
 
          //check key
          this._studentservice.getCompany()
            .subscribe((data:any) => {
              this.key = data[0].Comp_key;
              var dd = this.key.charAt(0) + this.key.charAt(7);
              var MM = this.key.charAt(12) + this.key.charAt(21);
              var yyyy = this.key.charAt(24) + this.key.charAt(6);
              var sdt =  new Date(Date.parse(20 + yyyy + "-" + MM + "-" + dd));
              var cdt = new Date();
              if(sdt > cdt){
                this.shownewbooking = false;
                this.editbooking = false;
                this.deletebooking = false;
              }
             
          });
  
    });
    
  
}
    
    alterbooking(){
      if(this.selected.vchrDate == new Date().toISOString().split('T')[0])
      {
      this.router.navigate(['/homepage/samplebill']);
    }
    else
    {
    if(JSON.parse(JSON.stringify(this.permission))["Backdate"]["Test_Edit"]["inst"] == "")
    {
      alert("You are not Authorized for backdate alter Test")
    }
    else
    {
      this.router.navigate(['/homepage/samplebill']);
    }
  }
    }
    newbooking(){
     this.router.navigate(['/homepage/newbooking']);
    }

    delete(students:any):void{
      if(students.vchrDate == new Date().toISOString().split('T')[0])
      {
    var result = confirm("Want to delete?");
     if (result==true) {
    this._studentservice.deletebooking(students.vchrNo,students.vchrDate)
    .subscribe(data => {
      this.Students = this.Students.filter(u => u !== students); 
   }) 
    } 
  } 
  else
  {
  if(JSON.parse(JSON.stringify(this.permission))["Backdate"]["Test_Delete"]["inst"] == "")
  {
    alert("You are not Authorized for backdate delete")
  }
  else
  {
    var result = confirm("Want to delete?");
    if (result==true) {
   this._studentservice.deletebooking(students.vchrNo,students.vchrDate)
   .subscribe(data => {
     this.Students = this.Students.filter(u => u !== students); 
  }) 
   } 
  }
    }
  }
  printPageb() {
      this.router.navigate(['receiptsb/' + this.selected.vchrNo]);
  }
  printPage() {
      this.router.navigate(['receipts/' + this.selected.vchrNo]);
  }
  searchquery(){
    this._studentservice.gettablesearch(this.search,this.vrdt1,this.vrdt2,this.Choice)
    .subscribe((data:Students[]) => {
    this.Students= data;
  });
  }
  directquery(){
    this._studentservice.gettablesearch(this.search,this.vrdt1,this.vrdt2,'Direct')
    .subscribe((data:Students[]) => {
    this.Students= data;
  });

  }
  openDialog(): void {
    if(this.selected.vchrDate == new Date().toISOString().split('T')[0])
    {
    const dialogRef = this.dialog.open(RefundComponent, {
      height:'550px', width: '650px',
      data: {students:this.selected},
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  else
  {
  if(JSON.parse(JSON.stringify(this.permission))["Backdate"]["Test_Refund"]["inst"] == "")
  {
    alert("You are not Authorized for backdate Refund ")
  }
  else
  {
    const dialogRef = this.dialog.open(RefundComponent, {
      height:'550px', width: '650px',
      data: {students:this.selected},
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  }
}

  openDialogpay(): void {
    if(this.selected.vchrDate == new Date().toISOString().split('T')[0])
    {
    const dialogRef = this.dialog.open(TestPmodechangeComponent, {
      height:'550px', width: '650px',
      data: {students:this.selected},
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  else
  {
  if(JSON.parse(JSON.stringify(this.permission))["Backdate"]["Test_paymodechange"]["inst"] == "")
  {
    alert("You are not Authorized for backdate Paymode Change ")
  }
  else
  {
    const dialogRef = this.dialog.open(TestPmodechangeComponent, {
      height:'550px', width: '650px',
      data: {students:this.selected},
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  }
  }

  testdetails(): void {
    const dialogRef = this.dialog.open(TestdetailsComponent, {
      height:'400px', width: '400px',
      data: {students:this.selected},
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  onEdit(student:any): void {
    let id = student.vchrNo;
    let dt = student.vchrDate;
    let ty =  "edit";
    this.router.navigate(['/homepage/newbooking/' , {id: id, dt: dt,ty:ty}]);
} 
Dueamt(students:any){
  const dialogRef = this.dialog.open(TestDueRecivedComponent, {
    height:'500px', width: '650px',
        data: {OPD:students},
  });

  dialogRef.afterClosed().subscribe(result => {
  });
}
}



