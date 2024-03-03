import "../SelectedVideo/SelectedVideo.scss";

function SelectedVideo (props){

    return (
            <div>
                <video className="selected__image"
                poster={props.selectedVideo.image}
                controls></video>
            </div>
    )
}
export default SelectedVideo;