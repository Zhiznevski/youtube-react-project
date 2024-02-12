import './VideoDescription.css';
import chanelImg from './../../assets/images/videoDescription/channel.svg';


export default function VideoDescription() {
    return (
    <div className='video-description__container'>
        <div className='video-description__content'>
            <div className='video-description__image-container'>
                <img className='video-description__profile-image' src={chanelImg} alt='chanel icon'></img>
            </div>
            <div className='video-description__main-info'>
                <div className='video-description__title'>Food & Drink</div>
                <div className='video-description__creation-info'>Published on 14 Jun 2019</div>
                <div className='video-description__subs-count'>245K subscribed</div>
                <div className='video-description__about-video'>A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumers mood when they see your ad. </div>
                <div className='video-description__show-more'>Show more</div>
            </div>
        </div>
        <div className='video-description__subscribe-button'>
            Subscribe 2.3m
        </div>
        <div className='video-description__mobile-subscribe-button'>
            Subscribe
        </div>
    </div>
    )
}