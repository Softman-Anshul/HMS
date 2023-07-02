import { Component, OnInit } from '@angular/core';
import { StudentsService } from './../../students.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor(private _studentservice:StudentsService) { }

  ngOnInit(): void {
    
  }

}
