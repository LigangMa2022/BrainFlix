import SelectedVideo from '../../components/SelectedVideo/SelectedVideo';
import SelectedVideoInfo from '../../components/SelectedVideoInfo/SelectedVideoInfo';
import Comments from '../../components/Comments/Comments';
import NextVideos from '../../components/NextVideos/NextVideos';
import views from "../../assets/Icons/views.svg";
import likes from "../../assets/Icons/likes.svg";
import { useState } from 'react';


function VideoDetailsPage () {

  const [selectedVideo, setSelectedVideo] = useState(videoData[0]);
  const [videos, setVideos] = useState(videoData);
  // console.log("selectedVideo:  ",selectedVideo)
  // console.log("videos:  ",videos)
  
  function clickVideoHandler (id){
    const clickedVideo = videos.find((video)=>{
        return video.id === id})
      setSelectedVideo(clickedVideo)
  };

  return (
    <div className="App">
      <SelectedVideo selectedVideo = {selectedVideo}/>
      <div className="lastThreeSection">
        <SelectedVideoInfo selectedVideo = {selectedVideo} likes = {likes} views = {views}/>
        <Comments selectedVideo = {selectedVideo} />
        <NextVideos nextVideos = {videos} clickVideoHandler = {clickVideoHandler} selectedVideo = {selectedVideo} />
      </div>
    </div>
  )
}


export default VideoDetailsPage;