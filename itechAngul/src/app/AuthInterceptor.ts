import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import { Observable } from "rxjs";
import { Token } from "src/app/token";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token: Token = localStorage.token;
    console.log(token);
    debugger;
    if (!token) {
      return next.handle(req);
    }

    const req1 = req.clone({
      headers: req.headers.set("access_token", `${token.RefreshToken}`)
    });
    console.log(req1);
    return next.handle(req1);
  }
}
