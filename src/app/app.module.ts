import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizModule } from './quiz/quiz.module';
import { QuizserveService } from './quizserve.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuizModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [QuizserveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
