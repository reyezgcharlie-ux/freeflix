'use client'

import { useEffect, useRef } from 'react'
import Plyr from 'plyr'
import 'plyr/dist/plyr.css'

interface VideoPlayerProps {
  movie: any
  onClose: () => void
}

export default function VideoPlayer({ movie, onClose }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const playerRef = useRef<any>(null)

  useEffect(() => {
    if (videoRef.current) {
      playerRef.current = new Plyr(videoRef.current, {
        controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'settings', 'fullscreen'],
        settings: ['quality', 'speed'],
        speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5, 2] }
      })
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy()
      }
    }
  }, [])

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="w-full max-w-6xl mx-4">
        <div className="flex justify-between items-center mb-4 px-2">
          <div>
            <h2 className="text-2xl font-bold">{movie.title}</h2>
            <p className="text-gray-400">{movie.year} • {movie.genre}</p>
          </div>
          <button 
            onClick={onClose}
            className="text-white text-4xl hover:text-red-500 transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="relative rounded-xl overflow-hidden bg-black">
          <video
            ref={videoRef}
            className="w-full"
            playsInline
            controls
          >
            <source src={movie.videoUrl} type="video/mp4" />
          </video>
        </div>

        <p className="text-center text-gray-400 mt-4 text-sm">
          Presiona el icono de Chromecast en el reproductor para enviar a tu TV
        </p>
      </div>
    </div>
  )
}