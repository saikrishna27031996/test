import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import { QuestionComponent } from './question/question.component';
import { AuthGuard } from './auth-guard';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'questionsList', canActivate: [AuthGuard],component: QuestionsListComponent },
  { path: 'question', canActivate: [AuthGuard], component: QuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
