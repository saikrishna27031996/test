import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {QuestionService} from '../question-service'

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent implements OnInit {

  constructor(private testService: TestService,  private route: ActivatedRoute,
    private router: Router,private questionService:QuestionService) { }
     questionsList=[]
     filteredList=[];
     searchString:string="";

  ngOnInit(): void {
     this.testService.getQestions().subscribe((data:any[]) => {this.questionsList= data});
  }
  onSubmit(question){
    console.log(question);
    this.questionService.changeQuestion(question);
}
onSearch(){
  this.filteredList = this.questionsList.filter(res=>{
     return JSON.stringify(res.questionText).toLocaleLowerCase().includes(this.searchString.toLocaleLowerCase()) })
}
}

