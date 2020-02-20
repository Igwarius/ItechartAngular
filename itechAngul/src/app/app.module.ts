import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RegistrationComponent } from "./registration/registration.component";
import { EnterComponent } from "./enter/enter.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NewsMdouleComponent } from "./news-mdoule/news-mdoule.component";
import { CloudinaryModule } from "@cloudinary/angular-5.x";
import * as Cloudinary from "cloudinary-core";
import { NewsPageComponent } from "./news-page/news-page.component";

const appRoutes: Routes = [
  { path: "registration", component: RegistrationComponent },
  { path: "login", component: EnterComponent },
  { path: "news", component: NewsPageComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    EnterComponent,
    NewsMdouleComponent,
    NewsPageComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    CloudinaryModule.forRoot(Cloudinary, { cloud_name: "dmk0cb1qj" }),
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
