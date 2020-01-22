import { Component, OnInit } from '@angular/core';
import { QuizserveService } from 'src/app/quizserve.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  marks:any;
  cname:any;
  constructor(private _quiz:QuizserveService,private _route:Router) { }

  ngOnInit() {
 
    this.marks=this._quiz.count;
     this.cname=this._quiz.name;
  }
  refresh(){
    localStorage.removeItem('token');
    this._route.navigate(['/home']);
  }

}
