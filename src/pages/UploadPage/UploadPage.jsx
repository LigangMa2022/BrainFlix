import { useNavigate } from "react-router-dom";
import image from "../../assets/images/Upload-video-preview.jpg";
import "../UploadPage/UploadPage.scss"
import UploadIcon from "../../assets/Icons/upload.svg"
import axios from "axios";

const baseURL = "http://localhost:8080";

function UploadPage (){

    const navigate  = useNavigate();

    function handleFormSubmit (event){
        event.preventDefault();
        alert("Upload successful!");
        const newVideo = {
            title: event.target.uploadNewVideo.value,
            description: event.target.uploadDescription.value
        };
        async function postVideo (){
            const response = await axios.post(
                `${baseURL}/videos`,
                newVideo
            )
        }
        postVideo();
        navigate("/");
    }

    function handleCancelButton (event){
        event.preventDefault();
        alert("Cancelled uploading and going back to home page");
        navigate("/");
    }

    return (
        <>
            <h2 className="upload__title">Upload Video</h2>
            <div className="upload">
                <section className="upload__videoThumbnail">
                    <h2 className="upload__thumbnail">VIDEO THUMBNAIL</h2>
                    <img className="upload__image" src={image} alt="" />
                </section>

                <form onSubmit={handleFormSubmit} className="upload__form">
                    <p className="upload__yourVideo">TITLE YOUR VIDEO</p>
                    <input className="upload__titleInput"
                        type="text"
                        name="uploadNewVideo"
                        placeholder="Add a title to your video"
                    />
                    <p className="upload__yourVideo">ADD A VIDEO DESCRIPTION </p>
                    <textarea className="upload__descriptionInput" name="uploadDescription"
                        placeholder="Add a description to your video">
                    </textarea>
                    <div className="upload__button-group">
                        <button className="upload__button-left" type="submit">
                            <img className="upload__Icon" src={UploadIcon} alt="upload-Icon" />
                            PUPLISH
                        </button>

                        <button className="upload__cancel" type="cancel"
                            onClick={handleCancelButton}>
                            CANCEL
                        </button>

                        <button className="upload__button-right" type="submit">
                            <img className="upload__Icon" src={UploadIcon} alt="upload-Icon" />
                            PUPLISH
                        </button>
                    </div>

                </form>
            </div>
        </>
    )
}
export default UploadPage;