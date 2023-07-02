import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { StudentsService } from '../../students.service';
import {Router, ActivatedRoute} from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Students } from './../../students';
import {consulant} from './../../students';

@Component({
  selector: 'app-edit-consultant-master',
  templateUrl: './edit-consultant-master.component.html',
  styleUrls: ['./edit-consultant-master.component.css']
})
export class EditConsultantMasterComponent implements OnInit {
  declare Students : Students[];
  declare consulant : consulant[];

   constructor(private formBuilder :FormBuilder,
    private _studentservice:StudentsService,
    private routes : ActivatedRoute,
    private Router :Router   ) {

   }

  ngOnInit(): void {
   
  }

}
