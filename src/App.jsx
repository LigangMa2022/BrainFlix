import './App.scss';
import Header from "./components/Header/Header";
import SelectedVideo from './components/SelectedVideo/SelectedVideo';
import Comments from './components/Comments/Comments';
import NextVideos from './components/NextVideos/NextVideos';
import videoData from "../src/data/video-details.json";
import { useState } from 'react';


function App() {

  const {selectedVideos, setSelectedVideos} = useState(videoData[0]);

  return (
    <div className="App">
      <Header />
      <SelectedVideo />
      <Comments />
      <NextVideos
        nextVideosImage = {videoData.map((item)=>{return item.image})}
        nextVideosTitle = {videoData.map((item)=>{return item.title})}
        nextVideosAuthor = {videoData.map((item)=>{return item.channel})} />
    </div>
  )
}


export default App;
