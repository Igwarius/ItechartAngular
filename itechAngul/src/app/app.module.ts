import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent, TopBarComponent],
  imports: [AppComponent, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
