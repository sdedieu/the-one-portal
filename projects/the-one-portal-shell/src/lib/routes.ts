import { Routes } from "@angular/router";
import { IsLoggedInGuard } from "./auth";
import { HomeComponent } from "./home/home.component";

export const routes: Routes = [
    { path: 'home', canActivate: [IsLoggedInGuard], component: HomeComponent },
    { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }
]