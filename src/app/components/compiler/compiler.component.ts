import { Component, OnInit } from '@angular/core';

const defaults = {
  markdown:
    '# Heading\n\nSome **bold** and _italic_ text\nBy [Scott Cooper](https://github.com/scttcper)',
  'text/typescript': `const component = {
  name: "@ctrl/ngx-codemirror",
  author: "Scott Cooper",
  repo: "https://github.com/scttcper/ngx-codemirror"
};
const hello: string = 'world';`,
};

@Component({
  selector: 'app-compiler',
  templateUrl: './compiler.component.html',
  styleUrls: ['./compiler.component.scss']
})
export class CompilerComponent implements OnInit {

  code: string = '';
  language: string = 'clike';
  mode: keyof typeof defaults = 'markdown';
  theme: string = 'dracula';
  themeList = [
    { value: 'codemirror', name: 'codemirror' },
    { value: 'material', name: 'material' },
    { value: 'tomorrow-night-bright', name: 'tomorrow-night-bright' },
    { value: 'the-matrix', name: 'the-matrix' },
    { value: 'ssms', name: 'ssms' },
    { value: 'solarized', name: 'solarized' },
    { value: 'shadowfox', name: 'shadowfox' },
    { value: 'seti', name: 'seti' },
    { value: 'tomorrow-night-eighties', name: 'tomorrow-night-eighties' },
    { value: 'ttcn', name: 'ttcn' },
    { value: 'twilight', name: 'twilight' },
    { value: 'vibrant-ink', name: 'vibrant-ink' },
    { value: 'xq-dark', name: 'xq-dark' },
    { value: 'xq-light', name: 'xq-light' },
    { value: 'yeti', name: 'yeti' },
    { value: 'zenburn', name: 'zenburn' },
    { value: 'icecoder', name: 'icecoder' },
    { value: 'isotope', name: 'isotope' }
  ]
  codeMirrorOptions: any = {
    theme: 'darcula',
    mode: 'cpp',
    lineNumbers: true,
    lineWrapping: true,
    foldGutter: true,
    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers'],
    autoCloseBrackets: true,
    matchBrackets: true,
    lint: true
  };

  defaults = defaults;

  changeMode(): void {
    this.codeMirrorOptions = {
      ...this.codeMirrorOptions,
      mode: this.mode,
    };
    console.log(this.codeMirrorOptions)
  }
  changeTheme():void{
    this.codeMirrorOptions = {
      ...this.codeMirrorOptions,
      theme: this.theme,
    };
    console.log(this.codeMirrorOptions)
  }
  handleChange($event: Event): void {
    console.log('ngModelChange', $event);
  }

  setEditorContent(event:any) {
    console.log(this.code);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
