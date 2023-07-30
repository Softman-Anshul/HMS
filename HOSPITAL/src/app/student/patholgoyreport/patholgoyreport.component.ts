import { Component, OnInit } from '@angular/core';
import { Students } from '../../students';
import { StudentsService } from '../../students.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { RefundComponent } from '../TEST-Refund/TEST-Refund.component';
import { TestdetailsComponent } from '../TEST-Testdetails/TEST-Testdetails.component';
import { TestPmodechangeComponent } from '../test-pmodechange/test-pmodechange.component';
import { TestDueRecivedComponent } from '../test-due-recived/test-due-recived.component';
import { formatDate } from '@angular/common';

export interface DialogData {Vno: string;}


@Component({
  selector: 'app-patholgoyreport',
  templateUrl: './patholgoyreport.component.html',
  styleUrls: ['./patholgoyreport.component.css']
})
export class PatholgoyreportComponent implements OnInit {
  
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
  declare showdelresult : boolean
  declare showtestsample : boolean
  declare showdetails : boolean
  declare showsearch : boolean
  declare showreport : boolean
  declare showreportprint : boolean
  declare showwhatsapp : boolean
  
  constructor(private _studentservice:StudentsService,
    private router: Router,
    public dialog: MatDialog) { }
    declare addForm: FormGroup;
  ngOnInit(): void {
      
    //call Date
    this.vrdt1 = formatDate(new Date(), 'yyyy-MM-dd', 'en_US').split('T')[0];
    this.vrdt2 = formatDate(new Date(), 'yyyy-MM-dd', 'en_US').split('T')[0];

    this._studentservice.gettable_pathology(this.vrdt1)
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
  this._studentservice.permission = data
  if (this._studentservice.checkPermission("Menu", "Pathology", "inst") ) {

   this.showdelresult = JSON.parse(JSON.stringify(this._studentservice.permission))["Pathology"]["Delete Result"]["inst"] == "Y";
   this.showtestsample = JSON.parse(JSON.stringify(this._studentservice.permission))["Pathology"]["Test Sample"]["inst"] == "Y";
   this.showdetails = JSON.parse(JSON.stringify(this._studentservice.permission))["Pathology"]["Test Details"]["inst"] == "Y";
   this.showreport = JSON.parse(JSON.stringify(this._studentservice.permission))["Pathology"]["Report Genrate"]["inst"] == "Y";
   this.showreportprint = JSON.parse(JSON.stringify(this._studentservice.permission))["Pathology"]["Reprint Report"]["inst"] == "Y";
   this.showsearch = JSON.parse(JSON.stringify(this._studentservice.permission))["Pathology"]["Search"]["inst"] == "Y";
   this.showwhatsapp = JSON.parse(JSON.stringify(this._studentservice.permission))["Pathology"]["Whatsapp Report"]["inst"] == "Y";
  }
  else{
    this.router.navigate(['/homepage/main'])
  }
});
    
  
}
    
result(vchrNo:any):void{
  let id = vchrNo;
  this.router.navigate(['homepage/result/' + id]);
   } 


  searchquery(){
    this._studentservice.gettablesearch_pathology(this.search,this.vrdt1,this.vrdt2,this.Choice)
    .subscribe((data:Students[]) => {
    this.Students= data;
  });
  }
  directquery(){
    this._studentservice.gettablesearch_pathology(this.search,this.vrdt1,this.vrdt2,'Direct')
    .subscribe((data:Students[]) => {
    this.Students= data;
  });

  }
  openDialog(): void {
    if(this.selected.vchrDate == formatDate(new Date(), 'yyyy-MM-dd', 'en_US').split('T')[0])
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
    if(this.selected.vchrDate == formatDate(new Date(), 'yyyy-MM-dd', 'en_US').split('T')[0])
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

  sampledate(): void {
    const dialogRef = this.dialog.open(TestdetailsComponent, {
      height:'200px', width: '200px',
      data: {students:this.selected},
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  deleteresult(){
  alert("Pending")
  }

  Whatsapp() : void{
      const dialogRef = this.dialog.open(TestdetailsComponent, {
        height:'400px', width: '400px',
        data: {students:this.selected},
      });
  
      dialogRef.afterClosed().subscribe(result => {
      });
    }
  
}



