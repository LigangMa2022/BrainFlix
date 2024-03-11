import logo from "../../assets/Logo/BrainFlix-logo.svg";
import upload from "../../assets/Icons/upload.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg"
import "../Header/Header.scss"
import { Link } from "react-router-dom";

function Header (){
    return (
        <div className="header">
            <Link to="/">
                <img className="header__logo" src={logo} alt="BrainFlix-logo" />
            </Link>

            <div className="header__search-container">
                <input type="search" className="header__search" placeholder="Search"/>
                <img className="header__avatar1" src={avatar} alt="avatar-image" />
            </div>

            <Link className="header__upload" to={`/UploadPage`}>
                <input type="button" id="fileUpload" className="header__fileUpload" />
                <label htmlFor="fileUpload" className="header__fileUpload-label">
                    <img className="header__fileUpload-icon" src={upload} alt="uploadIcon" />
                    UPLOAD
                </label> 
            </Link>
            <img className="header__avatar2" src={avatar} alt="avatar-image" />
        </div>
    )
}
export default Header;