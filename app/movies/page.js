import { Suspense } from "react"
import Card from "./card"


async function getMovies() {
    const data = await fetch (`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.API_KEY}`)

    // delay of 2 seconds
    await new Promise(resolve => setTimeout(resolve, 2000))

    return await data.json().catch(err => console.log(err))
}

export default async function Movies() {

    const res = await getMovies()   

    return (
        <div className="mx-32 my-12">
            <h1 className="text-4xl font-bold">Trending Movies</h1>
            <div className="grid gap-16 grid-cols-fluid mt-20">
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
        </div>
    )
}
