import "./Comments.scss"
import videoData from "../../data/video-details.json";
import avatar from "../../assets/images/Mohan-muruge.jpg";
function Comments (){
    return (
        <section className="comments">
            <h2 className="comments_title">3 Comments </h2>
            <div className="comments__core">
                <div className="comments__img">
                    <img className="comments__avatar"
                    src={avatar} alt="avatar-icon" />
                </div>

                <form className="comments__form" >
                    <label htmlFor="">JOIN THE CONVERSATION</label>
                    <input className="comments__input"
                    type="text"
                    placeholder="Add a new comment" />
                    <button className="comments__btn">COMMENT</button>
                </form>

            </div>

            <div className="comments__list">
                <hr />
                <div className="comments__list-container">
                    <div>
                        <img className="comments__avatar"
                        src={avatar} alt="avatar-icon" />
                    </div>

                    <div className="comments__list-text">
                        <p>{videoData[0].comments[0].name}</p>
                        <p>{videoData[0].comments[0].comment}</p>
                        <p>{videoData[0].comments[0].timestamp}</p>
                    </div>
                </div>
                <hr />
            </div>

        </section>
        
    )
}
export default Comments