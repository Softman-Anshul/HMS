import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import { Students } from '../../students';


@Component({
  selector: 'app-refund',
  templateUrl: './TEST-Refund.component.html',
  styleUrls: ['./TEST-Refund.component.css']
})
export class RefundComponent implements OnInit {
  uname = '';
   Students = new Students();


  constructor( private _studentservice:StudentsService,
    private routes : ActivatedRoute,
    private Router :Router, 
    public dialogRef: MatDialogRef<RefundComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {students:Students},
   ) {
    this.Students = data.students
    }

  ngOnInit(): void {
    const routerParams = this.routes.snapshot.params;
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
    this._studentservice.Saverefund(this.Students)
   .subscribe(data => {
    alert('Records Saved...Thanks');
    this.onNoClick();
   // this.Router.navigate(['/homepage/list?']);
   window.location.reload();
   });

  }
  }

