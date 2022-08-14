import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // @Input() usersFromHomeComponent:any;
  @Output() CancelRegister = new EventEmitter();

  model:any = {};

  constructor(private accountservice : AccountService,
    private toastr:ToastrService) { }

  ngOnInit() {
  }

  register(){
    this.accountservice.register(this.model).subscribe(
      response =>{
        console.log(response);
        this.cancel();
      },error=>{
        console.log(error);
        this.toastr.error(error.error);

      }
      
    )
    console.log(this.model);
  }
  cancel(){
    this.CancelRegister.emit(false);
    console.log("canceled");
  }

}
