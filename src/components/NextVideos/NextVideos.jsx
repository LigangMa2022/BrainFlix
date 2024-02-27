import "../NextVideos/NextVideos.scss";


function NextVideos (props){
    console.log(props.nextVideos)
    // construct a function used to grab clicked video

    return (
        <section className="nextVideos">
            <h2 className="nextVideos__title">Next videos</h2>
            <ul className="nextVideos__list"></ul>
            {props.nextVideos.filter((nextVideo)=>(nextVideo.id !== props.selectedVideo.id))
                .map((nextVideo)=>{
                    return (
                        <li className="nextVideos__item" key={nextVideo.id}
                            onClick={()=>{props.clickVideoHandler(nextVideo.id)}}>
                            <div className="nextVideos__container">
                                <img className="nextVideos__img"
                                src={nextVideo.image}
                                alt="similar-videos" />
                                <div className="nextVideos__text">
                                    <p className="nextVideos__text-title">{nextVideo.title}</p>
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