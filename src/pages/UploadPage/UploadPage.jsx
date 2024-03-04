import { useNavigate } from "react-router-dom";
import image from "../../assets/images/Upload-video-preview.jpg";
import "../UploadPage/UploadPage.scss"
import UploadIcon from "../../assets/Icons/upload.svg"

function UploadPage (){

    const navigate  = useNavigate();

    function handleFormSubmit (event){
        event.preventDefault();
        alert("Upload successful!");
        navigate("/");
    }
    function handleCancelButton (){
        alert("Cancelled uploading and going back to home page");
        navigate("/");
    }

    return (
        <div className="upload">
            <h2 className="upload__title">Upload Video</h2>
            <p className="upload__thumbnail">VIDEO THUMBNAIL</p>
            <img className="upload__image" src={image} alt="" />
            <form onSubmit={handleFormSubmit}>
                <p className="upload__yourVideo">TITLE YOUR VIDEO</p>
                <input className="upload__titleInput" type="text" placeholder="Add a title to your video" />
                <p className="upload__yourVideo">ADD A VIDEO DESCRIPTION </p>
                <textarea className="upload__descriptionInput" placeholder="Add a description to your video"></textarea>
                <div className="upload__button-group">
                    <button className="upload__button-left" type="submit">
                        <img className="upload__Icon" src={UploadIcon} alt="upload-Icon" />
                        PUPLISH
                    </button>

                    <button className="upload__cancel" type="cancel" onclick={handleCancelButton}>
                        CANCEL
                    </button>

                    <button className="upload__button-right" type="submit">
                        <img className="upload__Icon" src={UploadIcon} alt="upload-Icon" />
                        PUPLISH
                    </button>
                </div>

            </form>
        </div>
    )
}
export default UploadPage;