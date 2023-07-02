import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import { Students,Test } from './../../students';

@Component({
  selector: 'app-testdetails',
  templateUrl: './testdetails.component.html',
  styleUrls: ['./testdetails.component.css']
})
export class TestdetailsComponent implements OnInit {
 
  Students = new Students();
  declare testreport :Test[];
  uname = '';
  constructor( private _studentservice:StudentsService,
    private routes : ActivatedRoute,
    private Router :Router, 
    public dialogRef: MatDialogRef<TestdetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {students:Students},
   ) {
    this.Students = data.students
    }

  ngOnInit(): void {
       //call username 
   this.uname = this._studentservice.getUsername();
   if(this.uname == '')
   {
     this.Router.navigate(['']);
   }

    const routerParams = this.routes.snapshot.params;
    this._studentservice.getTestdetails(this.Students.vchrNo,this.Students.vchrDate)
    .subscribe((data:any) => {
    this.testreport= data;
    
  });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
