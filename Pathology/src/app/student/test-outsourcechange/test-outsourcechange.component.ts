import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import { Students} from '../../students';
import { Labname } from 'src/app/students';

@Component({
  selector: 'app-test-outsourcechange',
  templateUrl: './test-outsourcechange.component.html',
  styleUrls: ['./test-outsourcechange.component.css']
})
export class TestOutsourcechangeComponent implements OnInit {
  uname = '';
  Students = new Students();
  declare Labname : Labname[];

  constructor( private _studentservice:StudentsService,
    private routes : ActivatedRoute,
    private Router :Router, 
    public dialogRef: MatDialogRef<TestOutsourcechangeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {students:Students},
   ) {
   this.Students = data.students
    }


  ngOnInit(): void {
    const routerParams = this.routes.snapshot.params;
    //call labname
    this._studentservice.gettablelabname()
    .subscribe((data:Labname[]) => {
    this.Labname = data;
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
    this._studentservice.Saveotherlab(this.Students)
   .subscribe(data => {
    alert('Records Saved...Thanks');
    this.onNoClick();
   // this.Router.navigate(['/homepage/list?']);
   window.location.reload();
   });

  }
  }