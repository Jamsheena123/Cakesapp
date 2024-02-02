import { Component } from '@angular/core';
import { CakeService } from '../services/cake.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private service:CakeService,private route:Router){
  }
  regForm=new FormGroup({
    username:new FormControl("",Validators.required),
    email:new FormControl("",Validators.required),
    address:new FormControl("",Validators.required),
    phone:new FormControl("",Validators.required),
    password:new FormControl("",Validators.required),
  

  })
  register(){
    if(this.regForm.valid){
      let data=this.regForm.value
      this.service.signup(data).subscribe(data=>{
      this.route.navigateByUrl("login")
      })
    }
  }

}
