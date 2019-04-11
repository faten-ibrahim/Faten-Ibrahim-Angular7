import { User } from './../../models/user';
import { Router } from "@angular/router";
import { AuthService } from "./../../auth.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup,Validators } from "@angular/forms";
// import { User } from  '../user';


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
  }, {});
    
  }

  // get formControls() { return this.loginForm.controls; }


  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value))
}

  login(){
    console.log(this.loginForm.value);
    this.submitted = true;
    if (this.loginForm.valid) {
      // this.router.navigateByUrl("/product/1");
      this.authService.login(this.loginForm.value);
      if(this.authService.isLoggedIn){
        this.router.navigateByUrl("/home");
      }else{
        alert("invalid email or password");
      }
     
    }
  }
  loginCallBack(): void {
    // alert("logged in");
  }
}
