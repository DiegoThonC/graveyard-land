export interface Places {
    type: string;
    query: string[];
    features: Feature[];
    attribution: string;
}

export interface Feature {
    id: string;
    type: string;
    place_type: string[];
    relevance: number;
    properties: Properties;
    text: string;
    place_name: string;
    center: number[];
    geometry: Geometry;
    context: Context[];
    bbox?: number[];
}

export interface Context {
    id: string;
    mapbox_id: string;
    text: string;
    wikidata?: Wikidata;
    short_code?: ShortCode;
}

export enum ShortCode {
    Cl = "cl",
    ClTa = "CL-TA",
}

export enum Wikidata {
    Q2114 = "Q2114",
    Q298 = "Q298",
    Q51585 = "Q51585",
    Q6465417 = "Q6465417",
}

export interface Geometry {
    coordinates: number[];
    type: string;
}

export interface Properties {
    foursquare?: string;
    landmark?: boolean;
    wikidata?: string;
    category?: string;
    mapbox_id?: string;
    address?: string;
}
