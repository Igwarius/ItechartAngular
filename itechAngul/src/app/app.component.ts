import { Component } from "@angular/core";
import { User } from "./app.user";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "registation";
  text1: string;
  text2: string;
  users: User[];
  addUser(text1: string, text2: string): void {
    if (
      text1 == null ||
      text1.trim() == "" ||
      text2 == null ||
      text2.trim() == ""
    )
      return;
    this.users.push(new User(text1, text2));
  }
}
