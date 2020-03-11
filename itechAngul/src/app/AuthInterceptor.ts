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
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const req1 = req.clone({
      headers: req.headers.set("access_token", `${localStorage.Access_token}`)
    });
    const req2 = req1.clone({
      headers: req1.headers.set("refreshtoken", `${localStorage.Refreshtoken}`)
    });

    return next.handle(req2);
  }
}
