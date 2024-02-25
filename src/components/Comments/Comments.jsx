import "./Comments.scss"
import avatar from "../../assets/images/Mohan-muruge.jpg";

function Comments (props){
    console.log(props)
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
                <ul className="comments_ul">
                    {props.selectedVideo.comments.map((comment)=>{
                        return (
                            <li className="comments__item">
                                <div className="comments__list-container">
                                    <div>
                                        <img className="comments__avatar"
                                        src={avatar} alt="avatar-icon" />
                                    </div>
        
                                    <div className="comments__list-text">
                                        <p>{comment.name}</p>
                                        <p>{comment.comment}</p>
                                        <p>{comment.timestamp}</p>
                                    </div>
                                </div>
                                <hr />
                            </li>
                        )
                    })}
                </ul>
            </div>

        </section>
        
    )
}
export default Comments