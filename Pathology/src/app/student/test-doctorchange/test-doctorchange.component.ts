import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import { Students,consulant } from '../../students';

@Component({
  selector: 'app-test-doctorchange',
  templateUrl: './test-doctorchange.component.html',
  styleUrls: ['./test-doctorchange.component.css']
})
export class TestDoctorchangeComponent implements OnInit {
  uname = '';
  Students = new Students();
  declare consulant : consulant[];

  constructor( private _studentservice:StudentsService,
    private routes : ActivatedRoute,
    private Router :Router, 
    public dialogRef: MatDialogRef<TestDoctorchangeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {students:Students},
   ) {
    this.Students = data.students
    }

  ngOnInit(): void {
    const routerParams = this.routes.snapshot.params;
     //call Consultant
     this._studentservice.gettableconsultant()
     .subscribe((data:consulant[]) => {
     this.consulant = data;
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
    this._studentservice.Savedoctor(this.Students)
   .subscribe(data => {
    alert('Records Saved...Thanks');
    this.onNoClick();
   // this.Router.navigate(['/homepage/list?']);
   window.location.reload();
   });

  }
  }
