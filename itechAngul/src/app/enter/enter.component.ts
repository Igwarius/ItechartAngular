import { Component, OnInit, Input } from "@angular/core";
import { User } from "src/app/Models/user";
import { HttpClient } from "@angular/common/http";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { flatten, analyzeAndValidateNgModules } from "@angular/compiler";
import { Token } from "src/app/Models/token";
import { httpUrls } from "src/app/Constants/Urls";
@Component({
  selector: "app-enter",
  templateUrl: "./enter.component.html",
  styleUrls: ["./enter.component.css"]
})
export class EnterComponent implements OnInit {
  form: FormGroup;
  user: User;
  token: Token;
  errorchk: boolean = false;

  errorCheck(): void {
    this.errorchk = true;
  }
  navigate(): void {
    if (this.errorchk == false) {
      this.router.navigate(["/news"]);
    }
  }

  logUser(): void {
    const user = <User>this.form.value;
    console.log(user)
    console.log(user.login)
    debugger;
    this.http.post(httpUrls.SIGN_IN, user).subscribe(
      result => {
        this.token = <Token>result;
        console.log(user)
        console.log(user.login)
        debugger;
        localStorage.setItem("Login", JSON.stringify(user.login));
        localStorage.setItem("Access_token", JSON.stringify(this.token.token));
        localStorage.setItem(
          "Refreshtoken",
          JSON.stringify(this.token.refreshToken)
        );
      },
      error => this.errorCheck(),
      () => this.navigate()
    );
  }

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    });
  }
}
