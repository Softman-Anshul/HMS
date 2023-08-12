import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import {Router,ActivatedRoute} from '@angular/router';
import {City} from '../../students';
import { company } from '../../students';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-control-setup',
  templateUrl: './control-setup.component.html',
  styleUrls: ['./control-setup.component.css']
})
export class ControlSetupComponent implements OnInit {
  declare Cityname :City[];
  declare search:string;
  company = new company();
  uname = '';
  loginForm= new FormGroup({
      password: new FormControl()
  });

  showMesave:boolean=false;

  constructor(private _studentservice:StudentsService,
    private router: Router,) { }

  ngOnInit(): void {
    //call City
    this._studentservice.gettableCity()
    .subscribe((data:City[]) => {
    this.Cityname = data;
    });
    

  }
  submit(){
    this._studentservice.topcity(this.search)
   .subscribe(data => {
     alert('Thanks');
     window.location.reload();
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
