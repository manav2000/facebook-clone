import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './Story.css';

function Story({ image, profileSrc, title }) {

    const storyStyle = image ? { backgroundImage: `url(${image})` } : { backgroundColor: 'rgba(255,255,255, 0.15)' }

    return (
        <div style={storyStyle} className="story">
            {profileSrc ? <Avatar className="story__avatar" src={profileSrc} /> : <Avatar className="story__avatar" />}
            {title ? <h4 >{title}</h4> : <h4>Title</h4>}
        </div>
    )
}

export default Story

