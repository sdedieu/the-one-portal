import { InjectionToken } from "@angular/core";

export interface Config {
    appName: string;
    version: string;
}

export const CONFIG = new InjectionToken<Config>('Config');