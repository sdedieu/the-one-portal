import { Quotes } from "./quote";

export type Movies = Movie[];

export interface Movie {
    _id: string;
    name: string;
    quotes: Quotes;
}
