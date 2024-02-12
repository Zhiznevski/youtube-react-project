import './Header.css';
import logo from './../../assets/images/header/logo.svg';
import searchIcon from './../../assets/images/header/search.svg';
import recordIcon from './../../assets/images/header/phone-18.svg';
import shapeIcon from './../../assets/images/header/Combined Shape.svg';
import notiIcon from './../../assets/images/header/ui-11.svg'
import userIcon from './../../assets/images/header/Userpic.svg';
import mobileShapeIcon from './../../assets/images/header/mobileShape.svg';

export default function Header() {
    return (
        <header className="header">
        <div className="container header-container">
            <div className="header__start-block">
                <div className="burger-menu">
                    <div className="burger-menu__bar"></div>
                    <div className="burger-menu__bar"></div>
                    <div className="burger-menu__bar"></div>
                </div>
                <a href="/" className="logo">
                    <img src={logo} alt="logo"></img>
                </a>
            </div>
            <div className="header__center-block">
                <form className="search-form">
                    <input className="search-form__input" type="text" placeholder="Search"></input>
                    <div className="search-form__icon">
                        <img src={searchIcon} alt="search-icon"></img>
                    </div>
                </form>

            </div>
            <div className="header__end-block">
                <nav className="header__navigation">
                 <ul className="nav-list">
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            <img src={recordIcon} alt="navigation-icon"></img>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            <img src={shapeIcon} alt="navigation-icon"></img>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link icon-notification-link">
                            <img src={notiIcon} alt="navigation-icon"></img>
                            <div className="icon-notification">3</div>
                        </a>
                    </li>
                    <li className="nav-item">
                    </li>
                </ul>
                <div className="header__profile-image">  
                        <img className="header__profile-icon" src={userIcon} alt="navigation-icon"></img>
                        <img className="header__profile-icon-mobile" src={mobileShapeIcon} alt="navigation-icon"></img>
                 </div>
                </nav>

            </div>
        </div>
    </header>
    )
}