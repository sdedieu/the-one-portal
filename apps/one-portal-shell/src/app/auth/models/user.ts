import { Application } from "@the-one-portal/one-portal-shell-library";


export interface User {
    name: string;
    applications: Application[];
    email: string;
}
