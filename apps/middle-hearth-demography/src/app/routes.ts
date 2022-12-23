import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: '',
        loadComponent: async () => (await import('./character-statistics/character-statistics.component')).CharacterStatisticsComponent
    }
]