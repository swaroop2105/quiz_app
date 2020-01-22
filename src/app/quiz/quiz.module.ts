import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question1Component } from './question1/question1.component';
import { Question2Component } from './question2/question2.component';
import { Question3Component } from './question3/question3.component';
import { Question4Component } from './question4/question4.component';
import { ResultComponent } from './result/result.component';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';




const routes: Routes = [
  {
    path:'',
   component:HomeComponent
  },
  {
    path:'question1',
    component:Question1Component
  },
  {
    path:'question2',
    component:Question2Component
  },
  {
    path:'question3',
    component:Question3Component
  },
  {
    path:'question4',
    component:Question4Component
  },
  {
    path:'result',
    component:ResultComponent
  }
];

@NgModule({
  declarations: [Question1Component,  HomeComponent, Question2Component, Question3Component, Question4Component, ResultComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class QuizModule { }
