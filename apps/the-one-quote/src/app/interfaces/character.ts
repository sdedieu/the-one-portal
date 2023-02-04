import { Quotes } from "./quote";

export type Characters = Character[];

export interface Character {
    _id: string;
    name: string;
    quotes: Quotes
}
