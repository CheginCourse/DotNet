import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_model/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  user:any
  loggedIn:boolean =true
  constructor(private http:HttpClient,
    private accountservice :AccountService ){};
    ngOnInit() {
      this.getUser();
      this.setCurrentUser();
    }
    setCurrentUser(){
      const user : User = JSON.parse(localStorage.getItem('user'));
      this.accountservice.setCurrentUser(user);
  
    }
    getUser(){
      this.http.get('https://localhost:5001/User').subscribe(response=>{
        this.user = response;
       } ,error => {
        console.log();
       })
    }
  
}
