import './VideoPlayer.css';
import playerImg from './../../assets/images/videoPlayer/player.png';
import mobilePlayerImg from './../../assets/images/videoPlayer/mobilePlayer.png';
import moreBtnIcon from './../../assets/images/videoPlayer/More.svg';
import likeBtnIcon from './../../assets/images/videoPlayer/like.svg';
import dislikeBtnIcon from './../../assets/images/videoPlayer/dislike.svg';
import shareBtnIcon from './../../assets/images/videoPlayer/share.svg';
import arrowIcon from './../../assets/images/videoPlayer/arrow.svg';

export default function VideoPlayer() {
    return (
    <div className='video-player__container'>
        <div className='video-player__image-block'>
            <img className='video-player__image' src={playerImg} alt="video player"></img>
            <img className='video-player__mobile-image' src={mobilePlayerImg} alt="video player"></img>
        </div>
        <div className='navigation-panel'>
            <div className='navigation-panel__left-block'>
                <div className='navigation-panel__video-title-container'>
                    <h2 className='navigation-panel__video-title'>Dude You Re Getting A Telescope</h2>
                    <div className='navigation-panel__arrow-block'>
                        <img className='navigation-panel__arrow-block' src={arrowIcon} alt='show more information'></img> 
                    </div>
                </div>
                <p className='navigation-panel__view-count'>123k views</p>
            </div>
            <div className='navigation-panel__right-block'>
                <div className='navigation-panel__buttons-block'>
                    <div className='navigation-panel__button'>
                    <div className='navigation-panel__button-icon-container'>
                        <img className='navigation-panel__button-icon' src={likeBtnIcon} alt='dislike button'></img>
                    </div>
                        <div className='navigation-panel__button-text'>123k</div>
                    </div>
                    <div className='navigation-panel__button'>
                    <div className='navigation-panel__button-icon-container'>
                        <img className='navigation-panel__button-icon' src={dislikeBtnIcon} alt='like button'></img>
                    </div>
                        <div className='navigation-panel__button-text'>435k</div>
                    </div>
                    <div className='navigation-panel__button'>
                        <div className='navigation-panel__button-icon-container'>
                            <img className='navigation-panel__button-icon' src={shareBtnIcon} alt='share button'></img>
                        </div>
                        <div className='navigation-panel__button-text'>Share</div>
                    </div>
                </div>
                <div className='navigation-panel__more-button-container'>
                    <img className='navigation-panel__more-button' src={moreBtnIcon} alt='show more button'></img>
                </div>
            </div>
        </div>
    </div>
    )
}