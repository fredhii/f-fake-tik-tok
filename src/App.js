import React, { useState, useEffect } from 'react'
import './App.css'
import VideoContainer from './components/video-container'
import { db } from './firebase'
import { collection, getDocs } from 'firebase/firestore/lite'

/**
 * App component
 * @description Main component of the app
 * @returns {JSX.Element}
 */
function App() {
	const [videos, setVideos] = useState([])

	/**
	 * getVideos
	 * @description Fetches the videos from the database
	 * @returns {void}
	 */
	const getVideos = async () => {
		const videosCollection = collection(db, 'videos')
		const videosSnapshot = await getDocs(videosCollection)
		const videos = videosSnapshot.docs.map((doc) => doc.data())
		setVideos(videos)
	}

	useEffect(() => {
		getVideos()
	}, [])

	return (
		<div className='App'>
			<div className='app-videos'>
				{videos.map(({ messages, url, likes, shares, description, channel, song }, i) => {
					return (
						<VideoContainer
							key={i}
							messages={messages}
							likes={likes}
							shares={shares}
							description={description}
							channel={channel}
							song={song}
							url={url}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default App
