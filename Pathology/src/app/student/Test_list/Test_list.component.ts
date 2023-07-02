import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component, OnInit} from '@angular/core';
import { Students } from '../../students';
import { StudentsService } from '../../students.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { RefundComponent } from '../Test_refund/Test_refund.component';
import { TestdetailsComponent } from '../testdetails/testdetails.component';
import { TestPaymodeComponent } from '../test-paymode/test-paymode.component';
import { TestDoctorchangeComponent } from '../test-doctorchange/test-doctorchange.component';
import { TestOutsourcechangeComponent } from '../test-outsourcechange/test-outsourcechange.component';

export interface DialogData {
  Vno: string;
}

@Component({
  selector: 'app-list-student',
  templateUrl: './Test_list.component.html',
  styleUrls: ['./Test_list.component.css']
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
totalgamt=0;
totaldamt=0;
totalramt=0;
totalnamt=0;
declare permission : JSON
declare shownewbooking : boolean
declare editbooking : boolean
declare deletebooking : boolean
declare reportbooking : boolean
declare Receiptsbooking : boolean
declare Billingbooking : boolean
declare Refundbooking : boolean
declare DeleteReport : boolean
declare paymode :boolean
declare doctor :boolean
declare otherlab :boolean

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

      for(let i=0;i<this.Students.length;i++){
        this.totalgamt +=  parseInt(this.Students[i].grandTotal.toString());
        this.totaldamt +=  parseInt(this.Students[i].discountAmt.toString());
        this.totalramt +=  parseInt(this.Students[i].refund.toString());
        this.totalnamt +=  parseInt(this.Students[i].recamt.toString());

       }
    
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
          this.editbooking = JSON.parse(JSON.stringify(this.permission))["TestBooking"]["Booking"]["edt"] == "Y";
          this.deletebooking = JSON.parse(JSON.stringify(this.permission))["TestBooking"]["Booking"]["del"] == "Y";
          this.reportbooking = JSON.parse(JSON.stringify(this.permission))["TestBooking"]["TestReport"]["inst"] == "Y";
          this.Receiptsbooking = JSON.parse(JSON.stringify(this.permission))["TestBooking"]["Receipts"]["inst"] == "Y";
          this.Billingbooking = JSON.parse(JSON.stringify(this.permission))["TestBooking"]["Billing"]["inst"] == "Y";
          this.Refundbooking = JSON.parse(JSON.stringify(this.permission))["TestBooking"]["Refund"]["inst"] == "Y";
          this.DeleteReport = JSON.parse(JSON.stringify(this.permission))["TestBooking"]["Delete Report"]["inst"] == "Y";
          this.paymode = JSON.parse(JSON.stringify(this.permission))["TestBooking"]["Paymode"]["inst"] == "Y";
          this.doctor = JSON.parse(JSON.stringify(this.permission))["TestBooking"]["Consultant Change"]["inst"] == "Y";
          this.otherlab = JSON.parse(JSON.stringify(this.permission))["TestBooking"]["Otherlab Change"]["inst"] == "Y";
          //check key
          this._studentservice.getCompany()
            .subscribe((data:any) => {
              this.key = data[0].Comp_key;
              var dd = this.key.charAt(0) + this.key.charAt(7);
              var MM = this.key.charAt(12) + this.key.charAt(21);
              var yyyy = this.key.charAt(24) + this.key.charAt(6);
              var sdt =  new Date(Date.parse(20 + yyyy + "-" + MM + "-" + dd));
              var cdt = new Date();
              if(sdt < cdt){
                this.shownewbooking = false;
                this.editbooking = false;
                this.deletebooking = false;
              }
             
          });
  
    });
    
}

newbooking(){
  this.router.navigate(['/homepage/newbooking']);
 }

onEdit(student:any): void {
  if(student.vchrDate == new Date().toISOString().split('T')[0])
  {
    let id = student.vchrNo;
        let dt = student.vchrDate;
        this.router.navigate(['/homepage/newbooking/' , {id: id, dt: dt}]);
}
else
{
if(JSON.parse(JSON.stringify(this.permission))["Backdate"]["Test_Edit"]["inst"] == "")
{
  alert("You are not Authorized for backdate alter Test")
}
else
{
  let id = student.vchrNo;
      let dt = student.vchrDate;
      this.router.navigate(['/homepage/newbooking/' , {id: id, dt: dt}]);
}
}
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
sample(){
  if(this.selected.vchrDate == new Date().toISOString().split('T')[0])
    {
    }
    else
    {
      if(JSON.parse(JSON.stringify(this.permission))["Backdate"]["Test_Refund"]["inst"] == "")
      {
        alert("You are not Authorized for backdate Refund ")
      }
      else
      {
      }
    }
}
openDialog(): void {
    if(this.selected.vchrDate == new Date().toISOString().split('T')[0])
    {
    const dialogRef = this.dialog.open(RefundComponent, {
      height:'450px', width: '550px',
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
      height:'450px', width: '550px',
      data: {students:this.selected},
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  }
}
dreports(){
  if(this.selected.vchrDate == new Date().toISOString().split('T')[0])
  {
    if(this.selected.prnyes == "Y")
    {
  var result = confirm("Want to delete Reports?");
 if (result==true) {
  this._studentservice.deletereprot(this.selected.vchrNo.toString(),this.selected.vchrDate)
  .subscribe(data => {
    window.location.reload();
  }) 
 }
  }
  else
  {
    alert("Sorry ! Report not Genrated")
  }

}
else
{
alert("Sorry ! You can not delete Backdate report")
}
}
openDialogpay(): void {
  if(this.selected.vchrDate == new Date().toISOString().split('T')[0])
    {
      const dialogRef = this.dialog.open(TestPaymodeComponent, {
        height:'450px', width: '550px',
        data: {students:this.selected},
      });
    
      dialogRef.afterClosed().subscribe(result => {
      });
    }
    else
    {
      if(JSON.parse(JSON.stringify(this.permission))["Backdate"]["Test_Paymode"]["inst"] == "")
      {
        alert("You are not Authorized for backdate Paymentmode Change ")
      }
      else
      {
        const dialogRef = this.dialog.open(TestPaymodeComponent, {
          height:'450px', width: '550px',
        data: {students:this.selected},
      });
    
      dialogRef.afterClosed().subscribe(result => {
      });
      }
    }
  
}
openDialogdoctor(): void {
  if(this.selected.vchrDate == new Date().toISOString().split('T')[0])
  {
    const dialogRef = this.dialog.open(TestDoctorchangeComponent, {
      height:'450px', width: '550px',
      data: {students:this.selected},
    });
  
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  else
  {
    if(JSON.parse(JSON.stringify(this.permission))["Backdate"]["Test_doctorChange"]["inst"] == "")
    {
      alert("You are not Authorized for backdate Consultant Change ")
    }
    else
    {
      const dialogRef = this.dialog.open(TestDoctorchangeComponent, {
        height:'450px', width: '550px',
      data: {students:this.selected},
    });
  
    dialogRef.afterClosed().subscribe(result => {
    });
    }
  }
}
  openDialogoutsource(): void {
    if(this.selected.vchrDate == new Date().toISOString().split('T')[0])
    {
      const dialogRef = this.dialog.open(TestOutsourcechangeComponent, {
        height:'450px', width: '550px',
        data: {students:this.selected},
      });
    
      dialogRef.afterClosed().subscribe(result => {
      });
    }
    else
    {
      if(JSON.parse(JSON.stringify(this.permission))["Backdate"]["Test_OtherlabChange"]["inst"] == "")
      {
        alert("You are not Authorized for backdate Outsource Lab Change ")
      }
      else
      {
        const dialogRef = this.dialog.open(TestOutsourcechangeComponent, {
          height:'450px', width: '550px',
        data: {students:this.selected},
      });
    
      dialogRef.afterClosed().subscribe(result => {
      });
      }
    }
}

printPageb() {
  this.router.navigate(['receiptsb/' + this.selected.vchrNo]);
}
printPage() {
  this.router.navigate(['receipts/' + this.selected.vchrNo]);
}
result(vchrNo:any):void{
let id = vchrNo;
this.router.navigate(['homepage/result/' + id]);
 } 

searchquery(){
this._studentservice.gettablesearch(this.search,this.vrdt1,this.vrdt2,this.Choice)
.subscribe((data:Students[]) => {
this.Students= data;

for(let i=0;i<this.Students.length;i++){
  this.totalgamt +=  parseInt(this.Students[i].grandTotal.toString());
  this.totaldamt +=  parseInt(this.Students[i].discountAmt.toString());
  this.totalramt +=  parseInt(this.Students[i].refund.toString());
  this.totalnamt +=  parseInt(this.Students[i].recamt.toString());

 }
});
}
testdetails(): void {
  
   const dialogRef = this.dialog.open(TestdetailsComponent, {
    height:'400px', width: '400px',
    data: {students:this.selected},
  });

  dialogRef.afterClosed().subscribe(result => {
  });
}

}



