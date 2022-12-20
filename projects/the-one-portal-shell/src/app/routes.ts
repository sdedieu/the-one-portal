import { Routes } from "@angular/router";
import { IsLoggedInGuard } from "./auth";
import { HomeComponent } from "./home/home.component";
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
  { path: 'home', canActivate: [IsLoggedInGuard], component: HomeComponent },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  {
    path: 'demography', loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './app'
      }).then(m => m.routes)
  },
  {
    path: 'quotes', loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        exposedModule: './app'
      }).then(m => m.routes)
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }

]