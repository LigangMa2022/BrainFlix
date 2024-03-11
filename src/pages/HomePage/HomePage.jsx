import SelectedVideo from "../../components/SelectedVideo/SelectedVideo";
import SelectedVideoInfo from '../../components/SelectedVideoInfo/SelectedVideoInfo';
import Comments from '../../components/Comments/Comments';
import NextVideos from '../../components/NextVideos/NextVideos';
import views from "../../assets/Icons/views.svg";
import likes from "../../assets/Icons/likes.svg";
import { useEffect, useState } from 'react';
import axios from 'axios'
import { useParams } from "react-router-dom";
import "../HomePage/HomePage.scss"

const baseURL = "http://localhost:8080";
const defaultVideoID = "84e96018-4022-434e-80bf-000ce4cd12b8";

function HomePage () {

  const [selectedVideo, setSelectedVideo] = useState({});
  const [videos, setVideos] = useState([]);
  const params = useParams();
  
  useEffect( ()=> {
    async function getVideosData() {
      const response = await axios.get(`${baseURL}/videos`);
      const videoData = await response.data;
      setVideos(videoData);
    }
    getVideosData();
  } 
  ,[])

  useEffect(()=> {
    async function getSeletedVideo (ID){
      const response =  await axios.get(`${baseURL}/videos/${ID}`);
      setSelectedVideo(response.data)
    }

    if (params.videoID) {
      getSeletedVideo(params.videoID);
    }else {
      getSeletedVideo(defaultVideoID);
    }

  }
  ,[params]);
 
  return (
    <div className="App">
      <SelectedVideo selectedVideo = {selectedVideo}/>
      <div className="lastThreeSection">
        <SelectedVideoInfo selectedVideo = {selectedVideo} likes = {likes} views = {views}/>
        <Comments selectedVideo = {selectedVideo} />
        <NextVideos nextVideos = {videos} selectedVideo = {selectedVideo} />
      </div>
    </div>
  )
}


export default HomePage;