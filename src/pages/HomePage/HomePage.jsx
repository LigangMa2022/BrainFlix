import SelectedVideo from "../../components/SelectedVideo/SelectedVideo";
import SelectedVideoInfo from '../../components/SelectedVideoInfo/SelectedVideoInfo';
import Comments from '../../components/Comments/Comments';
import NextVideos from '../../components/NextVideos/NextVideos';
import views from "../../assets/Icons/views.svg";
import likes from "../../assets/Icons/likes.svg";
import { useEffect, useState } from 'react';
import axios from 'axios'
import { useParams } from "react-router-dom";

const baseURL = "https://unit-3-project-api-0a5620414506.herokuapp.com";
const apiKey = "a3a540ed-f3af-439b-ad1c-bee902a946f2";
const defaultVideoID = "84e96018-4022-434e-80bf-000ce4cd12b8";

function HomePage () {

  const [selectedVideo, setSelectedVideo] = useState({});
  const [videos, setVideos] = useState([]);
  const params = useParams();
  console.log(params)
  
  useEffect( ()=> {
    async function getVideosData() {
      const response = await axios.get(`${baseURL}/videos/?api_key=${apiKey}`);
      const videoData = await response.data;
      console.log(videoData);
      setVideos(videoData);
      console.log("videoData is : ",videos)
    }
    getVideosData();
  }  
  ,[])

  useEffect(()=> {

    console.log("params use effect ran",params)
    async function getSeletedVideo (ID){
      const response =  await axios.get(`${baseURL}/videos/${ID}?api_key=${apiKey}`);
      setSelectedVideo(response.data)
      console.log("selectedVideo data is: ",response.data)
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