import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizserveService {

  public optionShow1=true;
public secondaryDisplay1=false;

public optionShow2=true;
public secondaryDisplay2=false;

public optionShow3=true;
public secondaryDisplay3=false;

public optionShow4=true;
public secondaryDisplay4=false;

public finalsubmit=true;
public lastsubmit=false;
public answered1=true;
public answered2=true;
public count=0;
public name:any;
public verify;
  constructor() { }

  getQuiz(){
  
    return [
      {
        id: 0,
        question: ` What is the Capital Of India ?`,
        options: [`New Delhi`, `Mumbai`, `Kolkatta`],
        answer: `New Delhi`
      },
      {
        id: 1,
        question: `Who is the CEO of Tesla Motors?`,
        options: [`Bill Gates`, `Steve Jobs`, `Elon Musk`],
        answer: `Elon Musk`
      },
      {
        id: 3,
        question: `Name World's Richest Man?`,
        options: [`Jeff Bezo`, `Bill Gates`, `Mark Zuckerberg`],
        answer: `Jeff Bezo`
      },
      {
        id: 4,
        question: `World's Longest River?`,
        options: [`River Nile`, `River Amazon`, `River Godavari`],
        answer: `River Nile`
      }
    ];
  }
}
