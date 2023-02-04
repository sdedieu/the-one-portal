import { Routes } from "@angular/router";
import { ApplicationRouteResolver } from "./resolvers/application-route.resolver";

export const routes: Routes = [
  { path: '', loadComponent: async () => (await import('./quotes-search/quotes-search.component')).QuotesSearchComponent,  resolve: {
    hero: ApplicationRouteResolver
  } }
];
