import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage";
import Header from "./components/Header/Header";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element = {<HomePage />} />
          <Route path="/videos/:videoID" element = {<HomePage />} />
          <Route path="/UploadPage" element = {<UploadPage />} />
          <Route path="/NotFoundPage" element = {<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/NotFoundPage" />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}


export default App;
