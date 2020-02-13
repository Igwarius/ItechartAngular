import { Component, OnInit } from "@angular/core";
import { User } from "src/app/user";
import { Router } from "@angular/router";
@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"]
})
export class RegistrationComponent implements OnInit {
  public users: User[] = [];
  addUser(login: string, password: string): void {
    this.users.push(new User(login, password));
    this.router.navigate(["/login"]);
  }
  constructor(private router: Router) {
    document.body.className = "bg-gradient";
  }

  ngOnInit(): void {}
}
