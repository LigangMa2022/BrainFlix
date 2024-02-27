import logo from "../../assets/Logo/BrainFlix-logo.svg";
import upload from "../../assets/Icons/upload.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg"
import "./Header.scss"
function Header (){
    return (
        <div className="header">
            <img className="header__logo" src={logo} alt="BrainFlix-logo" />

            <div className="header__search-container">
                <input type="search" className="header__search" placeholder="Search"/>
                <img className="header__avatar1" src={avatar} alt="avatar-image" />
            </div>

            <div className="header__upload">
                <input type="file" id="fileUpload" className="header__fileUpload" />
                <label htmlFor="fileUpload" className="header__fileUpload-label">
                    <img className="header__fileUpload-icon" src={upload} alt="uploadIcon" />
                    UPLOAD
                </label>
                
            </div>
            <img className="header__avatar2" src={avatar} alt="avatar-image" />
        </div>
    )
}
export default Header;