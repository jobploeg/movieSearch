import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Link href="/movies" className="text-blue-600 text-xl font-bold pt-24">Movies</Link>
    </div>
  )
}
