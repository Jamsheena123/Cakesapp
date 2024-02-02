import { Component } from '@angular/core';
import { CakeService } from '../services/cake.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private service:CakeService,private route:Router){
  }
    loginForm=new FormGroup({
      username:new FormControl("",Validators.required),
      password:new FormControl("",Validators.required),
    })
    login(){
      if(this.loginForm.valid){
        let data=this.loginForm.value
        this.service.gettoken(data).subscribe(data=>{
          if ("token" in data){
            localStorage.setItem("token",`Token ${data.token}`)
            this.route.navigateByUrl("cakes")
          }
        })
      }
    }
  
 

}
