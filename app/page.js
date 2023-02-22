import Link from "next/link"

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Movie Search</h1>
      <Link href="/movies" className="text-blue-600 text-xl font-bold pt-24">Movies</Link>
    </div>
  )
}
