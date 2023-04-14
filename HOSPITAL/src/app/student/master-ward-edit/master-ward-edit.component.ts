import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import { Ward } from 'src/app/students';

@Component({
  selector: 'app-master-ward-edit',
  templateUrl: './master-ward-edit.component.html',
  styleUrls: ['./master-ward-edit.component.css']
})
export class MasterWardEditComponent implements OnInit {
  uname = '';
  declare Ward1 : Ward[];
  Ward = new Ward();
  category = "";
  Floor = "";

  totalbed=0;

  constructor(private _studentservice:StudentsService,
    private routes : ActivatedRoute,
    private Router :Router, 
    public dialogRef: MatDialogRef<MasterWardEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {Ward:any},
   ) {
     this.Ward1 = data.Ward;
    }

  ngOnInit(): void {

    this._studentservice.getbedlist(this.Ward1)
   .subscribe((data:any) => {
   this.Ward1 = data;
   this.Ward = JSON.parse(JSON.stringify(this.Ward1[0]))
  //  this.Ward.roomNo = 0
   this.Ward.Bedno = 0
  });
   
  }
  deleter(roomNo:any,Bedno:any,ipdno:any){
    if(ipdno == 0)
    {
      var result = confirm("Want to delete?");
      if (result==true) {
      this._studentservice.deletebed(roomNo,Bedno)
      .subscribe((data:any) => {
      alert("Thanks....Deleted Records")
      window.location.reload();
      });
    }
    }
    else{
      alert("Sorry ! You can not delete this bed due to patient are on this bed")
    }

  }
  onSubmit(){

    // this._studentservice.checkroomno(this.Ward.roomNo)
    //   .subscribe((data:any) => {
    //     if(data == undefined)
    //     {
            //  console.log(this.Ward)
              this._studentservice.newbedinsert(this.Ward)
            .subscribe((data:any) => {
            alert("Thanks....Save Records")
            window.location.reload();
            });
      //   }
      //   else{
      //     alert("Room Number already in Database")
      //   }
      // });
  }
}
