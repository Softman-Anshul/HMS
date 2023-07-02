import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import { testreport } from './../../students';

@Component({
  selector: 'app-resultcomment',
  templateUrl: './resultcomment.component.html',
  styleUrls: ['./resultcomment.component.css']
})
export class ResultcommentComponent implements OnInit {
  
  testreport = new testreport();
  index = 0

  constructor( private _studentservice:StudentsService,
    private routes : ActivatedRoute,
    private Router :Router, 
    public dialogRef: MatDialogRef<ResultcommentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {testreport:testreport,i:number},
    ) {
      this.testreport = data.testreport
      this.index = data.i
     }


  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close({"report":this.testreport,"i":this.index});
  }

  save(event:any):void{
    this.testreport.comments = event
  }
}
