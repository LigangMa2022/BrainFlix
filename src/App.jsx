import './App.scss';
import Header from "./components/Header/Header";
import SelectedVideo from './components/SelectedVideo/SelectedVideo';
import Comments from './components/Comments/Comments';
import NextVideos from './components/NextVideos/NextVideos';
import videoData from "../src/data/video-details.json";
import views from "./assets/Icons/views.svg";
import likes from "./assets/Icons/likes.svg";
import { useState } from 'react';


function App() {

  const [selectedVideo, setSelectedVideo] = useState(videoData[0]);
  const [videos, setVideos] = useState(videoData);
  console.log("selectedVideo:  ",selectedVideo)
  console.log("videos:  ",videos)
  
  function clickVideoHandler (id){
    const clickedVideo = videos.find((video)=>{
        return video.id === id
    })
    setSelectedVideo(clickedVideo)
};

  return (
    <div className="App">
      <Header />
      <SelectedVideo selectedVideo = {selectedVideo} />
      <Comments selectedVideo = {selectedVideo} />
      <NextVideos nextVideos = {videos}
        clickVideoHandler = {clickVideoHandler} />
    </div>
  )
}


export default App;
