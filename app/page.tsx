'use client'

import { useState } from 'react'
import MovieCard from '../components/MovieCard'
import VideoPlayer from '../components/VideoPlayer'

export default function FreeFlix() {
  const [selectedMovie, setSelectedMovie] = useState<any>(null)
  
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Big Buck Bunny",
      year: 2008,
      genre: "Animación",
      poster: "https://picsum.photos/id/1015/300/400",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      description: "Un conejo y sus amigos en una aventura divertida."
    },
    {
      id: 2,
      title: "Elephants Dream",
      year: 2006,
      genre: "Animación",
      poster: "https://picsum.photos/id/102/300/400",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      description: "Una historia surrealista sobre dos personajes."
    }
  ])

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="flex items-center justify-between px-8 py-6 border-b border-gray-800 sticky top-0 z-50 bg-black/90 backdrop-blur">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-red-600 rounded flex items-center justify-center">
              <span className="font-bold text-3xl">F</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight">FreeFlix</h1>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <input 
            type="text" 
            placeholder="Buscar películas..." 
            className="bg-zinc-900 px-5 py-2.5 rounded-full w-96 focus:outline-none text-sm"
          />
          <button className="bg-white hover:bg-gray-200 text-black px-6 py-2.5 rounded-full font-semibold text-sm transition-all">
            + Agregar Película
          </button>
        </div>
      </header>

      <div className="h-[75vh] bg-gradient-to-r from-black via-black/80 to-transparent flex items-center px-8">
        <div className="max-w-2xl">
          <h2 className="text-7xl font-bold leading-none tracking-tighter mb-6">
            Películas Gratis.<br />Para siempre.
          </h2>
          <p className="text-2xl text-gray-400 mb-10 max-w-lg">
            Miles de películas y series. Sin costo. Sin límites.
          </p>
          
          <button 
            onClick={() => setSelectedMovie(movies[0])}
            className="bg-white hover:bg-gray-200 text-black px-14 py-4 rounded-full font-bold text-xl flex items-center gap-3 transition-all active:scale-95"
          >
            ▶ Reproducir
          </button>
        </div>
      </div>

      <div className="px-8 pb-20">
        <h3 className="text-3xl font-semibold mb-8">Tendencias</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {movies.map((movie) => (
            <MovieCard 
              key={movie.id} 
              movie={movie} 
              onClick={() => setSelectedMovie(movie)} 
            />
          ))}
        </div>
      </div>

      {selectedMovie && (
        <VideoPlayer 
          movie={selectedMovie} 
          onClose={() => setSelectedMovie(null)} 
        />
      )}
    </div>
  )
}
