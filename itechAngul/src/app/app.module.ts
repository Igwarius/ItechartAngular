import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
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
import { NgxSpinnerModule } from "ngx-spinner";
import { NewsUploadPageComponent } from "src/app/news-upload-page/news-upload-page.component";
import {
  FileUploadModule,
  FileSelectDirective,
  FileDropDirective,
  FileUploader
} from "ng2-file-upload";
import { AuthInterceptor } from "src/app/AuthInterceptor";
import { CommonModule } from "@angular/common";
import { AngularFileUploaderModule } from "angular-file-uploader";
import { UploadPhotoComponent } from "./upload-photo/upload-photo.component";
import { NewsDetailComponentComponent } from "./news-detail-component/news-detail-component.component";
import { CommentComponent } from './comment/comment.component';

const appRoutes: Routes = [
  { path: "registration", component: RegistrationComponent },
  { path: "login", component: EnterComponent },
  { path: "news", component: NewsPageComponent },
  { path: "upload", component: NewsUploadPageComponent },
  { path: "curnews/:id", component: NewsDetailComponentComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    EnterComponent,
    NewsMdouleComponent,
    NewsUploadPageComponent,
    NewsPageComponent,
    UploadPhotoComponent,
    NewsDetailComponentComponent,
    CommentComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AngularFileUploaderModule,
    HttpClientModule,
    FileUploadModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    CloudinaryModule.forRoot(Cloudinary, {
      cloud_name: "dmk0cb1qj",
      upload_preset: "nc0gqqok"
    }),
    ReactiveFormsModule,

    NgxSpinnerModule
  ],
  exports: [RouterModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
