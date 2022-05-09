import { Component, OnInit } from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { QuestionService } from '../../../services/question.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ToastrService } from 'ngx-toastr';
export interface Tag {
  name: string;
}
@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.scss']
})

export class ContributeComponent implements OnInit {

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '20rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };


  name:string = "";
  question:string = "";
  difficulty:string = "";
  numberOfTestCases: any=[];
  inputs: any = [];
  outputs: any = [];
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  tags: Tag[] = [];
  
  quillBasicEditorConfig = {
    toolbar :  {
      container: [
        ['bold', 'italic', 'underline', 'strike'],
        [{ header: 1 }, { header: 2 }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ align: [] }],
      ]
    }
  }
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.tags.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: any): void {
    const index = this.tags.indexOf(fruit);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }
  constructor(private questionService:QuestionService, private toaster:ToastrService) { }

  ngOnInit(): void {
  }

  addTestCase(){
    this.numberOfTestCases.push({});
    this.inputs.push("");
    this.outputs.push("");

  }

  resetForm()
  {
    //reload current window
    window.location.reload();
    // this.numberOfTestCases = 0;
  }
  contribute()
  {
    if(this.name.length == 0 || this.question.length == 0 || this.difficulty.length == 0 || this.tags.length == 0 || this.numberOfTestCases.length == 0)
    {
      this.toaster.error("Please fill all the data");
      return;
    } 
    const user = JSON.parse(sessionStorage.getItem('user') as string);
    let problem:any={};
    problem.question =  this.question;
    problem.name = this.name;
    problem.tags = this.tags.map(tag=>tag.name);
    problem.inputs = this.inputs;
    problem.outputs = this.outputs;
    problem.difficulty = this.difficulty;
    problem.user = user;
    this.questionService.createQuestion(problem).subscribe(data=>{
      if(data.success)
      {
        this.toaster.success('Question added successfully');
        this.resetForm();
      }
      else{
        this.toaster.error("Error in creating question");
        this.resetForm();
      }
    })
  }

}
