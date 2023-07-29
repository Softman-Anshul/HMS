import { Component, Input, OnInit } from '@angular/core';
import { setBlockType } from 'prosemirror-commands';
import { EditorState, Plugin, PluginKey,Transaction } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
import { Editor, schema } from 'ngx-editor';
import { isNodeActive } from 'ngx-editor/helpers';

@Component({
  selector: 'app-editor-custom-menu',
  templateUrl: './editor-custom-menu.component.html',
  styleUrls: ['./editor-custom-menu.component.css']
})
export class EditorCustomMenuComponent {
  constructor() {
  }

  @Input() editor: Editor = new Editor();

  onClick(e: MouseEvent): void {
    e.preventDefault();
    const { state, dispatch } = this.editor.view;
    this.execute(state,dispatch);
  }

  execute(state: EditorState, dispatch?: (tr: Transaction) => void): boolean {
    return setBlockType(schema.nodes['paragraph'])(state, dispatch);
  }

  update = (view: EditorView) => {
    const { state } = view;
    const { schema } = state;
  };

  ngOnInit(): void {
    const plugin = new Plugin({
      key: new PluginKey(`custom-menu-codemirror`),
      view: () => {
        return {
          update: this.update,
        };
      },
    });

    this.editor.registerPlugin(plugin);
  }
}
