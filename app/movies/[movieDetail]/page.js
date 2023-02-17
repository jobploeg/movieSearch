import Image from "next/image"
import Link from "next/link"

export default async function MovieDetail({params}) {
    const { movieDetail } = params
    const imagePath = 'https://image.tmdb.org/t/p/original'

    const data = await fetch (`https://api.themoviedb.org/3/movie/${movieDetail}?api_key=${process.env.API_KEY}`)

    const res = await data.json()

    return (
        <div className="flex flex-row">
            <div>
                <p className="text-2xl font-bold">{res.title}</p>
                <p>{res.release_date}</p>
                <p>Runtime: {res.runtime} minutes</p>
                <p>Rating: {res.vote_average}</p>
                <p>Overview: {res.overview}</p>
                <p>Genres: {res.genres.map(genre => (
                    <span key={genre.id}>{genre.name}, </span>
                ))}</p>
                <p>Production Companies: {res.production_companies.map(company => (
                    <span key={company.id}>{company.name}, </span>
                ))}</p>
                <p>Production Countries: {res.production_countries.map(country => (
                    <span key={country.iso_3166_1}>{country.name}, </span>
                ))}</p>
                <p>Spoken Languages: {res.spoken_languages.map(language => (
                    <span key={language.iso_639_1}>{language.name}, </span>
                ))}</p>
                <p className="mb-10">status: {res.status} </p>
                <Link href={'/movies'} className="text-blue-600 font-bold text-lg">Go back</Link>
            </div>
            <Image className="rounded-lg ml-20" src={imagePath + res.poster_path} alt={res.title} width={400} height={100}/>
        </div>
    )
}
