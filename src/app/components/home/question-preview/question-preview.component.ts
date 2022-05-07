import { Component, OnInit } from '@angular/core';
import { CompilerService } from 'src/services/compiler.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TestCaseResultsComponent } from './test-case-results/test-case-results.component';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../../../../services/question.service';
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
  selector: 'app-question-preview',
  templateUrl: './question-preview.component.html',
  styleUrls: ['./question-preview.component.scss']
})
export class QuestionPreviewComponent implements OnInit {

  code: string = '';
  language: string = 'clike';
  mode:string = 'cpp';
  theme: string = 'dracula';
  customInput !: string;
  output !: string;
  loading: boolean = false;
  question:any = {
    name: '',
    question: '',
    tags: [],
    inputs: [],
    outputs: [],
    difficulty: '',
  };
  languageCodes = {
    "python" : 71,
    "cpp" : 14,
    "javascript" : 63,
    "c" : 48,
  }
  themeList = [
    { value: '3024-day', name: '3024-day' },
    { value: '3024-night', name: '3024-night' },
    { value: 'abbott', name: 'abbott' },
    { value: 'abcdef', name: 'abcdef' },
    { value: 'ambiance-mobile', name: 'ambiance-mobile' },
    { value: 'ambiance', name: 'ambiance' },
    { value: 'ayu-dark', name: 'ayu-dark' },
    { value: 'ayu-mirage', name: 'ayu-mirage' },
    { value: 'base16-dark', name: 'base16-dark' },
    { value: 'base16-light', name: 'base16-light' },
    { value: 'bespin', name: 'bespin' },
    { value: 'blackboard', name: 'blackboard' },
    { value: 'cobalt', name: 'cobalt' },
    { value: 'colorforth', name: 'colorforth' },
    { value: 'darcula', name: 'darcula' },
    { value: 'dracula', name: 'dracula' },
    { value: 'duotone-dark', name: 'duotone-dark' },
    { value: 'duotone-light', name: 'duotone-light' },
    { value: 'eclipse', name: 'eclipse' },
    { value: 'elegant', name: 'elegant' },
    { value: 'erlang-dark', name: 'erlang-dark' },
    { value: 'gruvbox-dark', name: 'gruvbox-dark' },
    { value: 'hopscotch', name: 'hopscotch' },
    { value: 'icecoder', name: 'icecoder' },
    { value: 'idea', name: 'idea' },
    { value: 'isotope', name: 'isotope' },
    { value: 'juejin', name: 'juejin' },
    { value: 'lesser-dark', name: 'lesser-dark' },
    { value: 'liquibyte', name: 'liquibyte' },
    { value: 'lucario', name: 'lucario' },
    { value: 'material-darker', name: 'material-darker' },
    { value: 'material-ocean', name: 'material-ocean' },
    { value: 'material-palenight', name: 'material-palenight' },
    { value: 'material', name: 'material' },
    { value: 'mbo', name: 'mbo' },
    { value: 'mdn-like', name: 'mdn-like' },
    { value: 'midnight', name: 'midnight' },
    { value: 'monokai', name: 'monokai' },
    { value: 'moxer', name: 'moxer' },
    { value: 'neat', name: 'neat' },
    { value: 'neo', name: 'neo' },
    { value: 'night', name: 'night' },
    { value: 'nord', name: 'nord' },
    { value: 'oceanic-next', name: 'oceanic-next' },
    { value: 'panda-syntax', name: 'panda-syntax' },
    { value: 'paraiso-dark', name: 'paraiso-dark' },
    { value: 'paraiso-light', name: 'paraiso-light' },
    { value: 'pastel-on-dark', name: 'pastel-on-dark' },
    { value: 'railscasts', name: 'railscasts' },
    { value: 'rubyblue', name: 'rubyblue' },
    { value: 'seti', name: 'seti' },
    { value: 'shadowfox', name: 'shadowfox' },
    { value: 'solarized', name: 'solarized' },
    { value: 'ssms', name: 'ssms' },
    { value: 'the-matrix', name: 'the-matrix' },
    { value: 'tomorrow-night-bright', name: 'tomorrow-night-bright' },
    { value: 'tomorrow-night-eighties', name: 'tomorrow-night-eighties' },
    { value: 'ttcn', name: 'ttcn' },
    { value: 'twilight', name: 'twilight' },
    { value: 'vibrant-ink', name: 'vibrant-ink' },
    { value: 'xq-dark', name: 'xq-dark' },
    { value: 'xq-light', name: 'xq-light' },
    { value: 'yeti', name: 'yeti' },
    { value: 'yonce', name: 'yonce' },
    { value: 'zenburn', name: 'zenburn' },
  ]
  modes = [
    { name: 'c', value: 'c' },
    { name: 'c++', value: 'cpp'},
    { name: 'python', value: 'python' },
    { name: 'javascript', value: 'javascript' },
  ]
  codeMirrorOptions: any = {
    theme: 'nord',
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
  }
  changeTheme():void{
    this.codeMirrorOptions = {
      ...this.codeMirrorOptions,
      theme: this.theme,
    };
  }
  handleChange($event: Event): void {
  }

  setEditorContent(event:any) {
  }

  compile() {
    if(this.loading)
      return;
    if(this.code.length == 0)
    {
      alert("Please enter some code");
      return ;
    }
    this.loading = true;
    this.output = "";

    let compileData :any= {
      source_code : btoa(this.code)
    };
    if(this.customInput)
    compileData.stdin = btoa(this.customInput);
    switch(this.mode) { 
      case "cpp": { 
        compileData.language_id = 54; 
         break; 
      } 
      case "python": { 
        compileData.language_id = 71; 
         break; 
      } 
      case "javascript": { 
        compileData.language_id = 63; 
         break; 
      } 
      case "c": { 
        compileData.language_id = 48; 
         break; 
      }  
   } 

    this.compilerService.compile(compileData).subscribe(res=>{
      this.loading = false;
      if(res.data.stdout)
        this.output = atob(res.data.stdout);
      else if(res.data.stderr)
        this.output = atob(res.data.stderr);
      else if(res.data.compile_output)
        this.output = atob(res.data.compile_output);
    })
    
  }
  constructor(private compilerService:CompilerService, public dialog: MatDialog, private route:ActivatedRoute, private questionService:QuestionService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.questionService.getQuestion((params as any)._id).subscribe(res=>{
        this.question = res.data;
      })
    })
  }

  openDialog(): void {
    let compileData :any= {
      source_code : btoa(this.code)
    };
    if(this.customInput)
    compileData.stdin = btoa(this.customInput);
    switch(this.mode) { 
      case "cpp": { 
        compileData.language_id = 54; 
         break; 
      } 
      case "python": { 
        compileData.language_id = 71; 
         break; 
      } 
      case "javascript": { 
        compileData.language_id = 63; 
         break; 
      } 
      case "c": { 
        compileData.language_id = 48; 
         break; 
      }  
   } 
    const dialogRef = this.dialog.open(TestCaseResultsComponent, {
      width: '500px',
      data: {id:this.question._id,compileData},
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }
}
