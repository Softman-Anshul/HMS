import { Component, OnInit } from '@angular/core';
import { OpdregComponent } from '../OPD-Reg/OPD-Reg.component';
import {MatDialog} from '@angular/material/dialog';
import { StudentsService } from '../../students.service';
import { Router } from '@angular/router';
import {OPD } from '../../students';
import { OpdrefundComponent } from '../OPD-refund/OPD-refund.component';
import { OpdpmodechangeComponent } from '../OPD-Pmodechange/OPD-Pmodechange.component';
import { OpddoctorchangeComponent } from '../OPD-Doctorchange/OPD-Doctorchange.component';
import { OPDEMRComponent } from '../opd-emr/opd-emr.component';
import { IPDRegComponent } from '../ipd-reg/ipd-reg.component';
import { OpdMedicalcertificateComponent } from '../opd-medicalcertificate/opd-medicalcertificate.component';

@Component({
  selector: 'app-opdlist',
  templateUrl: './OPD-List.component.html',
  styleUrls: ['./OPD-List.component.css']
})
export class OpdlistComponent implements OnInit {
  Choice="ALL";
declare vrdt1:string;
declare vrdt2:string;
declare search:string;
declare OPD : OPD[];
declare selected:OPD;
count=0;
uname = ''
declare permission : JSON
declare registration : boolean
declare showrecipts : boolean
declare showparcha : boolean
declare editregistration : boolean
declare delregistration : boolean
declare showrefund : boolean
declare showpayment : boolean
declare showdoctor : boolean
declare showsearch : boolean
totalamt=0;
totaldis=0;
totalrefund=0;
totalbalamt=0;
totalrecamt=0;

  constructor( private _studentservice:StudentsService,
    private router: Router,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    //call Date
    this.vrdt1 = new Date().toISOString().split('T')[0];
    this.vrdt2 = new Date().toISOString().split('T')[0]; 

    this._studentservice.getopd(this.vrdt1)
    .subscribe((data:OPD[]) => {
      this.OPD= data;
      for(let i=0; i < this.OPD.length; i++){
          this.totalamt +=  parseInt(this.OPD[i].amt.toString());
           this.totaldis +=  parseInt(this.OPD[i].discount.toString());
           this.totalrefund +=  parseInt(this.OPD[i].refund.toString());
           this.totalrecamt +=  parseInt(this.OPD[i].srvcTax.toString());
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
       this.registration =     JSON.parse(JSON.stringify(this.permission))["OPD"]["Registration"]["inst"] == "Y";
      //  this.editregistration = JSON.parse(JSON.stringify(this.permission))["OPD"]["Registration"]["edt"] == "Y";
       this.delregistration =  JSON.parse(JSON.stringify(this.permission))["OPD"]["Registration"]["del"] == "Y";
       this.showrecipts =       JSON.parse(JSON.stringify(this.permission))["OPD"]["Receipts"]["inst"] == "Y";
       this.showparcha =       JSON.parse(JSON.stringify(this.permission))["OPD"]["Parcha"]["inst"] == "Y";
       this.showrefund =       JSON.parse(JSON.stringify(this.permission))["OPD"]["Refund"]["inst"] == "Y";
       this.showpayment =      JSON.parse(JSON.stringify(this.permission))["OPD"]["Paymode Change"]["inst"] == "Y";
       this.showdoctor =       JSON.parse(JSON.stringify(this.permission))["OPD"]["Doctor Change"]["inst"] == "Y";
       this.showsearch =       JSON.parse(JSON.stringify(this.permission))["OPD"]["OPD Search"]["inst"] == "Y";



        });

    
  }
  openDialogrefund(): void {
    if(this.selected.opdDate == new Date().toISOString().split('T')[0])
    {
    const dialogRef = this.dialog.open(OpdrefundComponent, {
      height:'550px', width: '650px',
      data: {OPD:this.selected},
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  else
  {
  if(JSON.parse(JSON.stringify(this.permission))["Backdate"]["opd_Refund"]["inst"] == "")
  {
    alert("You are not Authorized for backdate Refund ")
  }
  else
  {
    const dialogRef = this.dialog.open(OpdrefundComponent, {
      height:'550px', width: '650px',
      data: {OPD:this.selected},
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  }
}
  delete(students:any):void{
    if(students.opdDate == new Date().toISOString().split('T')[0])
    {
    var result = confirm("Want to delete?");
     if (result==true) {
    this._studentservice.deleteopd(students.dcmntNo,students.opdDate)
    .subscribe(data => {
      this.OPD = this.OPD.filter(u => u !== students); 
        }) 
        }
    } 
    else
    {
    if(JSON.parse(JSON.stringify(this.permission))["Backdate"]["opd_Delete"]["inst"] == "")
    {
      alert("You are not Authorized for backdate delete")
    }
    else
    {
      var result = confirm("Want to delete?");
     if (result==true) {
    this._studentservice.deleteopd(students.dcmntNo,students.opdDate)
    .subscribe(data => {
      this.OPD = this.OPD.filter(u => u !== students); 
        }) 
        }
    }
  }
}
  openDialogpmode(): void {
    if(this.selected.opdDate == new Date().toISOString().split('T')[0])
    {
      const dialogRef = this.dialog.open(OpdpmodechangeComponent, {
        height:'550px', width: '650px',
        data: {OPD:this.selected},
      });
  
      dialogRef.afterClosed().subscribe(result => {
      });
    }
    else
    {
    if(JSON.parse(JSON.stringify(this.permission))["Backdate"]["opd_paymodechange"]["inst"] == "")
    {
      alert("You are not Authorized for backdate paymode Change")
    }
    else
    {
      const dialogRef = this.dialog.open(OpdpmodechangeComponent, {
        height:'550px', width: '650px',
        data: {OPD:this.selected},
      });
  
      dialogRef.afterClosed().subscribe(result => {
      });
    }    
  }

  
}
  openDialogdoctor(): void {
    if(this.selected.opdDate == new Date().toISOString().split('T')[0])
    {
    const dialogRef = this.dialog.open(OpddoctorchangeComponent, {
      height:'550px', width: '650px',
      data: {OPD:this.selected},
    });

    dialogRef.afterClosed().subscribe(result => {
    });
    }
    else
    {
    if(JSON.parse(JSON.stringify(this.permission))["Backdate"]["opd_Doctorchange"]["inst"] == "")
    {
      alert("You are not Authorized for backdate Consultant Change")
    }
    else
    {
      const dialogRef = this.dialog.open(OpddoctorchangeComponent, {
        height:'550px', width: '650px',
        data: {OPD:this.selected},
      });
  
      dialogRef.afterClosed().subscribe(result => {
      });
    }
  }
}
  newreg() {
      const dialogRef = this.dialog.open(OpdregComponent, {
        height:'650px', width: '1500px',
        data: {OPD:undefined},
      });
  
      dialogRef.afterClosed().subscribe(result => {
      });
  }
  EMR(dcmntNo:any,opdDate:any){
    // let id1 = dcmntNo;
    // let dt1 = opdDate;
    // let ty1 =  "OPD";
    // this.router.navigate(['/homepage/parcha/' , {id1: id1, dt1: dt1,ty1:ty1}]);
    const dialogRef = this.dialog.open(OPDEMRComponent, {
      height:'650px', width: '1500px',
      data: {dcmntNo,opdDate},
    });
  }
  testbooking(dcmntNo:any,uhId:any){
       let id = dcmntNo;
    let dt = uhId;
    let ty =  "OPD";
    this.router.navigate(['/homepage/newbooking/' , {id: id, dt: dt,ty:ty}]);
    }
  // admitpatient(dcmntNo:any,opdDate:any){
  //  let id = dcmntNo;
  //  let dt = opdDate;
  //  let ty =  "OPD";
  //  this.router.navigate(['/homepage/newbooking/' , {id: id, dt: dt,ty:ty}]);
  //  }
  admitpatient(dcmntNo:any,opdDate:any) {
   let id = dcmntNo;
   let dt = opdDate;
   let ty =  "OPD";
   const dialogRef = this.dialog.open(IPDRegComponent, {
      height:'650px', width: '1500px',
      data: {OPD:dcmntNo,OPD2:opdDate,OPD3:undefined},
    });
   
    dialogRef.afterClosed().subscribe(result => {
    });
}
  searchquery(){
    this._studentservice.opdsearch(this.search,this.vrdt1,this.vrdt2,this.Choice)
    .subscribe((data:OPD[]) => {
    this.OPD= data;
  });
  }
  searchdirect(){
    this._studentservice.opdsearch(this.search,this.vrdt1,this.vrdt2,'Direct')
    .subscribe((data:OPD[]) => {
    this.OPD= data;
  });
  }
  onEdit(dcmntNo:any,opdDate:any): void {
    if(opdDate == new Date().toISOString().split('T')[0])
    {
    const dialogRef = this.dialog.open(OpdregComponent, {
      height:'650px', width: '1500px',
      data: {OPD:dcmntNo,OPD2:opdDate},
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  else
  {
    if(JSON.parse(JSON.stringify(this.permission))["Backdate"]["opd_Edit"]["inst"] == "")
    {
      alert("You are not Authorized for backdate Edit Change")
    }
    else
    {
      const dialogRef = this.dialog.open(OpdregComponent, {
        height:'650px', width: '1500px',
        data: {OPD:dcmntNo,OPD2:opdDate},
      });
      dialogRef.afterClosed().subscribe(result => {
      });
    }
  }
} 
openDialogparcha(){
  this.router.navigate(['opdparcha/' + this.selected.dcmntNo,this.selected.opdDate]);
}

openDialogreceipts(){
  this.router.navigate(['opdreceipt/' + this.selected.dcmntNo,this.selected.opdDate]);

}
Medicalcerficate(){
  const dialogRef = this.dialog.open(OpdMedicalcertificateComponent, {
    height:'550px', width: '750px',
    data: {OPD:this.selected},
  });

  dialogRef.afterClosed().subscribe(result => {
  });
}
}
