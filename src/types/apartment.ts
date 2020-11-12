import Place from './location';

/**
 * Defines ApartmentSimple used for quick listing of apartments
 */
export interface ApartmentSimple {
    _id: string;
    url: string;
    title: string;
    place: Place;
}

/**
 * Defines Apartment, full-object used to get details on apartment
 */
interface Rooms {
    total: number;
    kitchen: number;
    bedroom: number;
    livingroom: number;
    bathroom: number;
}

export interface Apartment extends ApartmentSimple {
    rooms: Rooms;
}