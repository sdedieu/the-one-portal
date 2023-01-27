import { Routes } from "@angular/router";
import { ApplicationRouteResolver } from "./resolvers/application-route.resolver";

export const routes: Routes = [
    {
        path: '',
        loadComponent: async () => (await import('./character-statistics/character-statistics.component')).CharacterStatisticsComponent,
        resolve: {
            hero: ApplicationRouteResolver
          }
    }
]