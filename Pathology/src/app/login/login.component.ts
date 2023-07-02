import { Component, OnInit } from '@angular/core';
import { login1 } from '../students';
import { StudentsService } from '../students.service';
import { FormBuilder,FormGroup, FormControl,Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  declare Students : login1[];
  company="";
  //"Shikhar Diagnosticd Lab";
  key = "";
  showupdatekey:boolean=false;

  constructor(private _studentservice:StudentsService,
    private formBuilder : FormBuilder,
    private Router :Router)
      { }
  declare addForm: FormGroup;
   loginForm= new FormGroup({
    userid: new FormControl(),
    password: new FormControl()
  });

  ngOnInit() {

    this.addForm = this.formBuilder.group({
    Comp_nam:['', Validators.required],
    });  
    
  this._studentservice.getCompany()
  .subscribe((data:any) => {
  this.addForm.patchValue(data[0]);
  this.key = data[0].Comp_key;
  this.company = data[0].Comp_nam;
  });
  }
  onSubmit(stuserid: any,stpassword: any):void{
  if(this.company == "Shikhar Diagnostic Lab")
  {
    var first = this.key.charAt(1);
    var secound = this.key.charAt(28);
    var dd = this.key.charAt(0) + this.key.charAt(7);
    var MM = this.key.charAt(12) + this.key.charAt(21);
    var yyyy = this.key.charAt(24) + this.key.charAt(6);
    var sdt =  new Date(Date.parse(20 + yyyy + "-" + MM + "-" + dd));
    var cdt = new Date();
    if(sdt > cdt && first == "P" && secound == "S" )
    {
      this._studentservice.gettablelogin(stuserid,stpassword)
      .subscribe(data => {
      this._studentservice.deleteAllCookies();
      document.cookie = "uname=" + stuserid +"";
      this.Router.navigate(['homepage/main']);
      },
      error => {
        alert('Wrong!..Username and Password');
      },
      () => {}  
      )

    }
    else
    {
       alert('Opps!..Software expired Contact to Vendor ');
       this.showupdatekey=true;
     }
  }
  else
  {
    alert('Wrong!..Company not match Contact to Vendor on mobile - 9997576627');
  }
    }

    keyupdate(){
      this.Router.navigate(['keyupdatestart']);
      
    }

 }
    
