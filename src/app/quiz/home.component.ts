import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizserveService } from '../quizserve.service';
import { stringify } from 'querystring';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // name: FormControl = new FormControl('', [
  //   Validators.required,
  // ]);
  url:any;
  res:any;
  obtained:any;
  ver=false;
  email: FormControl = new FormControl('', [
    Validators.required,
  ]);
  password: FormControl = new FormControl('', [
    Validators.required,
  ]);
  user:FormGroup = new FormGroup({
    // name:this.name,
    email:this.email,
    password:this.password
  })
  constructor(private _quiz:QuizserveService,private _route:Router,private http:HttpClient) {
    
   }

  ngOnInit() {
    
  }

  enterquiz(){
    if(this.user.valid){
    //  this._quiz.name= this.user.value.name;
      console.log(this.email);
      console.log(this.password);
      this.url='https://i-temple.pacewisdom.in/api/login';
      this.res=this.http.post(this.url,{email:this.email.value,password:this.password.value});
      this.res.subscribe((response)=>{
        localStorage.setItem('token',response.payload.token)
        if(response.success==true){
          this._route.navigate(['/question1']);
          this._quiz.name=response.payload.message;
        }
      });
    
      
    }
    console.log(this._quiz.verify);
     
  // this._route.navigate(['/question1']); clitan.c@pacewisdom.com 'clitan28'
    }
    
    

}

