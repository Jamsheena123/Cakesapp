import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CakeService {

  constructor(private http:HttpClient) { 

  }
  signup(data:any){
    return this.http.post("http://127.0.0.1:8000/api/register/",data)
  }
  gettoken(data:any){
    return this.http.post("http://127.0.0.1:8000/api/token/",data)
  }
  getAllCakes(){
    if("token" in localStorage){
      let token:any=localStorage.getItem("token")
      let headers=new HttpHeaders({
          "Authorization": token,
          "Content-Type": "application/json"
      })
      return this.http.get("http://127.0.0.1:8000/api/cakes/",{headers})
    }
    else{
      return new Observable()
    }
}
retrievecake(id:number){
  if("token" in localStorage){
  let token:any=localStorage.getItem("token")
  let headers=new HttpHeaders({
      "Authorization": token,
      "Content-Type": "application/json"
  })
  return this.http.get(`http://127.0.0.1:8000/api/cakes/${id}/`,{headers})
}
else{
  return new Observable()
  }
}
addtocart(id:number,data:any){
  if("token" in localStorage){
    let token:any=localStorage.getItem("token")
    let headers=new HttpHeaders({
      "Authorizaton": token,
      "Content-Type": "application/json"

    })
    return this.http.post(`http://127.0.0.1:8000/api/cakes/${id}/cart_add/`,data,{headers})
  }
  else{
    return new Observable()
  }
}


cartlist(){
  if("token" in localStorage){
    let token:any=localStorage.getItem("token")
    let headers=new HttpHeaders({
      "Authorizaton": token,
      "Content-Type": "application/json"

    })
    return this.http.post(`http://127.0.0.1:8000/api/cakes/cart_add/`,{headers})
  }
  else{
    return new Observable()
  }
}


}
