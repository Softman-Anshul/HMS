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
  @Output() newItemEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.editor = new Editor();
  }

  addNewItem(event:any) {
    this.newItemEvent.emit(this.text);
  }

}
