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
import{differentConsts} from 'src/app/Constants/differentConsts'
@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  public form: FormGroup;
public newses :News;
public news :News;
public decoded:string;
  constructor(private http: HttpClient, private route: ActivatedRoute,private router: Router) { }
archiveNews():void{
  this.news = <News>this.form.value;

 this.http.get(httpUrls.ARCHIVED_NEWS +this.news.id).subscribe();

}
  ngOnInit(): void { 
    try{
      var decoded =  jwt_decode(localStorage.Access_token); 
      }
      catch{
        this.router.navigate(["/news"]);
      }
      if ((decoded[differentConsts.ROLE_FROM_TOKEN]=="User"))
   
      this.router.navigate(["/news"]);
 
    var decoded =  jwt_decode(localStorage.Access_token); 
    if (decoded[differentConsts.ROLE_FROM_TOKEN]=="User")
    this.router.navigate(["/news"]);

    this.form = new FormGroup({
      id: new FormControl(""),
    
    });
    this.http.get(httpUrls.ADD_NEWS).subscribe(result => {
      this.newses = <News>result;
    });
  }
}
