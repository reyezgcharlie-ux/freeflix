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
      description: "Una historia surrealista."
    },
    {
      id: 3,
      title: "Sintel",
      year: 2010,
      genre: "Fantasía",
      poster: "https://picsum.photos/id/1033/300/400",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      description: "Una joven busca a su dragón perdido."
    },
    {
      id: 4,
      title: "Tears of Steel",
      year: 2012,
      genre: "Ciencia Ficción",
      poster: "https://picsum.photos/id/106/300/400",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      description: "Una épica historia de ciencia ficción."
    },
    {
      id: 5,
      title: "For Bigger Blazes",
      year: 2018,
      genre: "Acción",
      poster: "https://picsum.photos/id/1074/300/400",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      description: "Acción intensa y efectos especiales."
    },
    {
      id: 6,
      title: "For Bigger Meltdowns",
      year: 2019,
      genre: "Drama",
      poster: "https://picsum.photos/id/1080/300/400",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
      description: "Una historia emocional y poderosa."
    },
    {
      id: 7,
      title: "For Bigger Escapes",
      year: 2020,
      genre: "Aventura",
      poster: "https://picsum.photos/id/1061/300/400",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      description: "Una aventura épica."
    },
    {
      id: 8,
      title: "For Bigger Fun",
      year: 2021,
      genre: "Comedia",
      poster: "https://picsum.photos/id/1062/300/400",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      description: "Diversión garantizada."
    }
  ])

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="flex items-center justify-between px-8 py-4 border-b border-gray-800 sticky top-0 z-50 bg-black/95 backdrop-blur">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-red-600 rounded flex items-center justify-center">
              <span className="font-bold text-2xl">F</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight">FreeFlix</h1>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <input 
            type="text" 
            placeholder="Buscar películas y series..." 
            className="bg-zinc-900 px-5 py-2 rounded-full w-80 focus:outline-none text-sm border border-gray-700"
          />
          <button className="bg-white hover:bg-gray-200 text-black px-5 py-2 rounded-full font-semibold text-sm transition-all">
            + Agregar
          </button>
        </div>
      </header>

      <div className="h-[80vh] bg-gradient-to-b from-black via-black/90 to-black flex items-center px-8 relative">
        <div className="max-w-2xl z-10">
          <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-6">
            100% GRATIS
          </div>
          
          <h2 className="text-7xl font-bold leading-none tracking-tighter mb-6">
            Películas y series.<br />Gratis. Para siempre.
          </h2>
          
          <p className="text-2xl text-gray-400 mb-10 max-w-lg">
            Miles de películas y series. Sin costo. Sin límites.
          </p>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSelectedMovie(movies[0])}
              className="bg-white hover:bg-gray-200 text-black px-12 py-4 rounded-full font-bold text-xl flex items-center gap-3 transition-all active:scale-95"
            >
              ▶ Reproducir
            </button>
            
            <button className="border border-white/70 hover:bg-white/10 px-8 py-4 rounded-full font-semibold text-lg transition-all">
              Más información
            </button>
          </div>
        </div>
      </div>

      <div className="px-8 pb-20 -mt-10 relative z-20">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-3xl font-semibold">Tendencias esta semana</h3>
          <button className="text-sm text-gray-400 hover:text-white">Ver todo →</button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
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