import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import { group, Students, testgroup, testreport } from '../../students';
import { __values } from 'tslib';
import {MatDialog} from '@angular/material/dialog';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-testreport',
  templateUrl: './testreport.component.html',
  styleUrls: ['./testreport.component.css']
})
export class TestreportComponent implements OnInit {
  //declare Students : Students[];
  Students = new Students();
  declare testreport :testreport[];
  declare selected : Students;
  labTestWord = new Map<string,string[]>([]);
  uname = '';
  constructor(private _studentservice:StudentsService,
    private routes : ActivatedRoute,
    public dialog: MatDialog,
    private Router :Router 
  ) { }

  declare group : testgroup[];
  declare groups : testgroup[];

  config: AngularEditorConfig = {
    spellcheck: true,
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    showToolbar: false,
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
  };



  ngOnInit(): void {

   //call username 
   this.uname = this._studentservice.getUsername();
   if(this.uname == '')
   {
     this.Router.navigate(['']);
   }
   
    this._studentservice.getAllTestGroups()
    .subscribe((data:testgroup[]) => {
    this.group = data;
    this.groups = [];
    });

    const routerParams = this.routes.snapshot.params;
    this._studentservice.getlabtestword()
    .subscribe((data:any) => {
      for (var value in data) {  
        this.labTestWord.set(value,data[value])  
        }  
    });

    this._studentservice.gettablebyid(routerParams['id']).subscribe((data:any) => {
      this.Students = data[0];

      this._studentservice.getresulttable(this.Students.vchrNo,this.Students.vchrDate).subscribe((data:any) => {
        this.testreport= data;    
        
        this.group.forEach(grp => {
          for(let i=0;i<this.testreport.length;i++)
          {
            if(this.testreport[i].testgroup == grp.group_name && this.testreport[i].labid == 0)
            {
              this.groups.push(grp);
              break;
            }
          };
        });
      
        //call value from lab_test_subvalue
        this._studentservice.gettablevaluebyid(this.Students.vchrNo,this.Students.vchrDate).subscribe((data:any) => {
          for(let i=0;i<this.testreport.length;i++)
          {
              let element = this.testreport[i];
              if(JSON.parse(JSON.stringify(data))[element.testname] != undefined){
              element.value = JSON.parse(JSON.stringify(data))[element.testname]['value'];
              element.interpet = data[element.testname]['interpet'];
              element.comments = data[element.testname]['comments'];

              }
            };
        });
      });
    });
  }
  viewResult(report:testreport) :boolean{
    if(((report.subgroup.toLowerCase() == "yes" ) || report.Ipet == "Y") || report.Wordcode != ""){
      return false
    } else{
    return true
      }
    }    

    addNewItem(data:any){}
}
