import "../NextVideos/NextVideos.scss";


function NextVideos (props){
    console.log(props.nextVideos)
    return (
        <section className="nextVideos">
            <h2 className="nextVideos__title">Next videos</h2>
            <ul className="nextVideos__list"></ul>
            {props.nextVideos.map((nextVideo)=>{
                return (
                    <li className="nextVideos__item" key={nextVideo.id}>
                        <div className="nextVideos__container">
                            <img className="nextVideos__img"
                            src={nextVideo.image}
                            alt="similar-videos" />
                            <div className="nextVideos__text">
                                <p>{nextVideo.title}</p>
                                <p>{nextVideo.channel}</p>
                            </div>
                        </div>
                    </li>
                )
                })
            }
        </section>
    )
}
export default NextVideos;