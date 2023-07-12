import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import { OPD,roomshift,group,Ward} from '../../students';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-ipd-roomshifting',
  templateUrl: './ipd-roomshifting.component.html',
  styleUrls: ['./ipd-roomshifting.component.css']
})
export class IPDRoomshiftingComponent implements OnInit {
  OPD = new OPD();
  uname = '';
  declare Ward : Ward[];
  Ward1 = new Ward();
  declare room : Ward[];
  declare roomshift : roomshift[];
  cdt = new Ward();

  constructor(private _studentservice:StudentsService,
    private routes : ActivatedRoute,
    private Router :Router, 
    public dialogRef: MatDialogRef<IPDRoomshiftingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {OPD:OPD},
   ) {
    this.OPD = data.OPD
    this.Ward1.ipdno = this.OPD.dcmntNo;
    this.Ward1.uhid = this.OPD.uhID;
    }

  ngOnInit(): void {
   const routerParams = this.routes.snapshot.params;
   //call company for f.years
   this._studentservice.getCompany()
   .subscribe((data:any) => {
   this.OPD.Years = data[0].years;
   this.Ward1.Years = data[0].years;
  });

  this.Ward1.cdt = formatDate(new Date(), 'yyyy-MM-dd', 'en_US').split('T')[0]
 //call Ward
 this._studentservice.gettableward()
 .subscribe((data:any) => {
 this.Ward = data;
 });

 //call roomhistory
 this._studentservice.getshifttable(this.OPD.dcmntNo,this.OPD.uhID)
 .subscribe((data:roomshift[]) => {
 this.roomshift = data;
 }); 

    //call username 
 this.uname = this._studentservice.getUsername();
 if(this.uname == '')
 {
   this.Router.navigate(['']);
 }
this.Ward1.uname = this.uname;

}
onNoClick(): void {
  this.dialogRef.close();
}
onsave(){
  if(this.validation()){
  this._studentservice.roomshifting(this.Ward1)
  .subscribe(data => {
  alert('Records Saved...Thanks');
  this.onNoClick();
 window.location.reload();
 });
  }
}
validation(): boolean{
  if(this.Ward1.category == "" || this.Ward1.category == undefined){
    alert("Ward Name is mandatory");
    return false
  }
  if(this.Ward1.roomNo == 0 || this.Ward1.roomNo == undefined){
    alert("RoomNo is mandatory");
    return false
  }
  if(this.Ward1.Bedno == 0 || this.Ward1.Bedno == undefined){
    alert("BedNo is mandatory");
    return false
  }
  return true;
}
selectWard(){
  //call Consultant
  this._studentservice.getwardroom(this.Ward1.category)
  .subscribe((data:any) => {
  this.room = data;
  this.Ward1.roomNo = data.roomNo;
  this.Ward1.Bedno = data.Bedno;
});
}

}