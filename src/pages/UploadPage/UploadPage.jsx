import image from "../../assets/images/Upload-video-preview.jpg";
import "../UploadPage/UploadPage.scss"
function UploadPage (){
    return (
        <div className="upload">
            <h2 className="upload__title">Upload Video</h2>
            <p className="upload__thumbnail">VIDEO THUMBNAIL</p>
            <img className="upload__image" src={image} alt="" />
            <p className="upload__yourVideo">TITLE YOUR VIDEO</p>
            <input type="text" placeholder="Add a title to your video" />
            <p className="upload__yourVideo">ADD A VIDEO DESCRIPTION </p>
            <textarea placeholder="Add a description to your video"></textarea>
        </div>
    )
}
export default UploadPage;