import "../SelectedVideo/SelectedVideo.scss";

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

            <hr className="selected__line-upper" />
            <div className="selected__stats">
                <div className="selected__stat">
                    <p className="selected__stat-channel">
                        By  {props.selectedVideo.channel}</p>
                    <p>{props.selectedVideo.timestamp}</p>
                </div>

                <div className="selected__stat">
                    <div className="selected__views">
                        <img className="selected__views-icon"
                        src={props.views} alt="stats-views" />
                        <p>{props.selectedVideo.views}</p>
                    </div>
                    <div className="selected__likes">
                        <img className="selected__likes-icon"
                        src={props.likes} alt="stats-likes" />
                        <p>{props.selectedVideo.likes}</p>
                    </div>
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