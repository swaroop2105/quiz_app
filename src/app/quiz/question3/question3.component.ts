import { Component, OnInit } from '@angular/core';
import { QuizserveService } from 'src/app/quizserve.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-question3',
  templateUrl: './question3.component.html',
  styleUrls: ['./question3.component.css']
})
export class Question3Component implements OnInit {
  public value :any;
  data:any;
  selected:any;
  secondaryLock:any;
  secondaryDisplay:any;
  public errorshow=false;
  public primaryLock=true;
  public primaryDisplay=false;
  public withoutoption=false;

  constructor(private _quiz:QuizserveService,private _route:Router) { }

 

  ngOnInit() {
    this.data=this._quiz.getQuiz();
    this.value=(this.data[2]);
    this.secondaryLock=this._quiz.optionShow3;
    this.secondaryDisplay=this._quiz.secondaryDisplay3;
  }
  result(quiz : NgForm):void{
    if(quiz.value.option===this.value.answer){
      this.primaryDisplay=true;
      this.primaryLock=false;
      this._quiz.optionShow3=false;
      this._quiz.secondaryDisplay3=true;
      this._quiz.count=++this._quiz.count;
    }
    else{
      if(quiz.value.option==null){
        this.withoutoption=true;
      }
      else{
        this.errorshow=true;
        this.primaryLock=false;
        this._quiz.optionShow3=false;
        this._quiz.secondaryDisplay3=true;

      }
    }

  }
  nextque(){
    this._route.navigate(['/question4']);
  }

}
