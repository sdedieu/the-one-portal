import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({ providedIn: 'root' })
export class ApplicationRouteResolver implements Resolve<string> {

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<string>|Promise<string>|string {
    const event = new CustomEvent('app-loaded', { detail: environment.appName });
    document.dispatchEvent(event);
    return environment.appName;
  }
}