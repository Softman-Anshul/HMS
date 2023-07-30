import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute, RouterPreloader} from '@angular/router';
import { testmasterm,testmasterd } from './../../students';
import {MatDialog} from '@angular/material/dialog';
import { testgroup,testmaster } from './../../students';
import { Wordname,testname } from 'src/app/students';

@Component({
  selector: 'app-master-test',
  templateUrl: './master-test.component.html',
  styleUrls: ['./master-test.component.css']
})
export class MasterTestComponent implements OnInit {
  uname = '';
  Mobile = false;
  declare testcode:testmasterm[];
  testmasterm = new testmasterm();
  testmasterd = new testmasterd();
  declare Wordname:Wordname[];
  groupname ='';
  declare group:testgroup[];
  testname = new testname();
  list : testmasterd[] = [];

  constructor(
      private _studentservice:StudentsService,
      private router: Router,
      private routes : ActivatedRoute,
      public dialog: MatDialog
  ) {  }

  ngOnInit(): void {
         //call username 
   this.uname = this._studentservice.getUsername();
   if(this.uname == '')
   {
     this.router.navigate(['']);
   }

   this.Mobile = this._studentservice.isMob()
    //call maxtestid
     this._studentservice.getmaxtestid()
     .subscribe((data:any) => {
      this.testmasterm.Testid = data;
     });

  //call group
  this._studentservice.getAllTestGroups()
  .subscribe((data:any) => {
    this.group = data;
  
  });
  //call Wordcode
  this._studentservice.gettableWord()
  .subscribe((data:Wordname[]) => {
  this.Wordname = data;
  this.Wordname = this.removeduplicate(this.Wordname);
  });
  }

removeduplicate(arr : Wordname[]){
  let newarr : Wordname[] = [];
  let s = new Set<String>();
  arr.forEach(element => {
    if(!s.has(element.Wordcode) ){
      newarr.push(element);
      s.add(element.Wordcode);
    }
  });
  return newarr;
}

reload(){
  window.location.reload();
}
public addItem(): void {
  this.list.push(this.testmasterd);
  this.testmasterd = new testmasterd();
}
}
