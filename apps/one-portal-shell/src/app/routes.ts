import { Routes } from "@angular/router";
import { IsLoggedInGuard } from "@the-one-portal/auth";
import { loadRemoteModule } from '@angular-architects/module-federation';
import { PortalPageResolver } from "./resolvers/portal-page.resolver";

export const routes: Routes = [
  { path: 'home', canActivate: [IsLoggedInGuard], loadChildren: async () => (await import('@the-one-portal/applications-catalog')).ApplicationsCatalogModule, resolve: { appName: PortalPageResolver } },
  {
    path: 'auth', loadChildren: async () =>
      (await import('@the-one-portal/auth')).AuthModule, resolve: { appName: PortalPageResolver }
  },
  {
    path: 'demography', loadChildren: async () =>
      (await loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4221/remoteEntry.js',
        exposedModule: './app'
      })).routes
  },
  {
    path: 'quotes', loadChildren: async () =>
      (await loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4222/remoteEntry.js',
        exposedModule: './app'
      })).routes
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }

]