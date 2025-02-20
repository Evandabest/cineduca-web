

"use client"
import YouTube from 'react-youtube'

interface WatchPageProps {
    searchParams: {
        v?: string
    }
}

export default function WatchPage({ searchParams }: WatchPageProps) {
    const videoId = searchParams.v || 'dQw4w9WgXcQ' // Default video ID as fallback

    const opts = {
        height: '540',
        width: '960',
        playerVars: {
            autoplay: 1,
        },
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-center">
                <YouTube 
                    videoId={videoId} 
                    opts={opts} 
                    className="aspect-video rounded-lg shadow-lg"
                />
            </div>
        </div>
    )
}