import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RegistrationComponent } from "./registration/registration.component";
import { EnterComponent } from "./enter/enter.component";

const appRoutes: Routes = [
  { path: "registration", component: RegistrationComponent },
  { path: "login", component: EnterComponent }
];
@NgModule({
  declarations: [AppComponent, RegistrationComponent, EnterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
