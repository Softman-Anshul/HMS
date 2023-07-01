import { Component, OnInit } from '@angular/core';
import { login1 } from '../students';
import { StudentsService } from '../students.service';
import { FormBuilder,FormGroup, FormControl,Validators } from '@angular/forms';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { LoginExpiredComponent } from '../login-expired/login-expired.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  declare Students : login1[];
  company="";
  city="";
  logo="";
  //"Shikhar Diagnosticd Lab";
  key = "";
  logindate="";

  constructor(private _studentservice:StudentsService,
    private formBuilder : FormBuilder,
    public dialog: MatDialog,
    private Router :Router)
      { }
  declare addForm: FormGroup;
   loginForm= new FormGroup({
    userid: new FormControl(),
    password: new FormControl(),
    city: new FormControl()
  });

  ngOnInit() {
    this.addForm = this.formBuilder.group({
    Comp_nam:['', Validators.required],
    Comp_city:['', Validators.required],
    });  
  
  this._studentservice.getCompany()
  .subscribe((data:any) => {
  this.addForm.patchValue(data[0]);
  this.key = data[0].Comp_key;
  this.company = data[0].Comp_nam;
  this.logo = data[0].logo;
  this.city = data[0].Comp_city;
  this.logindate = new Date().toISOString().split('T')[0];
    });

    
  }
  onSubmit(userid: any,password: any):void{
      //0M515-31069-0501T-81996-25T2R

  if(this.company == "KRISHNA HOSPITAL")
  {
          var dd = this.key.charAt(0) + this.key.charAt(7);
          var MM = this.key.charAt(12) + this.key.charAt(21);
          var yyyy = this.key.charAt(24) + this.key.charAt(6);
          var sdt1 =  new Date(Date.parse(20 + yyyy + "-" + MM + "-" + dd));
          var sdt = sdt1.toISOString().split('T')[0];
          var cdt = new Date().toISOString().split('T')[0];

          var today = new Date();
          var priorDate = new Date(new Date().setDate(today.getDate() + 15));
          var cdt1 = priorDate.toISOString().split('T')[0];

          if(sdt > cdt)
        {
              if(sdt < cdt1)
              {
                
                this._studentservice.gettablelogin(userid,password)
                .subscribe(async data => {
                  if(data == null){
                    alert('Wrong!..Username and Password');
                    // window.location.reload();
                  }
                  else
                  {
                    const dialogRef = this.dialog.open(LoginExpiredComponent, {
                      height:'250px', width: '450px',
                      data: {Students:sdt},
                      
                    });
                  
                    dialogRef.afterClosed().subscribe(result => {
                    });
                  }       
                });
              }
              else{
                this._studentservice.gettablelogin(userid,password)
                .subscribe(data => {
                  if(data == null){
                    alert('Wrong!..Username and Password');
                    // window.location.reload();
                  }
                  else
                  {
                    var audio = new Audio('http://silversoft.softmansystem.com/sound/welcome.mp3');
                    audio.play();
                    document.cookie = "uname=" + userid +"";
                    this.Router.navigate(['homepage/main']);
                  }       
                });
              }
       
        }
        else
        {
              alert('Renewal Due ....Contact your Software Provider for uninterrupted Services');
              window.location.reload();
        }
  }
  else
  {
    alert('Wrong!..Company not match Contact to Vendor ');
    window.location.reload();

  }
    }

  }