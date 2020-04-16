import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import { Observable } from "rxjs";
import { Token } from "src/app/Models/token";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const requestWithAccessToken = request.clone({
      headers: request.headers.set("access_token", `${localStorage.Access_token}`)
    });
    const RequestWithBothTokens = requestWithAccessToken.clone({
      headers: requestWithAccessToken.headers.set("refreshtoken", `${localStorage.Refreshtoken}`)
    });

    return next.handle(RequestWithBothTokens);
  }
}
