export interface Grave {
    id: string,
    image: string[],
    description: string,
    price: number,
    long: number,
    lat: number,
    city: string,
    measure: Measure
}

export interface Measure {
    depth: number,
    height: number,
    width: number
}