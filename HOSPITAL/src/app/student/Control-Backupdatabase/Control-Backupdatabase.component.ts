import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute, RouterPreloader} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {login1} from '../../students';

@Component({
  selector: 'app-backupdatabase',
  templateUrl: './Control-Backupdatabase.component.html',
  styleUrls: ['./Control-Backupdatabase.component.css']
})
export class BackupdatabaseComponent implements OnInit {
  declare login1 : login1[];
  selectedUser = "";
  uname = ''
  Mobile = false;
  declare choice: string;
  declare choice1: string;
  declare choice2: string;
  list1: string[] = [];
  list: string[] = [];


  constructor(private _studentservice:StudentsService,
    private router: Router,
    private routes : ActivatedRoute,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.Mobile = this._studentservice.isMob();

   //call username 
   this.uname = this._studentservice.getUsername();
   if(this.uname == '')
   {
     this.router.navigate(['']);
   }
  }
  changedata(){
    this.list1 = [];
    if (this.choice == "Copy User") {
      this._studentservice.gettableUser()
      .subscribe((data:any) => {
      this.login1 = data[0].stuserid;
      data.forEach((element: { stuserid: string; }) => {
        this.list.push(element.stuserid);
        this.list1.push(element.stuserid);
   
    });
  });
  }
  else{
    this._studentservice.gettableUser()
    .subscribe((data:any) => {
    this.login1 = data[0].stuserid;
    data.forEach((element: { stuserid: string; }) => {
      this.list.push(element.stuserid);
  });
});

  }
}
  useraction(choice:any,choice1:any,choice2:any){
console.log(choice,choice1,choice2)
this._studentservice.copyuser(choice,choice1,choice2)
.subscribe(data => {
  alert('Thanks');
  window.location.reload();

});
  }
}
