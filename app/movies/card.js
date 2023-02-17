
import Image from "next/image"
import Link from "next/link"

export default function Card({key, id, title, text, image, date }) {
    const imagePath = 'https://image.tmdb.org/t/p/original'
    return (
        <div className="flex justify-center" key={key}>
            <Link href={`movies/${id}`}>
                <div className="rounded-lg shadow-lg bg-white max-w-sm">
                    <Image className="rounded-t-lg " src={imagePath + image} alt={title} width={400} height={500}/>
                    <div className="p-6">
                        <h1 className="text-gray-900 text-xl font-medium mb-2"> { title }</h1>
                        <h2 className="text-gray-700 text-sm font-medium mb-2"> { date }</h2>
                    </div>
                </div>
            </Link>
        </div>
    )
}
