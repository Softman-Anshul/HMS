import { Component, Inject, OnInit } from '@angular/core';
import {disheading} from '../../students';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-ipd-discharge-control',
  templateUrl: './ipd-discharge-control.component.html',
  styleUrls: ['./ipd-discharge-control.component.css']
})
export class IpdDischargeControlComponent implements OnInit {
declare disheading:disheading[];
disheading1 = new disheading();
uname = '';


constructor(private _studentservice:StudentsService,
  private routes : ActivatedRoute,
  private Router :Router, 
  public dialogRef: MatDialogRef<IpdDischargeControlComponent>,
  @Inject(MAT_DIALOG_DATA) public data: {},
 ) {
  }


  ngOnInit(): void {
    const routerParams = this.routes.snapshot.params;
    //call username 
 this.uname = this._studentservice.getUsername();
 if(this.uname == '')
 {
   this.Router.navigate(['']);
 }

this._studentservice.getdischargeheading()
.subscribe((data:disheading[]) => {
  this.disheading = data;
  this.disheading1 = data[0];
});
  }
  onSubmit(){
    console.log(this.disheading1)
    this._studentservice.dischargeheading(this.disheading1)
   .subscribe(data => {
     alert('Records Saved...Thanks');
     window.location.reload();
    });
    }

}
