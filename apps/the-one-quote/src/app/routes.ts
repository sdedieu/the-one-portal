import { Routes } from "@angular/router";

export const routes: Routes = [
  { path: '', loadComponent: async () => (await import('./quotes-search/quotes-search.component')).QuotesSearchComponent }
];
