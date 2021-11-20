import * as React from 'react'

import './style.css'

const MediaPlayer: React.FC = () => {

    return (<>
        <div className="mediaPlayer-container">
            <iframe 
            className="mediaPlayer"
            width="274px" 
            height="220px" 
            src="https://www.youtube.com/embed/cIosb69x9iI" 
            title="Media Player" 
            frameBorder="0" 
            allow="
                accelerometer; 
                autoplay; 
                clipboard-write; 
                encrypted-media; 
                gyroscope; 
                picture-in-picture" 
            allowFullScreen
            ></iframe>
        </div>
    </>)
}

export default MediaPlayer;