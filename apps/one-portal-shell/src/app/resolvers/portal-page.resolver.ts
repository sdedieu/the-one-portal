import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class PortalPageResolver implements Resolve<null> {
  constructor() {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<null>|Promise<null>|null {
    const event = new CustomEvent('app-loaded', { detail: null });
    document.dispatchEvent(event);
    return null;
  }
}