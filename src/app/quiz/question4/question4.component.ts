import { Component, OnInit } from '@angular/core';
import { QuizserveService } from 'src/app/quizserve.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-question4',
  templateUrl: './question4.component.html',
  styleUrls: ['./question4.component.css']
})
export class Question4Component implements OnInit {


  public value :any;
  data:any;
  selected:any;
  secondaryLock:any;
  secondaryDisplay:any;
  public errorshow=false;
  public primaryLock=true;
  public primaryDisplay=false;
  public withoutoption=false;
  public fsubmit=true;
  public lsubmit=false;
  constructor(private _quiz:QuizserveService,private _route:Router) { }

  ngOnInit() {
    this.data=this._quiz.getQuiz();
    this.value=(this.data[3]);
    this.secondaryLock=this._quiz.optionShow4;
    this.secondaryDisplay=this._quiz.secondaryDisplay4;
    this.fsubmit=this._quiz.finalsubmit;
    this.lsubmit=this._quiz.lastsubmit;
  }
  result(quiz : NgForm):void{
    if(quiz.value.option===this.value.answer){
      this.primaryDisplay=true;
      this.primaryLock=false;
      this._quiz.optionShow4=false;
      this._quiz.secondaryDisplay4=true;
      this._quiz.count=++this._quiz.count;
    }
    else{
      if(quiz.value.option==null){
        this.withoutoption=true;
      }
      else{
        this.errorshow=true;
        this.primaryLock=false;
        this._quiz.optionShow4=false;
        this._quiz.secondaryDisplay4=true;

      }
    }

  }
  nextque(){
    this._route.navigate(['/result']);
    this._quiz.finalsubmit=false;
    this._quiz.lastsubmit=true;
   
  }
  resultshow(){
    this._route.navigate(['/result']);
  }

}
