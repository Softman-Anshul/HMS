import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute, RouterPreloader} from '@angular/router';
import { Labname } from 'src/app/students';

@Component({
  selector: 'app-masteroutsidelab',
  templateUrl: './masteroutsidelab.component.html',
  styleUrls: ['./masteroutsidelab.component.css']
})
export class MasteroutsidelabComponent implements OnInit {

  constructor(private _studentservice:StudentsService,
    private Router: Router,) { }

    declare labname : Labname[];
    labnam = new Labname();
    uname = '';
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
   
    this._studentservice.gettablelabname()
    .subscribe((data:Labname[]) => {
    this.labname = data;
    });
  }
  onSubmit(){
    if(this.validation()){
    this._studentservice.createlab(this.labnam)
   .subscribe(data => {
     alert('Records Saved...Thanks');
     window.location.reload();
    });
    }
  }
    onSubmitedit(){
      if(this.validation()){
      this._studentservice.updatelab(this.labnam)
      .subscribe(data => {
       alert('Records Modify...Thanks');
       window.location.reload();

   });
  }
    }
  deleter(item:any):void{
    var result = confirm("Want to delete?");
    if (result==true) {
      this._studentservice.deletelab(item)
    .subscribe(data => {
      window.location.reload();
    }) 
   } 
   else 
   {
     () => {} 
   }
  }
  editer(item:any):void{
    this._studentservice.getlabbyid(item)
    .subscribe((data:any) => {
      this.labnam = data[0]

//      this.addForm.patchValue(data);
    }) 
}
  tooletageedit(){
    this.showMeedit = true
    this.showMesave = false
  }
  mobilenumber(e: { which: any; keyCode: any; }) {		
		const charCode = e.which ? e.which : e.keyCode;
		
		if (charCode > 31 && (charCode < 48 || charCode > 57)) {
	  alert("OOPs! Only numeric values allowed")	
		}
  }
  validation(): boolean{
    if(this.labnam.labname == "" || this.labnam.labname == undefined){
      alert("Outsidelab Name is mandatory");
      return false
    }
    
    return true
  }
}
