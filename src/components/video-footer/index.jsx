/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react'
import './video-footer.css'
// import Ticker from 'react-ticker'

/**
 * VideoFooter component.
 * @description Video footer component.
 * @param {*} VideoFooterTypes
 * @returns {JSX.Element}
 */
const VideoFooter = ({ channel, description, song }) => {
	return (
		<div className='video-footer'>
			<div className='video-footer-text'>
				<h3>@{channel}</h3>
				<p>{description}</p>
				<div className='video-footer-ticker'>
					<span className='material-symbols-outlined video-footer-icon'>music_note</span>
					<marquee className='ticker'>{song}</marquee>
				</div>
			</div>
			<img className='video-footer-record' src='https://static.thenounproject.com/png/934821-200.png' alt='' />
		</div>
	)
}
export default VideoFooter
