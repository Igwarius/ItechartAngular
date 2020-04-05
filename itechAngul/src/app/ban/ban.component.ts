import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { News } from "src/app/Models/news";
import { User } from "src/app/Models/user"
import { Categories } from "src/app/Models/categories";
import { SubCategories } from "src/app/Models/subCategories";
import { ActivatedRoute } from "@angular/router";
import { httpUrls } from "src/app/Constants/Urls";
import{BannedUser} from "src/app/Models/bannedUser"
import { from } from 'rxjs';
import * as jwt_decode from 'jwt-decode';
import { Router } from "@angular/router";
@Component({
  selector: 'app-ban',
  templateUrl: './ban.component.html',
  styleUrls: ['./ban.component.css']
})
export class BanComponent implements OnInit {
  public form: FormGroup;
  public users:User;
  public bannedUser:BannedUser;
  constructor(private http: HttpClient, private route: ActivatedRoute,private router: Router) { }
banUser():void{
  const bannedUser = <BannedUser>this.form.value;
  bannedUser.period=+bannedUser.period 
  console.log(bannedUser);
  debugger;
  this.http.post(httpUrls.BAN_USER ,bannedUser).subscribe();

}
  ngOnInit(): void { 
    try{
    var decoded =  jwt_decode(localStorage.Access_token); 
    }
    catch{
      this.router.navigate(["/news"]);
    }
    if ((decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']=="User"))
 
    this.router.navigate(["/news"]);
    this.form = new FormGroup({
    login: new FormControl(""),
    reason: new FormControl(""),
    period: new FormControl(""),
    });
    this.http.get(httpUrls.ALL_USERS).subscribe(result => {
      this.users = <User>result;
    });
  }

}
