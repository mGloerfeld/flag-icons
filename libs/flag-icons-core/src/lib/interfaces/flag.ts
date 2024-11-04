
import { Geometry } from "./geometry"

export interface Flag {
    name: string,
    with: number,
    height: number
    geometries: Record<number, Geometry>
}

