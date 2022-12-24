import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  get<T>(key: string) {
    const stringified = localStorage.getItem(key)
    if(!stringified) return null;
    return JSON.parse(stringified) as T;
  }

  set(key: string, value: any) {
    if(value) localStorage.setItem(key, JSON.stringify(value));
  }
}
