import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import {Router} from '@angular/router';
import { Siftmaster } from '../../students';

@Component({
  selector: 'app-master-shift-timing',
  templateUrl: './master-shift-timing.component.html',
  styleUrls: ['./master-shift-timing.component.css']
})
export class MasterShiftTimingComponent implements OnInit {
  uname = '';
  constructor(private _studentservice:StudentsService,
    private Router: Router,) { }

    declare SHIFT : Siftmaster[];
    editSHIFT  = new Siftmaster();
    
    showMeedit:boolean=false
    showMesave:boolean=true
    Mobile = false;

  ngOnInit(): void {
  //call username 
  this.uname = this._studentservice.getUsername();
  if(this.uname == '')
  {
    this.Router.navigate(['']);
  }

  this.Mobile = this._studentservice.isMob()
   this._studentservice.gettableshift()
   .subscribe((data:any[]) => {
   this.SHIFT = data;
   });
 }
 onSubmit(){
  //  this._studentservice.createCity(this.editSHIFT)
  // .subscribe(data => {
  //   alert('Records Saved...Thanks');
  //   window.location.reload();
  //  });
   }
   onSubmitedit(){
  //    this._studentservice.updateCity(this.editSHIFT)
  //    .subscribe(data => {
  //     alert('Records Modify...Thanks');
  //     window.location.reload();

  // });
 }
   deleter(shfitid:any):void{
     var result = confirm("Want to delete?");
     if (result==true) {
    //    this._studentservice.deleteCity(shfitid)
    //  .subscribe(data => {
    //    window.location.reload();
    //  }) 
    } 
    else 
    {
      () => {} 
    }
   }
   
   editer(item:any):void{
    //  this._studentservice.getcitybyid(item.cityid)
    //  .subscribe((data:any) => {
    //    this.editCity = data[0]
    //  }) 
 }
 tooletageedit(){
   this.showMeedit = true
   this.showMesave = false
 }
}
