import videoData from "../../data/video-details.json";
import "../SelectedVideo/SelectedVideo.scss";
import views from "../../assets/Icons/views.svg";
import likes from "../../assets/Icons/likes.svg";

console.log(videoData);

function SelectedVideo (){
    return (
        <div className="selected">
            <div>
                <video className="selected__image"
                poster={videoData[0].image}
                controls></video>
            </div>

            <div>
                <h2 className="selected__title">
                    {videoData[0].title}
                </h2>
            </div>

            <hr className="selected__line" />
            <div>
                <div className="selected__stats">
                    <p>By: {videoData[0].channel}</p>
                    <img src={views} alt="stats-views" />
                    <p>{videoData[0].views}</p>
                </div>

                <div className="selected__stats">
                    <p>{videoData[0].timestamp}</p>
                    <img src={likes} alt="stats-likes" />
                    <p>{videoData[0].likes}</p>
                </div>

            </div>
            <hr className="selected__line" />

            <div>
                <p className="selected__description">
                    {videoData[0].description}
                </p>
            </div>
        </div>

    )
}
export default SelectedVideo;