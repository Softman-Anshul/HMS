import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { StudentsService } from '../../students.service';
import {Router, ActivatedRoute} from '@angular/router';
import { Students } from '../../students';
import { group } from '../../students';


@Component({
  selector: 'app-test-pmodechange',
  templateUrl: './test-pmodechange.component.html',
  styleUrls: ['./test-pmodechange.component.css']
})
export class TestPmodechangeComponent implements OnInit {
  uname = '';
  Students = new Students();
  declare paymode : group[];

 constructor( private _studentservice:StudentsService,
  private routes : ActivatedRoute,
  private Router :Router, 
  public dialogRef: MatDialogRef<TestPmodechangeComponent>,
  @Inject(MAT_DIALOG_DATA) public data: {students:Students},
 ) {
  this.Students = data.students
  }
  
  ngOnInit(): void {
    const routerParams = this.routes.snapshot.params;

    //paymentmode
    this._studentservice.gettablegroup()
    .subscribe((data:group[]) => {
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