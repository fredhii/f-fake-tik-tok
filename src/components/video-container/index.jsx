import React, { useState, useRef } from 'react'
import VideoSidebar from '../video-sidebar'
import VideoFooter from '../video-footer'
import './video.css'

/**
 * VideoContainer component.
 * @description Video container component.
 * @returns {JSX.Element}
 */
const VideoContainer = ({ url, song, description, channel, likes, messages, shares }) => {
	const [playing, setPlaying] = useState(false)
	const videoRef = useRef(null)

	const onVideoPress = () => {
		if (playing) {
			videoRef.current.pause()
			setPlaying(false)
		} else {
			videoRef.current.play()
			setPlaying(true)
		}
	}
	return (
		<div className='video-container'>
			{/* eslint-disable-next-line jsx-a11y/media-has-caption */}
			<video className='video-container-player' src={url} ref={videoRef} onClick={onVideoPress} />
			<VideoSidebar messages={messages} shares={shares} likes={likes} />
			<VideoFooter channel={channel} description={description} song={song} />
		</div>
	)
}

export default VideoContainer
