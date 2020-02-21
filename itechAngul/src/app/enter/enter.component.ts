import { Component, OnInit, Input } from "@angular/core";
import { User } from "src/app/user";
import { HttpClient } from "@angular/common/http";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { flatten } from "@angular/compiler";

@Component({
  selector: "app-enter",
  templateUrl: "./enter.component.html",
  styleUrls: ["./enter.component.css"]
})
export class EnterComponent implements OnInit {
  form: FormGroup;
  user: User;
  errorchk: boolean = false;

  processUser(user): void {
    this.user = user;
    console.log(this.user.RefreshToken);
    debugger;
    localStorage.setItem("token", JSON.stringify(this.user.RefreshToken));

    this.errorchk = false;
  }
  ErrorChech(): void {
    this.errorchk = true;
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
