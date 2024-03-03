import "../NextVideos/NextVideos.scss";
import { Link, useParams } from "react-router-dom";

function NextVideos (props){
    console.log(props)

    return (
        <section className="nextVideos">
            <h2 className="nextVideos__title">Next videos</h2>
            <ul className="nextVideos__list"></ul>
            {props.nextVideos.filter((nextVideo)=>(nextVideo.id !== props.selectedVideo.id))
                .map((nextVideo)=>{
                    return (
                        <li className="nextVideos__item" key={nextVideo.id}>
                            <Link to={`/videos/${nextVideo.id}`} className="nextVideos__link" >
                                <img className="nextVideos__img"
                                src={nextVideo.image}
                                alt={nextVideo.title} />
                                <div className="nextVideos__text">
                                    <p className="nextVideos__text-title">{nextVideo.title}</p>
                                    <p>{nextVideo.channel}</p>
                                </div>
                            </Link>
                        </li>
                    )
                })
            }
        </section>
    )
}
export default NextVideos;