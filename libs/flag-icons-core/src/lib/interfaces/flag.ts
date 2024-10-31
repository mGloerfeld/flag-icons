export interface flag {

    title: string,
    with: number,
    height: number
    geometries: Record<string, geometry>
}

interface geometry {
    path: string,
    color: string
}