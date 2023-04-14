import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import {Router} from '@angular/router';
import { company } from '../../students';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-keyupdate',
  templateUrl: './Control-Keyupdate.component.html',
  styleUrls: ['./Control-Keyupdate.component.css']
})
export class KeyupdateComponent implements OnInit {
  company = new company();
  uname = '';
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
    });
  }
  onSubmit(){
    this._studentservice.updateKey(this.company)
    .subscribe(data => {
      alert('Modify Records Saved...Thanks');
      this.Router.navigate(['homepage/control']);    
    });
}
onDiscard(){
  this.Router.navigate(['/homepage/control']);
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
