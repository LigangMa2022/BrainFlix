import './App.scss';
import Header from "./components/Header/Header";
import SelectedVideo from './components/SelectedVideo/SelectedVideo';
import Comments from './components/Comments/Comments';
import NextVideos from './components/NextVideos/NextVideos';
import videoData from "../src/data/video-details.json";


function App(props) {
  const videoData_nextVideos = videoData.map((item)=>{
    console.log(item)
    return (
      <div className="App">
        <Header />
        <SelectedVideo />
        <Comments />
        <NextVideos
        nextVideosImage = {item.image}
        nextVideosTitle = {item.title}
        nextVideosAuthor = {item.channel} />
  
      </div>
    )
  }
  )
}

export default App;
