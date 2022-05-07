import { Component, OnInit } from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { QuestionService } from '../../../services/question.service';
export interface Tag {
  name: string;
}
@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.scss']
})

export class ContributeComponent implements OnInit {
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
  constructor(private questionService:QuestionService) { }

  ngOnInit(): void {
  }

  addTestCase(){
    this.numberOfTestCases.push({});
    this.inputs.push("");
    this.outputs.push("");

  }

  contribute()
  {
    let problem:any={};
    problem.question =  this.question;
    problem.name = this.name;
    problem.tags = this.tags.map(tag=>tag.name);
    problem.inputs = this.inputs;
    problem.outputs = this.outputs;
    problem.difficulty = this.difficulty;
    console.log(problem); 
    this.questionService.createQuestion(problem).subscribe(data=>{})
  }

}
