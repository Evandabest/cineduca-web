"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const movies = [
  {
    id: 1,
    title: "El Laberinto del Fauno",
    thumbnail: "/movies/movie1.jpg",
    description: "In post-Civil War Spain, a young girl meets a mysterious faun in a mythical garden.",
    director: "Guillermo del Toro",
    year: "2006",
    duration: "118 min",
    language: "Spanish",
  },
  // Add more movies...
]

interface Movie {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  director: string;
  year: string;
  duration: string;
  language: string;
}

interface ModalProps {
  movie: Movie;
  onClose: () => void;
}

const Modal = ({ movie, onClose }: ModalProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.95 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg max-w-3xl w-full overflow-hidden"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <div className="aspect-video">
            <img
              src={movie.thumbnail}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 space-y-4">
            <h2 className="text-2xl font-bold text-rose-900">{movie.title}</h2>
            <p className="text-gray-600">{movie.year} • {movie.duration} • {movie.language}</p>
            <p className="text-gray-700">{movie.description}</p>
            <div>
              <h4 className="font-semibold text-rose-900">Director</h4>
              <p className="text-gray-600">{movie.director}</p>
            </div>
            <button
              className="w-full bg-rose-600 text-white py-2 rounded-md hover:bg-rose-700 transition-colors"
              onClick={() => {/* Handle create lesson */}}
            >
              Create Lesson
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function TeacherCatalog() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)

  return (
    <div className="min-h-screen bg-orange-50 p-6">
      <h1 className="text-2xl font-bold text-rose-900 mb-6">Spanish Film Catalog</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="relative group cursor-pointer"
            onClick={() => setSelectedMovie(movie)}
          >
            <div className="aspect-video rounded-md overflow-hidden">
              <img
                src={movie.thumbnail}
                alt={movie.title}
                className="w-full h-full object-cover transform transition-transform group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity flex items-center justify-center">
              <h3 className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-center p-2">
                {movie.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedMovie && (
          <Modal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
        )}
      </AnimatePresence>
    </div>
  )
}