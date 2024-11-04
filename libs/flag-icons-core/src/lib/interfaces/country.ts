import { Flag } from "./flag";

export interface Country {
    name: string,
    flags: Record<string, Flag>
}