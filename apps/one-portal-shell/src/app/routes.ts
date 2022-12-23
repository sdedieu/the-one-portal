import { Routes } from "@angular/router";
import { IsLoggedInGuard } from "./auth";
import { HomeComponent } from "./home/home.component";
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
  { path: 'home', canActivate: [IsLoggedInGuard], component: HomeComponent },
  { path: 'auth', loadChildren: async () => 
    (await import('./auth/auth.module')).AuthModule },
  { path: 'demography', loadChildren: async () =>
      (await loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './app'
      })).routes
  },
  { path: 'quotes', loadChildren: async () =>
      (await loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        exposedModule: './app'
      })).routes
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }

]