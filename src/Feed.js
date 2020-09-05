import React from 'react';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import './Feed.css';

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post
                profilePic="profile.jpg"
                image="https://fcwallpaper.com/wp-content/uploads/2020/05/HD-Desktop-Wallpaper-Chelsea-FC.jpg"
                username="Manav Parmar"
                timestamp=""
                message="My favourite club"
            />
        </div>
    )
}

export default Feed
