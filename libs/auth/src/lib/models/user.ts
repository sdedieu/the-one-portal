import { Application } from "@the-one-portal/shared-library";

export interface User {
    name: string;
    applications: Application[];
    email: string;
}
