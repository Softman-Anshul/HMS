import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import {Router} from '@angular/router';
import { City } from '../../students';

@Component({
  selector: 'app-mastercity',
  templateUrl: './mastercity.component.html',
  styleUrls: ['./mastercity.component.css']
})
export class MastercityComponent implements OnInit {
uname = '';
  constructor(private _studentservice:StudentsService,
    private Router: Router,) { }

    declare city : City[];
    editCity  = new City();
    
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
    this._studentservice.gettableCity()
    .subscribe((data:City[]) => {
    this.city = data;
    });
  }
  onSubmit(){
    if(this.validation()){
    this._studentservice.createCity(this.editCity)
   .subscribe(data => {
     alert('Records Saved...Thanks');
     window.location.reload();
    });
    }
  }
    onSubmitedit(){
      if(this.validation()){
      this._studentservice.updateCity(this.editCity)
      .subscribe(data => {
       alert('Records Modify...Thanks');
       window.location.reload();
   });
  }
}
    deleter(city:any):void{
      var result = confirm("Want to delete?");
      if (result==true) {
        this._studentservice.deleteCity(city)
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
      this._studentservice.getcitybyid(item.cityid)
      .subscribe((data:any) => {
        this.editCity = data[0]
  //      this.addForm.patchValue(data);
      }) 
  }
  tooletageedit(){
    this.showMeedit = true
    this.showMesave = false
  }
  validation(): boolean{
    if(this.editCity.citynam == "" || this.editCity.citynam == undefined){
      alert("City Name is mandatory");
      return false
    }
    return true
  }
}
