import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
temp:boolean=false;
  login(){
  this.temp=true; 
  }
  register(){
    this.temp=true;
  }

}
