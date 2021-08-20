import { CinemaHall } from "./CinemaHall";
import { Language } from "./Language";

export interface Movie{
    movieId: number,
    movie: string,
    cinemaHalls: CinemaHall[],
    language:Language
}