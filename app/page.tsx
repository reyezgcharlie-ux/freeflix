'use client'

import { useState } from 'react'
import MovieCard from '../components/MovieCard'
import VideoPlayer from '../components/VideoPlayer'

export default function FreeFlix() {
  const [selectedMovie, setSelectedMovie] = useState<any>(null)
  
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Citizen Kane",
      year: 1941,
      genre: "Drama",
      poster: "https://picsum.photos/id/1015/300/400",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      description: "La obra maestra de Orson Welles. Considerada una de las mejores películas de la historia."
    },
    {
      id: 2,
      title: "Nosferatu",
      year: 1922,
      genre: "Terror",
      poster: "https://picsum.photos/id/102/300/400",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      description: "La primera adaptación cinematográfica de Drácula. Un clásico del terror."
    },
    {
      id: 3,
      title: "The Great Dictator",
      year: 1940,
      genre: "Comedia",
      poster: "https://picsum.photos/id/1033/300/400",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      description: "Charles Chaplin parodia a Hitler en esta sátira brillante."
    },
    {
      id: 4,
      title: "Metropolis",
      year: 1927,
      genre: "Ciencia Ficción",
      poster: "https://picsum.photos/id/106/300/400",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      description: "Obra maestra del cine mudo. La primera gran película de ciencia ficción."
    },
    {
      id: 5,
      title: "The Gold Rush",
      year: 1925,
      genre: "Comedia",
      poster: "https://picsum.photos/id/1074/300/400",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      description: "Chaplin en su mejor momento. Una de las mejores comedias de la historia."
    },
    {
      id: 6,
      title: "Battleship Potemkin",
      year: 1925,
      genre: "Drama",
      poster: "https://picsum.photos/id/1080/300/400",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
      description: "Clásico del cine soviético. La escena de la escalera de Odessa es legendaria."
    },
    {
      id: 7,
      title: "The Cabinet of Dr. Caligari",
      year: 1920,
      genre: "Terror",
      poster: "https://picsum.photos/id/1061/300/400",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      description: "El primer gran clásico del cine de terror. Expresionismo alemán."
    },
    {
      id: 8,
      title: "Intolerance",
      year: 1916,
      genre: "Drama",
      poster: "https://picsum.photos/id/1062/300/400",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      description: "D.W. Griffith. Una de las películas más ambiciosas de la historia del cine."
    },
    {
      id: 9,
      title: "The General",
      year: 1926,
      genre: "Comedia",
      poster: "https://picsum.photos/id/1063/300/400",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      description: "Buster Keaton en su mejor momento. Una obra maestra de la comedia."
    },
    {
      id: 10,
      title: "Sunrise: A Song of Two Humans",
      year: 1927,
      genre: "Drama",
      poster: "https://picsum.photos/id/1064/300/400",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      description: "Obra maestra de F.W. Murnau. Una de las mejores películas de la era muda."
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
            100% GRATIS • CLÁSICOS DEL CINE
          </div>
          
          <h2 className="text-7xl font-bold leading-none tracking-tighter mb-6">
            Las mejores películas.<br />Gratis. Para siempre.
          </h2>
          
          <p className="text-2xl text-gray-400 mb-10 max-w-lg">
            Clásicos del cine mundial. Obras maestras del séptimo arte.
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
          <h3 className="text-3xl font-semibold">Clásicos del Cine</h3>
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
