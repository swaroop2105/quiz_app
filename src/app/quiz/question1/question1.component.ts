import { Component, OnInit } from '@angular/core';
import { QuizserveService } from 'src/app/quizserve.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css']
})
export class Question1Component implements OnInit {

  public value :any;
  data:any;
  selected:any;
  secondaryLock:any;
  secondaryDisplay:any;
  public errorshow=false;
  public primaryLock=true;
  public primaryDisplay=false;
  public withoutoption=false;
  public answer=true;

  constructor(private _quiz:QuizserveService,private _route:Router) { }

  ngOnInit() {
    this.data=this._quiz.getQuiz();
    this.value=(this.data[0]);
    this.secondaryLock=this._quiz.optionShow1;
    this.secondaryDisplay=this._quiz.secondaryDisplay1;
    this.answer=this._quiz.answered1;
  }
  result(quiz : NgForm):void{
    if(quiz.value.option===this.value.answer){
      this.primaryDisplay=true;
      this.primaryLock=false;
      this._quiz.optionShow1=false;
      this._quiz.secondaryDisplay1=true;
      this._quiz.count=++this._quiz.count;
      this._quiz.answered1=false;
    }
    else{
      if(quiz.value.option==null){
        this.withoutoption=true;
      }
      else{
        this.errorshow=true;
        this.primaryLock=false;
        this._quiz.optionShow1=false;
        this._quiz.secondaryDisplay1=true;
        this._quiz.answered1=false;

      }
    }

  }
  nextque(){
    this._route.navigate(['/question2']);
  }

}
