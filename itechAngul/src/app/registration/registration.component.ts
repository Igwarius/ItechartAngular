import { Component, OnInit } from "@angular/core";
import { User } from "src/app/user";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder
} from "@angular/forms";
@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"]
})
export class RegistrationComponent implements OnInit {
  public users: User[] = [];
  form: FormGroup;
  addUser(): void {
    const user = <User>this.form.value;
    this.users.push(user);
    this.http
      .post("https://localhost:44333/api/User/AddUser", user)
      .subscribe();
  }
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      login: new FormControl("", [
        Validators.required,
        Validators.min(3),
        Validators.max(15)
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.min(8),
        Validators.max(20)
      ])
    });
  }
}
