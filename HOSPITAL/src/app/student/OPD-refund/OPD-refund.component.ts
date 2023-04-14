import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import { OPD} from '../../students';

@Component({
  selector: 'app-opdrefund',
  templateUrl: './OPD-refund.component.html',
  styleUrls: ['./OPD-refund.component.css']
})
export class OpdrefundComponent implements OnInit {
  OPD = new OPD();
  uname = '';

  constructor(private _studentservice:StudentsService,
    private routes : ActivatedRoute,
    private Router :Router, 
    public dialogRef: MatDialogRef<OpdrefundComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {OPD:OPD},
   ) {
    this.OPD = data.OPD
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
    this._studentservice.opdrefund(this.OPD)
   .subscribe(data => {
    alert('Records Saved...Thanks');
    this.onNoClick();
   // this.Router.navigate(['/homepage/list?']);
   window.location.reload();
   });

  }
}
