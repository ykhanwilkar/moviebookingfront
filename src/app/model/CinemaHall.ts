import { City } from "./City";
import { Movie } from "./Movie";

export interface CinemaHall {
    cinemaHallId: number,
    cinemaHall: string,
    address: string,
    city: City,
    movies: Movie[]
}