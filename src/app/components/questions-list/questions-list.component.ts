import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../../services/question.service'
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 0, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 1, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 0, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 1, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 0, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 1, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 0, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 1, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 1, symbol: 'Ne'},
];

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss']
})
export class QuestionsListComponent implements OnInit {

  displayedColumns: string[] = ['name','difficulty'];
  dataSource = ELEMENT_DATA;
  questions = [];
  constructor(private questionService:QuestionService) { }

  ngOnInit(): void {
    this.questionService.getAllQuestions().subscribe(res=>{
      this.questions = res.data
    })
  }

}
