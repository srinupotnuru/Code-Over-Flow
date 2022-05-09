import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { QuestionService } from '../../../../../services/question.service';

const ELEMENT_DATA: any[] = [
  {position: 1, status: 'Hydrogen', time: 1.0079, memory: 'H'},
];

@Component({
  selector: 'app-test-case-results',
  templateUrl: './test-case-results.component.html',
  styleUrls: ['./test-case-results.component.scss']
})
export class TestCaseResultsComponent implements OnInit {

  testCaseResults:any[]=[];
  loading:boolean = true;
  constructor(
    public dialogRef: MatDialogRef<TestCaseResultsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private questionService: QuestionService
    ) { 
      this.questionService.getTestCaseResults(this.data.id,this.data.compileData).subscribe((res:any)=>{
        let ind=0;
        for(let item of res.data)
        {
          this.testCaseResults.push({...{position:ind},...item})
        }
        this.loading = false;
      })
      
    }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];


}
