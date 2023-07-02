import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute, RouterPreloader} from '@angular/router';
import { Wordname } from 'src/app/students';

@Component({
  selector: 'app-testmaster-word',
  templateUrl: './testmaster-word.component.html',
  styleUrls: ['./testmaster-word.component.css']
})
export class TestmasterWordComponent implements OnInit {

  declare Wordname:Wordname[];
  uname = '';

  constructor(private _studentservice:StudentsService,
    private router: Router,
    private routes : ActivatedRoute) { }

  ngOnInit(): void {
       //call username 
   this.uname = this._studentservice.getUsername();
   if(this.uname == '')
   {
     this.router.navigate(['']);
   }

    //call Wrodcode
    this._studentservice.gettableWord()
    .subscribe((data:Wordname[]) => {
    this.Wordname = data;
    });
  }

}
