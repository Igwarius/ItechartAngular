import { Component, OnInit } from "@angular/core";
import { User } from "src/app/user";
@Component({
  selector: "app-enter",
  templateUrl: "./enter.component.html",
  styleUrls: ["./enter.component.css"]
})
export class EnterComponent implements OnInit {
  users: User[] = [];
  vrong: boolean;
  logUser(login: string, password: string): void {
    this.users.forEach(element => {
      if (login == element.login && password == element.password)
        this.vrong = false;
      else this.vrong = true;
    });
  }
  constructor() {}

  ngOnInit(): void {}
}
