import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import { Students } from '../../students';
import { paymode } from '../../students';

@Component({
  selector: 'app-test-paymode',
  templateUrl: './test-paymode.component.html',
  styleUrls: ['./test-paymode.component.css']
})
export class TestPaymodeComponent implements OnInit {
  uname = '';
  Students = new Students();
  declare paymode : paymode[];

  constructor( private _studentservice:StudentsService,
    private routes : ActivatedRoute,
    private Router :Router, 
    public dialogRef: MatDialogRef<TestPaymodeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {students:Students},
   ) {
    this.Students = data.students
    }

  ngOnInit(): void {
    const routerParams = this.routes.snapshot.params;
    //paymentmode
    this._studentservice.gettablepaymode()
    .subscribe((data:paymode[]) => {
    this.paymode = data;
    });
      //call username 
   this.uname = this._studentservice.getUsername();
   if(this.uname == '')
   {
     this.Router.navigate(['']);
   }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onsave(){
    this._studentservice.Saverpaymode(this.Students)
   .subscribe(data => {
    alert('Records Saved...Thanks');
    this.onNoClick();
   // this.Router.navigate(['/homepage/list?']);
   window.location.reload();
   });

  }
  }
