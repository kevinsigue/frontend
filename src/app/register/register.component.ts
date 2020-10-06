import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

//use reactive forms module for bindg the html form to the angular code
registerForm:FormGroup = new FormGroup({
  email:new FormControl(null, [Validators.email, Validators.required]), /*THIS EMAIL*/
  username:new FormControl(null,Validators.required),
  password:new FormControl(null, Validators.required),
  cpass:new FormControl(null, Validators.required),
})

  constructor(private _router:Router,private _userService:UserService) {  }

  ngOnInit(): void{/*?*/
   
  }

  moveToLogin(){
    this._router.navigate(['/login']);
  }

  register(){
    //call the service and passthe form to the express app
    if(!this.registerForm.valid || (this.registerForm.controls.password.value != this.registerForm.controls.cpass.value)) { /*checking the whole form should be valid {}*/
      console.log('invalid form'); return;
    }
    //console.log(JSON.stringify(this.registerForm.value));
    this._userService.register(JSON.stringify(this.registerForm.value))
    .subscribe(
      data=>{console.log(data);  this._router.navigate(['/login']);}, /** if user successfully register this data will be log on of aconsole of a broswer and then route it to log in compnonent  */
      error=>console.error(error)
      )
    console.log('register()succ');
  }
}
