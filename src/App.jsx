import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import VideoDetailsPage from "./pages/VideoDetailsPage/VideoDetailsPage";
import VideoUploadPage from "./pages/VideoUploadPage/VideoUploadPage";
import Header from "./components/Header/Header";

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element = {<HomePage />} />
          <Route path="VideoDetailsPage" element = {<VideoDetailsPage />} />
          <Route path="VideoUploadPage" element = {<VideoUploadPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App;
