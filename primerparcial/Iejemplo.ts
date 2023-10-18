export interface ITVShow{
    id: number;
    name:string;
    director: string;
    investment: number;
    cast: string;
    seasons: ISeasons[];
}

export interface ISeasons{
    Id: number;
    descripcion:string;
    episodesNumber: number;
    tvshowid: number;
}