import './MobileMenu.css';
import homeIcon from './../../assets/images/mobileMenu/mobileHome.svg';
import trendingIcon from './../../assets/images/mobileMenu/trending.svg';
import subscriptionsIcon from './../../assets/images/mobileMenu/subscriptions.svg';
import libraryIcon from './../../assets/images/mobileMenu/library.svg';
export default function MobileMenu() {
    return (
        <nav class="mobile-menu">
        <div class="mobile-menu__container">
            <ul class="mobile-menu__list">
                <li class="mobile-menu__item">
                    <img class="mobile-menu__icon" src={homeIcon} alt="mobile-menu home icon"></img>
                    <p class="mobile-menu__name">Home</p>
                </li>
                <li class="mobile-menu__item">
                    <img class="mobile-menu__icon" src={trendingIcon} alt="mobile-menu  trending icon"></img>
                    <p class="mobile-menu__name">Trending</p>
                </li>
                <li class="mobile-menu__item">
                    <img class="mobile-menu__icon" src={subscriptionsIcon} alt="mobile-menu subscriptions icon"></img>
                    <p class="mobile-menu__name">Subscriptions</p>
                </li>
                <li class="mobile-menu__item">
                    <img class="mobile-menu__icon" src={libraryIcon} alt="mobile-menu library icon"></img>
                    <p class="mobile-menu__name">Library</p>
                </li>
            </ul>
        </div>
    </nav>

    )
}