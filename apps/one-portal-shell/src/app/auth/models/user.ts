import { Application } from "../../shared/models/application";

export interface User {
    name: string;
    applications: Application[];
    email: string;
}
