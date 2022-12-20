import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { PortalShellModule } from './app/the-one-portal-shell.module';


platformBrowserDynamic().bootstrapModule(PortalShellModule)
  .catch(err => console.error(err));
