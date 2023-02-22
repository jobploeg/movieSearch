import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default async function GetDetail({params}) {
    const { movieDetail } = params
    const imagePath = 'https://image.tmdb.org/t/p/original'

    const data = await fetch (`https://api.themoviedb.org/3/movie/${movieDetail}?api_key=${process.env.API_KEY}`)

    await new Promise(resolve => setTimeout(resolve, 3000))

    const res = await data.json()


    return (
        <Suspense fallback={<Skeleton count={10} />}>
            <div className="flex flex-row mx-32 my-12">
                <div>
                    <p className="text-2xl font-bold">{res.title}</p>
                    <p className=" pb-5 opacity-80">{res.release_date}</p>
                    <p>{res.overview}</p>
                    <div className="text-gray-600">
                        <p className="pt-5">{res.runtime} minutes</p>
                        <p>{Math.round(res.vote_average)} Stars</p>
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
                    </div>
                    <Link href={'/movies'} className="text-blue-600 font-bold text-lg">Go back</Link>
                </div>
                <Image className="rounded-lg ml-20" src={imagePath + res.poster_path} alt={res.title} width={400} height={100}/>
            </div>
        </Suspense>
    )
}
