import { Component, OnInit, Input } from "@angular/core";
import { User } from "src/app/user";
import { HttpClient } from "@angular/common/http";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { flatten, analyzeAndValidateNgModules } from "@angular/compiler";
import { Token } from "src/app/token";
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

  processToken(token: Token): void {
    this.token = token;

    localStorage.setItem(
      "Access_token",
      JSON.stringify(this.token.Access_token)
    );
    localStorage.setItem(
      "Refreshtoken",
      JSON.stringify(this.token.RefreshToken)
    );
    this.errorchk = false;
  }
  ErrorChech(): void {
    this.errorchk = true;
    debugger;
  }
  Navigate(): void {
    if (this.errorchk == false) {
      this.router.navigate(["/news"]);
    }
  }

  logUser(): void {
    const user = <User>this.form.value;

    this.http.post(httpUrls.LOGIN_CONST, user).subscribe(
      result => {
        this.processToken(result);
      },
      error => this.ErrorChech(),
      () => this.Navigate()
    );
  }

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      Login: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    });
  }
}
