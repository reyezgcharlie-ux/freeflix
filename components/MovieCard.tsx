'use client'

interface MovieCardProps {
  movie: any
  onClick: () => void
}

export default function MovieCard({ movie, onClick }: MovieCardProps) {
  return (
    <div 
      onClick={onClick}
      className="group cursor-pointer transition-all duration-300 hover:scale-105"
    >
      <div className="relative overflow-hidden rounded-xl">
        <img 
          src={movie.poster} 
          alt={movie.title}
          className="w-full aspect-[2/3] object-cover"
        />
        
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-black text-3xl">▶</span>
            </div>
            <p className="text-white font-semibold">Reproducir</p>
          </div>
        </div>
      </div>

      <div className="mt-3 px-1">
        <h4 className="font-semibold text-lg line-clamp-1">{movie.title}</h4>
        <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
          <span>{movie.year}</span>
          <span>•</span>
          <span>{movie.genre}</span>
        </div>
      </div>
    </div>
  )
}