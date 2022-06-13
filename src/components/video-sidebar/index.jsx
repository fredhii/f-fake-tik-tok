/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react'
// import FavoriteIcon from '@material-ui/icons/Favorite'
// import MessageIcon from '@material-ui/icons/Message'
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
// import ShareIcon from '@material-ui/icons/Share'
import './video-sidebar.css'

/**
 * VideoSidebar component.
 * @description Video sidebar component.
 * @returns {JSX.Element}
 */
const VideoSidebar = ({ messages, shares, likes }) => {
	const [liked, setLiked] = useState(false)

	return (
		<div className='video-sidebar'>
			<div className='video-sidebar-button'>
				{liked ? (
					<span className='material-symbols-outlined filled' onClick={() => setLiked(false)}>
						favorite
					</span>
				) : (
					// <FavoriteIcon fontSize='large'  />
					<span className='material-symbols-outlined' onClick={() => setLiked(true)}>
						favorite
					</span>
					// <FavoriteBorderIcon fontSize='large' onClick={(e) => setLiked(true)} />
				)}
				<p>{liked ? `${likes} + 1` : `${likes}`}</p>
			</div>
			<div className='video-sidebar-button'>
				{/* <MessageIcon fontSize='large' /> */}
				<span className='material-symbols-outlined'>chat</span>
				<p>{messages}</p>
			</div>
			<div className='video-sidebar-button'>
				{/* <ShareIcon fontSize='large' /> */}
				<span className='material-symbols-outlined'>share</span>
				<p>{shares}</p>
			</div>
		</div>
	)
}

export default VideoSidebar
