import { Flag } from "../interfaces/flag";


export const national: Flag = {
    name: "The national flag of France.",
    with: 200,
    height: 133,
    geometries: {
        1: {
            path: "M-0.2 0h180v45H-0.2Z",
            color: "#333333"
        },
        2: {
            path: "M-0.2 44.9h180v45H-0.2Z",
            color: "#333333"
        },
        3: {
            path: "M-0.2 89.9h180v45H-0.2Z",
            color: "#333333"
        }
    }
};
