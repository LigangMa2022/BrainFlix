import videoData from "../../data/video-details.json";
import "../NextVideos/NextVideos.scss";


function NextVideos (props){
    console.log(props.nextVideos)
    return (
        <section className="nextVideos">
            <h2 className="nextVideos__title">Next videos</h2>
            <div className="nextVideos__container">
                <img className="nextVideos__img"
                src={props.nextVideos[1].image}
                alt="similar-videos" />
                <div className="nextVideos__text">
                    <h5>{props.nextVideos[1].title}</h5>
                    <h5>{props.nextVideos[1].channel}</h5>
                </div>
            </div>

        </section>
    )
}
export default NextVideos;