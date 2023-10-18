import { ITVShow, ISeasons } from './Iejemplo'
const tvshow: ITVShow [] = [
    {
        id:1,
        name:"hbo",
        director: "steven",
        investment: 20,
        cast: "cast1",
        seasons:[ 
            {
                Id: 3,
                descripcion:"pelicula basada en hechos reales",
                episodesNumber: 5,
                tvshowid:3,
            },
        ]
    }, {
        id:3,
        name:"hbo",
        director: "steven",
        investment: 21,
        cast: "cast2",
        seasons:[ 
            {
                Id: 5,
                descripcion:"pelicula paranormal",
                episodesNumber: 7,
                tvshowid:23,
            },
        ]
    }, {
        id:7,
        name:"hbo",
        director: "steven",
        investment: 22,
        cast: "cast3",
        seasons:[ 
            {
                Id: 9,
                descripcion:"pelicula de terror",
                episodesNumber: 4,
                tvshowid:12,
            },
        ]
    }
]

const TVShowByid = (investment: number): ITVShow[] => {
    const inversionmenor = tvshow.filter((tvshow: ITVShow) => tvshow.investment < investment);
    inversionmenor.forEach((tvshow: ITVShow) => {
    console.log(tvshow);
    });

    return inversionmenor;
};
const inversionmenor = TVShowByid(1);  
console.log('inversion menor:', inversionmenor);