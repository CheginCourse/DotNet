import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  registerMode = false
  user:any = {};
  constructor(private http:HttpClient) { }

  ngOnInit() {
    // this.getUser();
  }



  // getUser(){
  //   this.http.get('https://localhost:5001/User').subscribe(users=>this.user = users)
  // }


  registerToggle(){
    this.registerMode = !this.registerMode;
  }

  cancelRegisteredMode (event :boolean){

  this.registerMode = event;
}


}
