import "../SelectedVideo/SelectedVideo.scss";
import views from "../../assets/Icons/views.svg";
import likes from "../../assets/Icons/likes.svg";


function SelectedVideo (props){
    console.log(props)
    return (
        <div className="selected">
            <div>
                <video className="selected__image"
                poster={props.selectedVideo.image}
                controls></video>
            </div>

            <div>
                <h2 className="selected__title">
                    {props.selectedVideo.title}
                </h2>
            </div>

            <hr className="selected__line" />
            <div>
                <div className="selected__stats">
                    <p>By: {props.selectedVideo.channel}</p>
                    <img src={views} alt="stats-views" />
                    <p>{props.selectedVideo.views}</p>
                </div>

                <div className="selected__stats">
                    <p>{props.selectedVideo.timestamp}</p>
                    <img src={likes} alt="stats-likes" />
                    <p>{props.selectedVideo.likes}</p>
                </div>

            </div>
            <hr className="selected__line" />

            <div>
                <p className="selected__description">
                    {props.selectedVideo.description}
                </p>
            </div>
        </div>

    )
}
export default SelectedVideo;