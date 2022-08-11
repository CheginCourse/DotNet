import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_model/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model:any={}
  // loggedIn:boolean =false
  // currentUser$ : Observable<User>;

  constructor(public accountservice:AccountService) { }

  ngOnInit() {
    // this.getCurrentUser();
  }


  login(){
    this.accountservice.login(this.model).subscribe(
      (response) =>{
           console.log(response)
      // this.currentUser$ =this.accountservice.currentUser$;
            // this.loggedIn=true;
      },error=>{
          console.log(error)
      }
    )
  }
  logout(){
    this.accountservice.logout();
    // this.loggedIn=false;
  }
  // getCurrentUser(){
  //   this.accountservice.currentUser$.subscribe(user=>{
  //     // this.loggedIn = !!user;
  //   })
  // }

}
