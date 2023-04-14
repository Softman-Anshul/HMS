import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Editor } from 'ngx-editor';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  declare editor: Editor;
  @Input()  text = '';
  data = {type:'doc',content:[{type:'paragraph',attrs:{align:null,},content:[{type:'text',text:'',},],}]}
  @Output() newItemEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.editor = new Editor();
    this.data = JSON.parse(this.text);
  }

  addNewItem(event:any) {
    this.newItemEvent.emit(JSON.stringify(event));
  }

}
