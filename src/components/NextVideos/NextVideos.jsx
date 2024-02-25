import videoData from "../../data/video-details.json";
import "../NextVideos/NextVideos.scss";


function NextVideos (props){
    return (
        <section className="nextVideos">
            <h2 className="nextVideos__title">Next videos</h2>
            <div className="nextVideos__container">
                <img className="nextVideos__img"
                src={props.nextVideosImage}
                alt="similar-videos" />
                <div className="nextVideos__text">
                    <h5>{props.nextVideosTitle}</h5>
                    <h5>{props.nextVideosAuthor}</h5>
                </div>
            </div>

        </section>
    )
}
export default NextVideos;