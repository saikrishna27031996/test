import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question-service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
 question;
  constructor(private questionService:QuestionService) { }

  ngOnInit(): void {
this.questionService.question.subscribe(question => this.question=question)
console.warn(this.question);
  }

}
