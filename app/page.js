import { Suspense } from "react";
import Loading from "./loading";
import Movies from "./popularMovies";


export default function Home() {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        < Movies />
      </Suspense>
    </div>
  )
}
