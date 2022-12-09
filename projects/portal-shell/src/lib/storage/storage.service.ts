import { Injectable, inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private cookieService = inject(CookieService);

  get<T>(key: string): T | null {
    const stored = this.cookieService.get(key);
    if(!stored) return null;
    return JSON.parse(stored) as T
  }

  set(key: string, value: any): void {
    this.cookieService.set(key, JSON.stringify(value))
  }
}
