import { Component, OnInit, Input } from "@angular/core";
import { User } from "src/app/user";
import { HttpClient } from "@angular/common/http";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { flatten } from "@angular/compiler";
import { Token } from "src/app/token";
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

  processUser(user): void {
    this.user = user;
    console.log(this.user.RefreshToken);
    debugger;
    localStorage.setItem("token", JSON.stringify(this.user));

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
    this.http.post("https://localhost:44333/api/User/SignIn", user).subscribe(
      result => this.processUser(user),
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
