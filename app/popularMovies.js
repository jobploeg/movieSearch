import { env } from 'process';

async function getMovies() {
    const data = await fetch (`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)

    return await data.json()
}

export default async function Movies() {

    const res = await getMovies()   

    return (
        <div>
            <h1 className="text-4xl my-5 mx-10">Popular Movies</h1>
            <ul className="w-1/3 mx-10">
            {res.results.map(movie => (
                <div key={movie.id} className="py-5">
                    <li className="font-bold">{movie.title}</li>
                    <li>{movie.overview}</li>
                    <li>{movie.release_date}</li>
                </div>
                ))}
            </ul>
    
        </div>
    )
}
