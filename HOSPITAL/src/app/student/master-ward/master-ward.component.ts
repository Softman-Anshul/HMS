import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import {Router} from '@angular/router';
import {Ward } from '../../students';
import {MatDialog} from '@angular/material/dialog';
import { MasterWardInsertComponent } from '../master-ward-insert/master-ward-insert.component';
import { MasterWardEditComponent } from '../master-ward-edit/master-ward-edit.component';

@Component({
  selector: 'app-master-ward',
  templateUrl: './master-ward.component.html',
  styleUrls: ['./master-ward.component.css']
})
export class MasterWardComponent implements OnInit {
  uname = '';
  constructor(private _studentservice:StudentsService,
    private Router: Router,
    public dialog: MatDialog) { }

    declare Ward : Ward[];
    Ward1 = new Ward();
    
    showMeedit:boolean=false
    showMesave:boolean=true
    Mobile = false;
    totalward=0;


  ngOnInit(): void {
   //call username 
   this.uname = this._studentservice.getUsername();
   if(this.uname == '')
   {
     this.Router.navigate(['']);
   }

   this._studentservice.gettablewardmaster()
   .subscribe((data:any) => {
   this.Ward = data;
   
   for(let i=0;i<this.Ward.length;i++){
    this.totalward +=  parseInt(this.Ward[i].Bedno.toString());

   }

   });
  }
  onSubmit(){
  //   this._studentservice.createCity(this.Ward1)
  //  .subscribe(data => {
  //    alert('Records Saved...Thanks');
  //    window.location.reload();
  //   });
    }
    onSubmitnew(){
      const dialogRef = this.dialog.open(MasterWardInsertComponent, {
        height:'250px', width: '650px',
            data: {},
      });
    
      dialogRef.afterClosed().subscribe(result => {
      });
  }
    deleter(category:any,ipdno:any):void{
      var result = confirm("Want to delete?");
      if (result==true) {
        if(ipdno == 0)
        {
          this._studentservice.deleteWard(category)
          .subscribe(data => {
            alert("Thanks...Records Deleted")
            window.location.reload();
          }) 
        }
        else
        {
          alert("This Ward have some Patient please move all Patient to Other Ward")
        }
     } 
     else 
     {
       () => {} 
     }
    }
    
    editer(ward:any){
      const dialogRef = this.dialog.open(MasterWardEditComponent, {
        height:'550px', width: '650px',
            data: {Ward:ward},
      });
    
      dialogRef.afterClosed().subscribe(result => {
      });
  }
  tooletageedit(){
    this.showMeedit = true
    this.showMesave = false
  }
}