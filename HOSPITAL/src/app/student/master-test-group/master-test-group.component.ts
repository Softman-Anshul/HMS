import { Component, OnInit } from '@angular/core';
import { testgroup } from 'src/app/students';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-master-test-group',
  templateUrl: './master-test-group.component.html',
  styleUrls: ['./master-test-group.component.css'],
})
export class MasterTestGroupComponent implements OnInit {

  testGroups : testgroup[] | undefined
  testGroup = new testgroup()
  constructor(private _studentservice:StudentsService) { }

  ngOnInit(): void {
    this._studentservice.getAllTestGroups()
      .subscribe((data:any) => {
        console.log(data);
        this.testGroups = data;
    });
  }

  addTestGroup(){
    this._studentservice.addTestGroup(this.testGroup)
      .subscribe((data:any) => {
          alert('Records Saved...Thanks');
          window.location.reload();
    });
  }

  delete(group: testgroup){
    this._studentservice.deleteTestGroup(group.group_id)
      .subscribe((data:any) => {
          alert('Records Deleted...Thanks');
          window.location.reload();
    });
  }
}
