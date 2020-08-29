import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { QuestionComponent } from './question/question.component';
import {AuthGuard} from "./auth-guard"

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LoginComponent,
    QuestionsListComponent,
    QuestionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
