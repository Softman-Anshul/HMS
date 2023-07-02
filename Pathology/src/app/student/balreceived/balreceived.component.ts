import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import { Students } from './../../students';
import { RefundComponent } from '../Test_refund/Test_refund.component';

@Component({
  selector: 'app-balreceived',
  templateUrl: './balreceived.component.html',
  styleUrls: ['./balreceived.component.css']
})
export class BalreceivedComponent implements OnInit {

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
