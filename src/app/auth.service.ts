import { Injectable } from "@angular/core";
import { User } from "./models/user";
import { Router } from '@angular/router';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  public isLoggedIn:boolean;
  public userName:string;
  public users:User[];
  constructor(private router: Router) {
    this.users=localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
  }

  public register(newUser:User){
    // alert("rrrrrrrrrrrrrrr");
    delete newUser['confirmPassword'];
    console.log(newUser);
    this.users.push(newUser);
    localStorage.setItem('users', JSON.stringify(this.users));
    this.userName=newUser['name'];
    this.isLoggedIn=true;
    alert(this.userName);
    
  }

  public login(userInfo: User) {
    for (let i=0; i < this.users.length; i++) {
            if (this.users[i].email === userInfo.email) {
              if(this.users[i].password === userInfo.password){
                this.isLoggedIn=true;
                this.userName=userInfo['name'];
                alert(this.userName);
                // return true;
              }
               
            }
        }
    // localStorage.setItem("ACCESS_TOKEN", "access_token");
  }


  public logout() {
    this.isLoggedIn=false;
  }

}
