import "../Comments/Comments.scss"
import avatar from "../../assets/images/Mohan-muruge.jpg";

function Comments (props){
    
    console.log(props)

    function formateDate (t){
        let selectedVideoDate = new Date (t);
        return selectedVideoDate.toLocaleDateString('en-US');
    }

    return (
        <section className="comments">
            <h2 className="comments__title">3 Comments </h2>
            <div className="comments__core">
                <div className="comments__img">
                    <img className="comments__avatar"
                    src={avatar} alt="avatar-icon" />
                </div>

                <form className="comments__form" >
                    <label className="comments__form-label"
                        htmlFor="">JOIN THE CONVERSATION</label>
                    <div className="comments__form-container">
                        <input className="comments__input"
                        type="text"
                        placeholder="Add a new comment" />
                        <button className="comments__btn">COMMENT</button>
                    </div>

                </form>

            </div>

            <div className="comments__list">
                <hr className="comments__hr" />
                <ul className="comments_ul">
                    {props.selectedVideo.comments.map((comment)=>{
                        return (
                            <li className="comments__item" key={comment.id}>
                                <div className="comments__list-container">
                                    <div>
                                        <img className="comments__avatar-user"
                                        src={avatar} alt="avatar-icon" />
                                    </div>
        
                                    <div className="comments__list-text">
                                        <div className="comments__list-special">
                                            <p className="comments__list-name">{comment.name}</p>
                                            <p className="comments__list-time">
                                            {formateDate(comment.timestamp)}
                                            </p>
                                        </div>
                                        <p>{comment.comment}</p>
                                    </div>
                                </div>
                                <hr className="comments__hr" />
                            </li>
                        )
                    })}
                </ul>
            </div>

        </section>
        
    )
}
export default Comments