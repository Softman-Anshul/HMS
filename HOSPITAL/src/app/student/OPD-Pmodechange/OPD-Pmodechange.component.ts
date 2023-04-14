import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import { OPD} from '../../students';
import { group } from '../../students';

@Component({
  selector: 'app-opdpmodechange',
  templateUrl: './OPD-Pmodechange.component.html',
  styleUrls: ['./OPD-Pmodechange.component.css']
})
export class OpdpmodechangeComponent implements OnInit {
  OPD = new OPD();
  uname = '';
  declare group : group[];

  constructor(private _studentservice:StudentsService,
    private routes : ActivatedRoute,
    private Router :Router, 
    public dialogRef: MatDialogRef<OpdpmodechangeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {OPD:OPD},
   ) {
    this.OPD = data.OPD
    }

  ngOnInit(): void {
    const routerParams = this.routes.snapshot.params;
    //paymentmode
    this._studentservice.gettablegroup()
    .subscribe((data:group[]) => {
    this.group = data;
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
    this._studentservice.opdpaymentmodechange(this.OPD)
   .subscribe(data => {
    alert('Records Saved...Thanks');
    this.onNoClick();
   window.location.reload();
   });

  }
}
