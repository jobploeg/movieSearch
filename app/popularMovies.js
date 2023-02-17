import Card from "./card"


async function getMovies() {
    const data = await fetch (`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.API_KEY}`)

    //delay of 2 seconds
    // await new Promise(resolve => setTimeout(resolve, 2000))

    return await data.json().catch(err => console.log(err))
}

export default async function Movies() {

    const res = await getMovies()   

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {res.results.map(movie => (
                < Card 
                key={movie.id}
                id={movie.id} 
                title={movie.title}
                text={movie.overview}
                image={movie.poster_path}
                date={movie.release_date}
                />
            )) }
        </div>
    )
}
