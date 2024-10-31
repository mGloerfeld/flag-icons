import { flag } from "./interfaces/flag.js";
import { config } from "./utils/config.js";


export const germany: flag = {
    title: "The flag of Germany.",
    with: 200,
    height: 133,
    geometries: {
        "primus": {
            path: "M-0.2 0h180v45H-0.2Z",
            color: config.germany.black
        },
        "secundo": {
            path: "M-0.2 44.9h180v45H-0.2Z",
            color: config.germany.red
        },
        "tertius": {
            path: "M-0.2 89.9h180v45H-0.2Z",
            color: config.germany.gold
        }
    }
};
