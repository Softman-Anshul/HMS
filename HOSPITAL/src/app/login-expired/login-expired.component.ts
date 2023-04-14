import { Component, Inject, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { FormBuilder,FormGroup, FormControl,Validators } from '@angular/forms';
import {Router} from '@angular/router';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-login-expired',
  templateUrl: './login-expired.component.html',
  styleUrls: ['./login-expired.component.css']
})
export class LoginExpiredComponent implements OnInit {
uname = ";"
sdt="";

constructor(private _studentservice:StudentsService,
  private router: Router,
  public dialogRef: MatDialogRef<LoginExpiredComponent>,
   @Inject(MAT_DIALOG_DATA) public data: {Students:any},
  ) {
     this.sdt = data.Students;
    }

    declare addForm: FormGroup;
   loginForm= new FormGroup({
    caution: new FormControl(),
  });

  ngOnInit(): void {
    this._studentservice.getCompany()
    .subscribe((data:any) => {
    });

    this.uname = this._studentservice.getUsername();

    if(this.uname == ''){
      this.router.navigate(['']);
    }

  }
  onSubmit(caution:any){
  if(caution == "ABDEFGHHP"){
      var audio = new Audio('http://silversoft.softmansystem.com/sound/welcome.mp3');
    audio.play();
    document.cookie = "uname=" + this.uname +"";
    this.router.navigate(['homepage/main']);
    this.dialogRef.close();
  }
  else{
    alert("Sorry ! Your type is wrong")
  }
   
   }       

}
