import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.email, Validators.required]), /*this email*/
    password:new FormControl(null, Validators.required)
  });


  constructor(private _router:Router, private _user:UserService) { }

  ngOnInit(): void {/*?*/
  }

  moveToRegister(){
    this._router.navigate(['/register']);
  }

  login(){
    //call the service and passthe form to the express app
    if(!this.loginForm.valid){ /*checking the whole form should be valid {}*/
      console.log('invalid form'); return;
    }
    //console.log(JSON.stringify(this.loginForm.value));
    this._user.login(JSON.stringify(this.loginForm.value))
    .subscribe(
      data=>{console.log(data);this._router.navigate(['/user']);},
      error=>console.error(error)
      
    )

  }

}
