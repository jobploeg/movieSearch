"use client"
import Image from "next/image"

export default function Card({key, id, title, text, image, date }) {
    const imagePath = 'https://image.tmdb.org/t/p/original'
    return (
        <div className="flex justify-center" key={key}>
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <Image className="rounded-t-lg object-none h-60" src={imagePath + image} alt={title} width={500} height={500}/>
                <div className="p-6">
                    <h1 className="text-gray-900 text-xl font-medium mb-2"> { title }</h1>
                    <h2 className="text-gray-700 text-sm font-medium mb-2"> { date }</h2>
                    <p className="text-gray-700 text-base mb-4">
                       { text }
                    </p>
                    <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                </div>
            </div>
        </div>
    )
}
