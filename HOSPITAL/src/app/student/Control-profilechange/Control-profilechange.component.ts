import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import {Router} from '@angular/router';
import { company } from '../../students';


@Component({
  selector: 'app-address-change',
  templateUrl: './Control-profilechange.component.html',
  styleUrls: ['./Control-profilechange.component.css']
})
export class AddressChangeComponent implements OnInit {
  company = new company();
  uname = '';
  constructor(private _studentservice:StudentsService,
    private Router: Router,) { }

  ngOnInit(): void {
    this._studentservice.getCompany()
    .subscribe((data:any[]) => {
    this.company = data[0];
    
    });
      //call username 
      this.uname = this._studentservice.getUsername();
      if(this.uname == '')
      {
        this.Router.navigate(['']);
      }
  }
  onSubmit(){
    this._studentservice.updateCompany(this.company)
    .subscribe(data => {
      alert('Modify Records Saved...Thanks');
      this.Router.navigate(['homepage/control']);    
    });
}
onDiscard(){
  this.Router.navigate(['/homepage/control']);
}
}
