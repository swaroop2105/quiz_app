import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quizproject';
  constructor(private _route:Router){

    if(localStorage.getItem('token')){
      _route.navigate(['/question1']);
    }
    else{
      _route.navigate(['/home']);
    }

  }
}
