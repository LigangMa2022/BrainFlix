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
                <img className="header__avatar" src={avatar} alt="avatar-image" />
            </div>

            <div className="header__upload"> 
                <input type="file" id="fileUpload" className="header__fileUpload" />
                <label htmlFor="fileUpload" className="header__fileUpload-label">UPLOAD</label>
                <img className="header__fileUpload-icon" src={upload} alt="uploadIcon" />
            </div>
        </div>
    )
}
export default Header;