// import { colors } from "./colors";
import { Config as IConfig } from "./src/lib/interfaces/config";

export const Config: IConfig = {
    countries: {
        Germany: {
            name: "Germany",
            flags: {
                Civil: {
                    name: "German nation flag.",
                    height: 200,
                    with: 100,
                    geometries: {
                        1: {
                            path: "",
                            color: "#333333"
                        },
                        2: {
                            path: "",
                            color: "#333333"
                        }
                    }
                }
            }
        }
        //     France: {
        //         name: "French national flag",
        //         flags: {
        //             Civil: {
        //                 name: "France nationl flag.",
        //                 height: 200,
        //                 with: 100,
        //                 geometries:
        //                 {
        //                     1: {
        //                         path: "",
        //                         color: "#333333"
        //                     }
        //                 }
        //             },
        //             Army: {
        //                 name: "France nationl flag.",
        //                 height: 200,
        //                 with: 100,
        //                 geometries: {
        //                     1: {
        //                         path: "",
        //                         color: "#333333"
        //                     }
        //                 }
        //             }
        //         }

        //     }
        // }
    }
}

