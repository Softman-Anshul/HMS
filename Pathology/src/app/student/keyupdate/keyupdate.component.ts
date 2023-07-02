import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import {Router} from '@angular/router';
import { company } from '../../students';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-keyupdate',
  templateUrl: './keyupdate.component.html',
  styleUrls: ['./keyupdate.component.css']
})
export class KeyupdateComponent implements OnInit {
  company = new company();
  uname = '';
  declare vdate:Date;
  key = "";

  loginForm= new FormGroup({
      password: new FormControl()
  });

  showMesave:boolean=false;

  constructor(private _studentservice:StudentsService,
    private Router: Router,) { }


  ngOnInit(): void {
    this._studentservice.getCompany() 
    .subscribe((data:any[]) => {
    this.company = data[0];
    this.key = data[0].Comp_key;

    var dd = this.key.charAt(0) + this.key.charAt(7);
    var MM = this.key.charAt(12) + this.key.charAt(21);
    var yyyy = this.key.charAt(24) + this.key.charAt(6);
    this.vdate =  new Date(Date.parse(20 + yyyy + "-" + MM + "-" + dd));
    });
  }
  onSubmit(){
    this._studentservice.updateKey(this.company)
    .subscribe(data => {
      alert('Modify Records...Thanks');
      this.Router.navigate(['login']);    
    });
}
tooletageedit(password: any){
  if(password == "india")
  {
    this.showMesave=true;
  }
  else{
    alert("Wrong Password")
    this.showMesave=false;
    }
}
}
