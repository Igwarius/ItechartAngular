import { Component, OnInit, Input } from "@angular/core";
import { User } from "src/app/user";
import { HttpClient } from "@angular/common/http";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-enter",
  templateUrl: "./enter.component.html",
  styleUrls: ["./enter.component.css"]
})
export class EnterComponent implements OnInit {
  form: FormGroup;
  user: User;
  processUser(user): void {
    this.user = user;
    localStorage.setItem("token", JSON.stringify(this.user.token));
  }
  logUser(): void {
    const user = <User>this.form.value;
    this.http
      .post("https://localhost:44333/api/User/SignIn", user)
      .subscribe(result => this.processUser(this.user));
    this.router.navigate(["/"]);
  }

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      Login: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    });
  }
}
