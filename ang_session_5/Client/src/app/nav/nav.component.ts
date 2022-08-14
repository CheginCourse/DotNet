import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  constructor(public accountservice:AccountService ,
     private router:Router , 
      private toast:ToastrService) { }

  ngOnInit() {
    // this.getCurrentUser();
  }


  login(){
    this.accountservice.login(this.model).subscribe(
      (response) =>{
        this.router.navigateByUrl('/members');
      // this.currentUser$ =this.accountservice.currentUser$;
            // this.loggedIn=true;
      },error=>{
          console.log(error);
          this.toast.error(error.error);
      }
    )
  }
  logout(){
    this.accountservice.logout();
    this.router.navigateByUrl('/');
    // this.loggedIn=false;
  }
  // getCurrentUser(){
  //   this.accountservice.currentUser$.subscribe(user=>{
  //     // this.loggedIn = !!user;
  //   })
  // }

}
