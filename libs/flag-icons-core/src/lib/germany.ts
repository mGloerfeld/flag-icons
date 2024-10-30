import { config } from "./utils/config.js";


export const germany = {
    title: "germany",
    ration: 0.6667,
    gometry:
        [
            {
                order: config.germany.gold.rank,
                path: "M-0.2 0h180v45H-0.2Z",
                color: config.germany.black.color
            },
            {
                order: config.germany.gold.rank,
                path: "M-0.2 44.9h180v45H-0.2Z",
                color: config.germany.red.color
            },
            {
                order: config.germany.gold.rank,
                path: "M-0.2 89.9h180v45H-0.2Z",
                color: config.germany.gold.color
            }
        ]
};
