import SelectedVideo from "../../components/SelectedVideo/SelectedVideo";
import SelectedVideoInfo from '../../components/SelectedVideoInfo/SelectedVideoInfo';
import Comments from '../../components/Comments/Comments';
import NextVideos from '../../components/NextVideos/NextVideos';
import views from "../../assets/Icons/views.svg";
import likes from "../../assets/Icons/likes.svg";
import { useEffect, useState } from 'react';
import axios from 'axios'
import { useParams } from "react-router-dom";



function HomePage () {

  const [selectedVideo, setSelectedVideo] = useState({});
  const [videos, setVideos] = useState([]);
  const params = useParams();

  useEffect( ()=> {
    async function getVideosData() {
      const response = await axios.get("https://unit-3-project-api-0a5620414506.herokuapp.com/videos/?api_key=a3a540ed-f3af-439b-ad1c-bee902a946f2");
      const videoData = await response.data;
      console.log(videoData);
      setVideos(videoData);
      console.log("videoData is : ",videos)
    }
    getVideosData();
  }  
  ,[])

  useEffect(()=>{
    async function getSeletedVideo (){
      const response =  await axios.get("https://unit-3-project-api-0a5620414506.herokuapp.com/videos/?api_key=a3a540ed-f3af-439b-ad1c-bee902a946f2");
      setSelectedVideo(params.videoID)
      console.log("selectedVideo data is: ",response.data)
    }
    getSeletedVideo();
  },[params])
 


  
  // function clickVideoHandler (id){
  //   const clickedVideo = videos.find((video)=>{
  //       return video.id === id})
  //     setSelectedVideo(clickedVideo)
  // };


  return (
    <div className="App">
      {/* <SelectedVideo selectedVideo = {selectedVideo}/>
      <div className="lastThreeSection">
        <SelectedVideoInfo selectedVideo = {selectedVideo} likes = {likes} views = {views}/>
        <Comments selectedVideo = {selectedVideo} />
        <NextVideos nextVideos = {videos} selectedVideo = {selectedVideo} />
      </div> */}
    </div>
  )
}


export default HomePage;