import { Component, OnInit } from "@angular/core";
import { User } from "src/app/user";
import { Router } from "@angular/router";
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
  }
  constructor(private fb: FormBuilder, private router: Router) {}

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
