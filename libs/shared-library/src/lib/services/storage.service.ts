import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  get<T>(key: string): T | null {
    const stored = localStorage.getItem(key);
    if(!stored) return null;
    return JSON.parse(stored) as T
  }

  set(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value))
  }
}
