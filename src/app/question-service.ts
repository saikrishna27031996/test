import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }
  private questionSource = new BehaviorSubject<any>([]);
   question= this.questionSource.asObservable()
  

  changeQuestion(question: string) {

    this.questionSource.next(question);
  }
}

